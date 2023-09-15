import { NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

import { prisma } from "@/utils/prisma";

type Body = {
  email: string;
  password: string;
};

export async function POST(request: Request) {
  const { email = "", password = "" }: Body = await request.json();
  const errors: Partial<Body> = {};

  if (!validator.isEmail(email)) {
    errors.email = "Email is invalid!";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password is required!";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json(
      { error: "Please signup first!" },
      { status: 401 }
    );
  }

  const isOwner = await bcrypt.compare(password, user.password);

  if (!isOwner) {
    return NextResponse.json(
      { error: "Wrong email and password combination!" },
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(secret);

  return NextResponse.json({ token, user });
}

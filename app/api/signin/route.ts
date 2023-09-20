import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

import { prisma } from "@/utils/prisma";
import { AUTH_COOKIE } from "@/utils/constants";

type Error = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const errors: Error = {};

  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

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
      { message: "Please signup first!" },
      { status: 401 }
    );
  }

  const isOwner = await bcrypt.compare(password, user.password);

  if (!isOwner) {
    return NextResponse.json(
      { message: "Wrong email and password combination!" },
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(secret);

  cookies().set(AUTH_COOKIE, token, { maxAge: 6 * 24 * 60 * 60 });

  return NextResponse.json(user);
}

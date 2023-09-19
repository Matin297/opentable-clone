import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

import { prisma } from "@/utils/prisma";
import { AUTH_COOKIE } from "@/utils/constants";

type SignupError = {
  password?: string;
  email?: string;
  phone?: string;
  city?: string;
  first_name?: string;
  last_name?: string;
};

const LENGTH_CONFIG = {
  min: 2,
  max: 15,
};

export async function POST(request: Request) {
  const formData: FormData = await request.formData();

  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const city = formData.get("city")?.toString() || "";
  const first_name = formData.get("first_name")?.toString() || "";
  const last_name = formData.get("last_name")?.toString() || "";

  const errors: SignupError = {};

  if (!validator.isEmail(email)) {
    errors.email = "Email is invalid!";
  }

  if (!validator.isStrongPassword(password)) {
    errors.password =
      "Password should have minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1.";
  }

  if (!validator.isMobilePhone(phone)) {
    errors.phone = "Phone number is not valid!";
  }

  if (validator.isEmpty(city)) {
    errors.city = "City is required!";
  }

  if (!validator.isLength(first_name, LENGTH_CONFIG)) {
    errors.first_name = "First name length should be between 2 to 15!";
  }

  if (!validator.isLength(last_name, LENGTH_CONFIG)) {
    errors.last_name = "Last name length should be between 2 to 15!";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(errors, { status: 400 });
  }

  let user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return NextResponse.json(
      { message: "Email already exists!" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(secret);

  user = await prisma.user.create({
    data: {
      city,
      email,
      first_name,
      last_name,
      phone,
      password: hashedPassword,
    },
  });

  cookies().set(AUTH_COOKIE, token, { maxAge: 6 * 24 * 60 * 60 });

  return NextResponse.json(user);
}

import { NextResponse } from "next/server";
import validator from "validator";

type Body = {
  password: string;
  email: string;
  phone: string;
  city: string;
  first_name: string;
  last_name: string;
};

const LENGTH_CONFIG = {
  min: 2,
  max: 15,
};

export async function POST(request: Request) {
  const {
    email = "",
    password = "",
    phone = "",
    city = "",
    first_name = "",
    last_name = "",
  }: Body = await request.json();
  const errors: Partial<Body> = {};

  if (!validator.isEmail(email)) {
    errors.email = "Email is invalid!";
  }

  if (!validator.isStrongPassword(password)) {
    errors.password =
      "Password should have minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1";
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
    return NextResponse.json({ errors }, { status: 400 });
  }

  return NextResponse.json({ token: `${email}/${password}` });
}

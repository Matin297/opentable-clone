import { NextResponse, NextRequest } from "next/server";
import * as jose from "jose";

type Payload = jose.JWTPayload & {
  email?: string;
};

export const config = {
  matcher: ["/api/profile"],
};

export async function middleware(req: NextRequest) {
  const bearerToken = req.headers.get("authorization");

  if (!bearerToken) {
    return NextResponse.json(
      {
        message: "Access to this resource is denied!",
      },
      { status: 403 }
    );
  }

  const [, token] = bearerToken.split(" ");

  if (!token) {
    return NextResponse.json(
      { message: "Access to this resource is denied!" },
      { status: 403 }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let payload: Payload = {};

  try {
    const result = await jose.jwtVerify(token, secret);
    payload = result.payload;
  } catch (error) {
    return NextResponse.json(
      { message: "Access to this resource is denied!" },
      { status: 403 }
    );
  }

  if (!payload.email) {
    return NextResponse.json(
      { message: "Access to this resource is denied!" },
      { status: 403 }
    );
  }
}

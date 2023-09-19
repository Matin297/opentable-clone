import { NextResponse } from "next/server";
import { headers } from "next/headers";
import * as jose from "jose";

import { prisma } from "@/utils/prisma";

export async function GET() {
  const headersList = headers();
  const [, token] = headersList.get("authorization")!.split(" ");

  const payload = jose.decodeJwt(token);

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email as string,
    },
  });

  return NextResponse.json(user);
}

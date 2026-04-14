import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { name, email, password, role } = await req.json();

  // Check if user exists
  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    return NextResponse.json(
      { error: "Email already in use" },
      { status: 400 }
    );
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user and vendor profile if applicable
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: role || "CUSTOMER",
      ...(role === "VENDOR" && {
        vendor: {
          create: {
            storeName: `${name}'s Store`,
          },
        },
      }),
    },
    include: {
      vendor: true,
    },
  });

  return NextResponse.json({
    message: "Account created successfully",
    user: { 
      id: user.id, 
      email: user.email, 
      role: user.role,
      vendorId: user.vendor?.id 
    },
  });
}
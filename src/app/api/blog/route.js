import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("DB not connected");
  }
}

export const GET = async (req, res) => {
  console.log("GET");
  try {
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req, res) => {
  console.log("POST");
};

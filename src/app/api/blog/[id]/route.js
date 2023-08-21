import { NextRequest, NextResponse } from "next/server";
import { main } from "../route";
import prisma from "../../../../../prisma";

export const GET = async (req, res) => {
  try {
    const id = req.url.split("/blog/")[1];
    await main();
    const post = await prisma.post.findFirst({ where: { id } });
    if (!post) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    } else {
      return NextResponse.json({ message: "Success", post }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req, res) => {};

export const DELETE = async (req, res) => {};

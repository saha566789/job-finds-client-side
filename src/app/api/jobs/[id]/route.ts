import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export async function PUT(request:any, { params }) {
    const { id } = params;
    const postInfo = await request.json();
    await connect();
    await Post.findByIdAndUpdate(id, postInfo);
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  }
  
  export async function GET(request:any, { params }) {
    const { id } = params;
    await connect();
    const topic = await Post.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
  }
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

export const POST = async (request: any) => {
  try {
    const postInfo = await request.json();
    const newPost = new Post(postInfo);

    await connect();
    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const GET = async () => {
    try {
      await connect();
      const posts = await Post.find({});
      
      return new NextResponse(JSON.stringify(posts), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (err) {
      console.error("Database Error:", err);
      return new NextResponse("Database Error", { status: 500 });
    }
  };

  export async function DELETE(request:any) {
    const id = request.nextUrl.searchParams.get("id");
    await connect();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  }
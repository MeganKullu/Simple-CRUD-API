import { addPost, getPosts, updatePost, deletePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req:Request, res:Response) => {
    try {
        const posts = getPosts();
        return NextResponse.json({message:"OK",posts}, {status:200});

    } catch (err) {
        return NextResponse.json({message: "Error",err}.err, {
            status: 500,
        })
    }
}

// get a post by ID

export const POST = async (req:Request, res:Response) => {
    const {title,desc} = await req.json(); 
    try {
        const post = { title, desc, date: new Date(), id: Date.now().toString()}
        addPost(post);
        return NextResponse.json({message:"OK",post}, {status:201});
    } catch (error) {
        return NextResponse.json(
            { message: "Error" },
            {
             status: 500,
            }
        );
     } 
    // update a post by id
};

export const PUT = async (req:Request) => {
    try {
        const {title,desc} = await req.json(); 
        const id = req.url.split("blogs/")[1];
        updatePost(id, title, desc);
        return NextResponse.json({message:"OK"}, {status:200});
    } catch (err) {
        return NextResponse.json({ message: "ERROR", err}, { status: 500});
    }
}

export const DELETE = async (req: Request) => {
    try {
        const id = req.url.split("blogs/")[1];
        deletePost(id);
        return NextResponse.json({message:"OK"}, {status:200});
    } catch (err) {
        return NextResponse.json({ message: "ERROR", err}, { status: 500});
    }
    
}
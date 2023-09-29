export const GET = async (req:Request) => {
    const id = req.url;
    console.log(id);
};

export const POST = async (req:Request, res:Response) => {
    console.log("POST REQUEST");
};

export const DELETE = async (req:Request, res:Response) => {
    console.log("DELETE")    
}
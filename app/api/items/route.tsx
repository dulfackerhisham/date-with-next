export async function GET(req) {

    const type = req.nextUrl.searchParams.get('type')
    console.log("type:", type);
    
    return Response.json([
        {title: "Speedway"},
        {director: "shamil"}
    ])
};

export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    
    return Response.json({message: "POST success"})
}
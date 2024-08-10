export async function GET() {
    return Response.json([
        {title: "Speedway"},
        {director: "shamil"}
    ])
};

export async function POST() {
    return Response.json({message: "POST success"})
}
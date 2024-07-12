export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request: Request) {
    console.log("GET")
    console.log(request);
    return new Response(`Hello, received ${request.body}`);
}

export async function POST(request: Request) {
    try {
        const body = await request.json(); // Parse the JSON body asynchronously
        console.log("POST");
        console.log(body); // Log the parsed body for debugging
        return new Response(`Hello, received ${JSON.stringify(body)}`);
    } catch (error) {
        console.error("Error reading request body:", error);
        return new Response("Error reading request body", { status: 400 });
    }
}
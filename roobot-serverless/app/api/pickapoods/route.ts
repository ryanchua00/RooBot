export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request: Request) {
    console.log("GET")
    console.log(request);
    return new Response(`Hello, received ${request.body}`);
}

export function POST(request: Request) {
    console.log("POST")
    console.log(request);
    return new Response(`Hello, received ${request.body}`);
}
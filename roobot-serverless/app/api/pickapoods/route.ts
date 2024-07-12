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
        console.log(body.message.entities)
        return new Response(`Hello, received ${JSON.stringify(body)}`);
    } catch (error) {
        console.error("Error reading request body:", error);
        return new Response("Error reading request body", { status: 400 });
    }
}

// {
//     update_id: 880770868,
//     message: {
//       message_id: 18,
//       from: {
//         id: 655399596,
//         is_bot: false,
//         first_name: 'Ryan',
//         username: 'roodyboi'
//       },
//       chat: {
//         id: -4244173013,
//         title: 'Roody Updates',
//         type: 'group',
//         all_members_are_administrators: true
//       },
//       date: 1720771853,
//       text: '/pick_a_poods@RoodyUpdateBot',
//       entities: [ [Object] ]
//     }
//   }
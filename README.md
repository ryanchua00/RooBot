# RooBot 

Roobot is a telegram bot that pings users for daily updates for your favourite pets!
This bot is named after my dog, Roody, and was created due to me being away on an exchange. And at the request of my girlfriend.

## Aims
1. Daily alert at preset timing to ask for new pictures
2. Allow only certain users to respond to ping
3. Have a dedicated storage for pictures 
4. Allow for random selection for pre-existing pictures when no new picture is given
5. Interaction for pictures

## How it works
1. Github Actions cron job, to run at 10am SGT, trigger telegram sendMessage
2. 

## Plans
- [X] Bot added into a channel
- [ ] Bot's message has options
- [ ] Register users into different groups
- [ ] Storage somewhere, local first then a place online

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

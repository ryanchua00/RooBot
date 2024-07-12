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

### Pick a Poods!
1. Webhook to Vercel functions
2. GET random roody photo from google drive
3. POST link to bot 

## Plans
- [X] Bot added into a channel
- [ ] Bot's message every 10am SGT
- [ ] Storage somewhere, local first then a place online

### Notes
1. Currently, webhook and GetUpdates endpoint only shows the command message, i.e
> /pick_a_poods@RoodyUpdateBot

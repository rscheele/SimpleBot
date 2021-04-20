import Discord from "discord.js";

if (!process.env.DISCORD_TOKEN) {
    throw new Error("DISCORD_TOKEN environment variable missing.");
}

const onReady = () => {
    console.log("Connected");

    if (client.user){
        console.log("Logged in as ${client.user.tag}.")
    }
};
const onMessage = (message: Discord.Message) => { 
    // TODO: Implement this
};

const client = new Discord.Client();

client.on('ready', onReady);
client.on('message', onMessage);
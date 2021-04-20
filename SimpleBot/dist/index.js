"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
if (!process.env.DISCORD_TOKEN) {
    throw new Error("DISCORD_TOKEN environment variable missing.");
}
const onReady = () => {
    console.log("Connected");
    if (client.user) {
        console.log("Logged in as ${client.user.tag}.");
    }
};
const onMessage = (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content.toLowerCase() == "ping") {
        message.reply("Pong!");
    }
    if (message.content.toLowerCase() == "pong") {
        message.reply("Ping!");
    }
};
const client = new discord_js_1.default.Client();
client.on('ready', onReady);
client.on('message', onMessage);
const discordToken = process.env.DISCORD_TOKEN;
client.login(discordToken);
//# sourceMappingURL=index.js.map
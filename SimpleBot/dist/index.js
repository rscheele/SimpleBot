"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
// Set in ENV $env:DISCORD_TOKEN = 'MyToken'
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
    // TODO: Implement this
};
const client = new discord_js_1.default.Client();
client.on('ready', onReady);
client.on('message', onMessage);

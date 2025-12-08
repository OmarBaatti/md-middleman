const {
  REST,
  Routes,
  Client,
  GatewayIntentBits,
  Events,
} = require("discord.js");
const { handleMirroring } = require("./functions/sharing/sharing");
require("dotenv").config();

const commands = [
  {
    name: "ping",
    description: "Sends back a pong response.",
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_BOT_TOKEN
);

try {
  console.log("Started refreshing application (/) commands.");
  rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.id === client.user.id) return;

  console.log(`Message received: ${message.content}`);
  console.log(`From: ${message.author.tag} (${message.author.id})`);
  console.log(`Channel: ${message.channel.name} (${message.channel.id})`);
  
  await handleMirroring(message);
});

client.login(process.env.DISCORD_BOT_TOKEN);
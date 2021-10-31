import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import env from 'dotenv';
import path from 'path';

env.config();

const SERVER = `${process.env.SERVER}`;
const TOKEN = `${process.env.TOKEN}`;

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    // Allow importing of .ts files if you are using ts-node
    typeScript: true,
    // What guilds your slash commands will be created in
    testServers: [SERVER],
  });
});

client.login(TOKEN);

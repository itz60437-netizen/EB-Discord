require("dotenv").config();

const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const comando = new SlashCommandBuilder()
    .setName("vincular")
    .setDescription("Vincula sua conta Roblox ao Discord.");

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log("Registrando /vincular...");

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: [comando.toJSON()] }
        );

        console.log("✅ /vincular registrado!");
    } catch (erro) {
        console.error(erro);
    }
})();

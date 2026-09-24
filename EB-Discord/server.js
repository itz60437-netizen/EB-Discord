require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder
} = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot online como ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "vincular") {
        const embed = new EmbedBuilder()
            .setTitle("🔗 Vincular Roblox")
            .setDescription(
                "Clique no botão abaixo para vincular sua conta Roblox ao Discord."
            );

        const botao = new ButtonBuilder()
            .setCustomId("vincular_roblox")
            .setLabel("Vincular Roblox")
            .setEmoji("🔗")
            .setStyle(ButtonStyle.Primary);

        const linha = new ActionRowBuilder()
            .addComponents(botao);

        await interaction.reply({
            embeds: [embed],
            components: [linha]
        });
    }
});

client.login(process.env.DISCORD_TOKEN);

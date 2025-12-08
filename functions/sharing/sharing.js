const { EmbedBuilder } = require("discord.js");
const { logMessage } = require("./logs");

const mirrors = [
  { 
    //Questioned

    // DEEN RESOURCES
    "1446874936223338497": "1446874938874007603", // 🎓 ᴢᴀᴅ-ᴀᴄᴀᴅᴇᴍʏ:🎓 ᴢᴀᴅ-ᴀᴄᴀᴅᴇᴍʏ
    "1446874939897548974": "1446874941722067017", // 🎓 ᴅᴇᴇɴ-ɪɴꜱᴛɪᴛᴜᴛᴇ:🎓 ᴅᴇᴇɴ-ɪɴꜱᴛɪᴛᴜᴛᴇ
    "1446874943609503886": "1446874945068990655", // 🎓 💰 ᴀᴍᴀᴜ:🎓 💰 ᴀᴍᴀᴜ
    "1446874946889449502": "1446874948776759337", // 🎓 💰 ꜱᴏᴋ:🎓 💰 ꜱᴏᴋ
    "1446874949959549089": "1446874951343931545", // 🎓 💰 ɪᴏᴜ:🎓 💰 ɪᴏᴜ

    // DEEN SHARING
    "1446859283613487154": "1446859290915897469", // 🔁 ᴀʜᴀᴅɪᴛʜꜱ-ᴀɴᴅ-ᴏᴛʜᴇʀ-ꜱᴛᴜꜰꜰ:🔁 ᴀʜᴀᴅɪᴛʜꜱ-ᴀɴᴅ-ᴏᴛʜᴇʀ-ꜱᴛᴜꜰꜰ
    "1446859281092575373": "1446859282292146227", // 🤲🏻 ᴀꜱᴋ-ꜰᴏʀ-ᴅᴜᴀ:🤲🏻 ᴀꜱᴋ-ꜰᴏʀ-ᴅᴜᴀ,
    "1446859260142026812": "1446859262553886901", // 🔁 📓 ɪʟᴍ-ʙᴏᴏᴋꜱ-ᴘᴅꜰꜱ:🔁 📓 ɪʟᴍ-ʙᴏᴏᴋꜱ-ᴘᴅꜰꜱ
    "1446859263866703965": "1446859265229848576", // 🔁 🔗 ɪʟᴍ-ᴡᴇʙꜱɪᴛᴇꜱ:🔁 🔗 ɪʟᴍ-ᴡᴇʙꜱɪᴛᴇꜱ
    "1446859266521567425": "1446859267947630744", // 🔁 🎥 ɪʟᴍ-ᴠɪᴅᴇᴏꜱ-ᴘʟꜱ:🔁 🎥 ɪʟᴍ-ᴠɪᴅᴇᴏꜱ-ᴘʟꜱ
    "1446859269319426170": "1446859271282233365", // 🔁 📼 ǫᴜʀᴀɴ-ʀᴇᴄɪᴛᴀᴛɪᴏɴꜱ:🔁 📼 ǫᴜʀᴀɴ-ʀᴇᴄɪᴛᴀᴛɪᴏɴꜱ
    "1446859273400487977": "1446859274998513836", // 🔁 ✨ ǫᴜᴏᴛᴇꜱ:🔁 ✨ ǫᴜᴏᴛᴇꜱ
    "1446859276923572244": "1446859277968085157", // 🔁 💞 ᴄʜᴀʀɪᴛɪᴇꜱ:🔁 💞 ᴄʜᴀʀɪᴛɪᴇꜱ

    // DEEN PINGS
    "1446876681246867477": "1446876679694843954", // 📢 ☪️ ᴇᴠᴇɴᴛꜱ:📢 ☪️ ᴇᴠᴇɴᴛꜱ
    "1446876683553603715": "1446876682534518926", // 📢 ☪️ ɪʟᴍ:📢 ☪️ ɪʟᴍ
    "1446876686946664510": "1446876684933398610", // 📢 ☪️ ᴄʜᴀʀɪᴛʏ:📢 ☪️ ᴄʜᴀʀɪᴛʏ
    "1446876689773887539": "1446876688490168370", // 📢 ☪️ ᴅᴜᴀ-ʀᴇǫᴜᴇꜱᴛꜱ:📢 ☪️ ᴅᴜᴀ-ʀᴇǫᴜᴇꜱᴛꜱ
    "1446876693104033907": "1446876691392888883", // 📢 ☪️ ǫᴜᴏᴛᴇꜱ:📢 ☪️ ǫᴜᴏᴛᴇꜱ
    "1446876696031793326": "1446876694672576512", // 📢 ☪️ ᴇʟꜱᴇ:📢 ☪️ ᴇʟꜱᴇ

    // GIVEAWAYS
    "1446823992840421386": "1446823994123620411", // 📢 ɢɪᴠᴇᴀᴡᴀʏꜱ:📢 ɢɪᴠᴇᴀᴡᴀʏꜱ
  },
  {
    //Not Questioned

    // PARTNERSHIPS
    "1446824001522630708": "1446824003003224167", // 📢 ᴘᴀʀᴛɴᴇʀꜱʜɪᴘꜱ:📢 ᴘᴀʀᴛɴᴇʀꜱʜɪᴘꜱ

    // YOUTUBE PINGS
    "1446783819901304832": "1446783731326259341", // 📢 🎥 ᴛʜᴇ-ᴍᴜꜱʟɪᴍ-ʟᴀɴᴛᴇʀɴ:📢 🎥 ᴛʜᴇ-ᴍᴜꜱʟɪᴍ-ʟᴀɴᴛᴇʀɴ
    "1446783762359779339": "1446783830823403571", // 📢 🎥 ᴏɴᴇ-ᴍᴇꜱꜱᴀɢᴇ-ꜰᴏᴜɴᴅᴀᴛɪᴏɴ:📢 🎥 ᴏɴᴇ-ᴍᴇꜱꜱᴀɢᴇ-ꜰᴏᴜɴᴅᴀᴛɪᴏɴ
  },
];

const questionBool = async (message) => {
  const expiresAt = Math.floor(Date.now() / 1000) + 60;
  const questionEmbed = new EmbedBuilder()
    .setTitle("Confirmation Required")
    .setDescription(
      `Do you want to Mirror this message to the other Gender? ONLY SELECT YES IF THE MESSAGE ISN'T QUESTIONABLE IN ANY WAY. \n The message will be deleted in 1 Minute (<t:${expiresAt}:R>)`
    )
    .setColor("Green");

  const questionMsg = await message.reply({ embeds: [questionEmbed] });

  await questionMsg.react("✅");
  await questionMsg.react("❌");

  const deleteTimeout = setTimeout(() => {
    questionMsg.delete().catch(() => {});
  }, 60000);

  const filter = (reaction, user) => {
    console.log(`Reaction: ${reaction.emoji.name}, User: ${user.tag}, Expected: ${message.author.tag}`);
    return (
      ["✅", "❌"].includes(reaction.emoji.name) &&
      user.id === message.author.id &&
      !user.bot
    );
  };

  try {
    console.log("Waiting for reaction...");
    const collected = await questionMsg.awaitReactions({
      filter,
      max: 1,
      time: 60000,
      errors: ["time"],
    });
    const chosenReaction = collected.first();
    console.log(`Chosen reaction: ${chosenReaction.emoji.name}`);

    clearTimeout(deleteTimeout);
    await questionMsg.delete().catch(err => console.log("Could not delete question:", err.message));

    if (chosenReaction.emoji.name === "✅") {
      questionMsg.delete().catch(err => console.log("Could not delete question:", err.message));
      return true;
    } else {
      questionMsg.delete().catch(err => console.log("Could not delete question:", err.message));
      clearTimeout(deleteTimeout);
      return false;
    }
  } catch (error) {
    console.error("Error or timeout in questionBool:", error.message);
    await questionMsg.delete().catch(() => {});
    return false;
  }
};

const writeMessage = async (questionB, message, target, femaleText) => {
  console.log(`writeMessage called - questionB: ${questionB}, target: ${target}`);
  
  if (questionB == true) {
    console.log("Sending confirmation question...");
    try {
      const shouldMirror = await questionBool(message);
      console.log(`User response: ${shouldMirror}`);
      if (!shouldMirror) {
        console.log("User declined, not mirroring");
        return;
      }
    } catch (error) {
      console.error("Error in questionBool:", error);
      return;
    }
  }
  
  console.log("Sending message to target channel...");
  try {
    const targetChannel = await message.client.channels.fetch(target);
    if (targetChannel) {
      await targetChannel.send({
        content: femaleText === null
        ? message.content // NO SUFFIX
        : femaleText
          ? message.content + "\n-# ||*Sent by a sister*||"
          : message.content + "\n-# ||*Sent by a brother*||",
        files: message.attachments.map(a => a.url)
      });
      console.log("Message sent successfully!");

      await logMessage(message, target, femaleText);
      
      const reply = await message.reply("✅ Message mirrored successfully!");
      setTimeout(() => {
        reply.delete().catch(() => {});
      }, 3000);
    } else {
      console.log("Target channel not found!");
    }
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

const handleMirroring = async (message, addSuffix) => {
  console.log("handleMirroring called");
  
  let question = true;
  let foundChannel = false;
  
  for (const mirror of mirrors) {
    console.log("Checking mirror set...");
    for (const [MaleCID, FemaleCID] of Object.entries(mirror)) {
      if (message.channel.id == MaleCID) {
        console.log(`Match found! Mirroring from Male -> Female`);
        foundChannel = true;
        await writeMessage(question, message, FemaleCID, addSuffix ? false : null);
      } else if (message.channel.id == FemaleCID) {
        console.log(`Match found! Mirroring from Female -> Male`);
        foundChannel = true;
        await writeMessage(question, message, MaleCID, addSuffix ? true : null);
      }
    }
    question = false;
  }

  if (foundChannel){
    console.log("handleMirroring completed");
  } else {
    console.log("The channel is not to be mirrored");
  }
};

module.exports = { handleMirroring };
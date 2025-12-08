const LOG_CHANNEL_ID = "1447490347428216945";

const logMessage = async (message, targetChannel, female) => {
  const logContent = `### Message transaction: \nfrom<#${message.channel.id}> (${female ? "Female Zone" : "Male Zone"}) \nto <#${targetChannel}> (${female ? "Male Zone" : "Female Zone"}) \n**User:** <@${message.author.id}> (${female ? "Female" : female === null ? "BOT" : "Male"}) \n \n**Message content:** \n${message.content}`;

  try {
    const logChannel = await message.client.channels.cache.get(LOG_CHANNEL_ID);
    if (logChannel) {
      await logChannel.send({
        content: logContent,
        files: message.attachments.map(a => a.url)
      });
      console.log("Log message sent successfully!");
    } else {
      console.log("Log channel not found!");
    }
  } catch (error) {
    console.error("Error sending log message:", error);
  }
}

module.exports = { logMessage };
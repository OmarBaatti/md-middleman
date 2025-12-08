const LOG_CHANNEL_ID = "1447490347428216945";

const logMessage = async (message, targetChannel) => {
  const logContent = `### Message transaction from <#${message.channel.id}> to <#${targetChannel}> \n**User:** <@${message.author.id}> \n \n**Message content:** \n${message.content}`;

  try {
    const logChannel = await message.client.channels.cache.get(LOG_CHANNEL_ID);
    if (logChannel) {
      await logChannel.send({ content: logContent });
      console.log("Log message sent successfully!");
    } else {
      console.log("Log channel not found!");
    }
  } catch (error) {
    console.error("Error sending log message:", error);
  }
}

module.exports = { logMessage };
export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // الوقت بتوقيت مصر بنظام 12 ساعة
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Africa/Cairo"
  });

  const message = `🚀 Someone just visited your portfolio!\n⏰ Time (Egypt): ${timeString}`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });

    return { statusCode: 200, body: "Notification sent" };
  } catch (error) {
    return { statusCode: 500, body: "Error sending notification" };
  }
}

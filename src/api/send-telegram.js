export default async function handler(req, res) {
    try {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        // الوقت بتوقيت مصر
        const now = new Date();

        const time = now.toLocaleString("en-US", {
            timeZone: "Africa/Cairo",
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });

        const message = `
        🚀 Someone just visited your NEW portfolio!    
        🕒 Time:
        ${time}
    `;

        const telegramURL = `https://api.telegram.org/bot${token}/sendMessage`;

        const response = await fetch(telegramURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        const data = await response.json();

        return res.status(200).json({
            success: true,
            telegram: data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}
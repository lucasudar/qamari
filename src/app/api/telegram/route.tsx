import { toMarkdownFormat } from "@/lib/utils";

const telegramBotKey = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const chat_id = process.env.NEXT_PUBLIC_TELEGRAM_USER_ID;

export async function POST(req: Request) {
    const currentUtcTime = new Date(Date.now());
    const edmontonTime = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'America/Edmonton' }));
    const formattedEdmontonTime = `${edmontonTime.getMonth() + 1}/${edmontonTime.getDate()}/${edmontonTime.getFullYear()} ${edmontonTime.getHours()}:${String(edmontonTime.getMinutes()).padStart(2, '0')}`;
    const endpoint = `https://api.telegram.org/bot${telegramBotKey}/sendMessage`;
    if (req.method === 'POST') {
        try {
            if (!telegramBotKey || !chat_id) {
                throw new Error('Telegram bot key or chat id not found');
            }
            const body = await req.json();
            const { name, email, phone, message } = body;

            const formattedMessage = toMarkdownFormat(formattedEdmontonTime, {
                name,
                email,
                phone,
                message
            });

            const payload = {
                chat_id,
                text: formattedMessage,
                parse_mode: 'markdown',
            };
            await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            return new Response('Message sent successfully', { status: 200 });
        } catch (error) {
            console.error(error);
            return new Response('Failed to send message', { status: 500 });
        }

    } else {
        return new Response('Method Not Allowed', { status: 405 });
    }
}

import toast from "react-hot-toast";

export async function sendFormToTelegram(message) {
  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    if (response.ok) {
      toast.success("Дякуємо за запит! Очікуйте дзвінка нашого менеджера!");
    } else {
      toast.error("Щось пішло не так. Спробуйте пізніше!");
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

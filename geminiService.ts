import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = () => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are 'AruArtZone AI', a creative design consultant for AruArtZone, a branding company in Arua City, Uganda. 
        Your goal is to help clients brainstorm design ideas for logos, slogans, color palettes, and marketing materials.
        Keep your tone professional, artistic, and encouraging. 
        If asked about services, mention: Logo design, posters, banners, business cards, stickers, t-shirt printing, photo editing, and corporate branding.
        Emphasize creativity, fast delivery, and affordable prices.
        Keep responses concise (under 100 words unless asked for detail).`,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
    return "AI Service is currently unavailable. Please check your API configuration.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again.";
  }
};

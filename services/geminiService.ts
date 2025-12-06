import { GoogleGenAI } from "@google/genai";
import { ScheduleItem, Speaker } from "../types";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a system prompt based on the event data.
 */
const generateSystemContext = (schedule: ScheduleItem[], speakers: Speaker[]): string => {
  const scheduleText = schedule.map(s => `- ${s.time}: ${s.activity} (${s.type}) ${s.speaker ? `por ${s.speaker}` : ''}`).join('\n');
  const speakersText = speakers.map(s => `- ${s.name} (${s.role} na ${s.company}): ${s.bio}`).join('\n');

  return `
    Você é o Assistente Virtual Inteligente do evento CIGRE Brasil CE B4 (Comitê de Estudos B4 - Sistemas de Corrente Contínua e Eletrônica de Potência).
    
    Sua função é ajudar os participantes com dúvidas sobre a programação, palestrantes e tópicos técnicos (HVDC, FACTS, inversores, etc.).

    DADOS DO EVENTO:
    
    PROGRAMAÇÃO:
    ${scheduleText}

    PALESTRANTES:
    ${speakersText}

    DIRETRIZES:
    1. Responda de forma educada, profissional e concisa.
    2. Se a pergunta for sobre o horário de algo, consulte a programação acima.
    3. Se a pergunta for técnica (ex: "O que é HVDC?"), dê uma explicação breve e técnica em português.
    4. Sempre responda em Português do Brasil.
    5. Não invente informações sobre o evento que não estejam listadas acima. Se não souber, sugira contatar a organização no estande.
  `;
};

export const sendMessageToGemini = async (
  message: string,
  schedule: ScheduleItem[],
  speakers: Speaker[]
): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash';
    const systemInstruction = generateSystemContext(schedule, speakers);

    const response = await ai.models.generateContent({
      model: modelId,
      contents: message,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui processar sua resposta no momento.";

  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Desculpe, estou enfrentando dificuldades técnicas. Tente novamente em alguns instantes.";
  }
};
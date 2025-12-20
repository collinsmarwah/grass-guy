
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Always use the direct process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getLawnCareAdvice = async (history: ChatMessage[], prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are 'The Grass Guy', a friendly, professional lawn care expert. 
        Your goal is to help customers with lawn maintenance tips and answer questions about their yard. 
        Keep your tone helpful, neighborly, and concise. 
        If they ask for an estimate, encourage them to use the estimate form on the website. 
        Current Context: Professional Lawn Care in Florida and nearby regions.`,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. How else can I help your lawn today?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Looks like my brain is a bit mowed over. Please try again in a moment!";
  }
};

export const generateSmartEstimate = async (
  address: string, 
  description: string, 
  location?: { latitude: number; longitude: number }
): Promise<string> => {
  try {
    const config: any = {
      tools: [{ googleMaps: {} }],
    };

    if (location) {
      config.toolConfig = {
        retrievalConfig: {
          latLng: {
            latitude: location.latitude,
            longitude: location.longitude
          }
        }
      };
    }

    // Using gemini-2.5-flash for maps grounding support
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a short, professional "AI-powered preview" for a lawn care estimate. 
      Address provided by user: ${address}. 
      Current Coordinates: ${location ? `${location.latitude}, ${location.longitude}` : 'Unknown'}.
      User Description of lawn: ${description}. 
      Use Google Maps to verify the neighborhood if possible.
      Give 3 bullet points of what kind of care might be needed (considering local climate/soil if coordinates are provided) and a "Estimated Health Score" from 1-100 based on the description. 
      Be realistic and helpful. Finish with "A technician will confirm this shortly."`,
      config: config
    });
    
    let text = response.text || "We are preparing your estimate details now.";
    
    // Extract grounding URLs if any
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks && chunks.length > 0) {
      const links = chunks
        .map((c: any) => c.maps?.uri)
        .filter(Boolean)
        .map((uri: string) => `[Property Context](${uri})`);
      
      if (links.length > 0) {
        text += "\n\n**Neighborhood Context Found:**\n" + links.join("\n");
      }
    }

    return text;
  } catch (error) {
    console.error("Estimate Generation Error:", error);
    return "We've received your request and our technicians are reviewing your property imagery now.";
  }
};

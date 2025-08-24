import { NextResponse } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `You are a professional technical interviewer and an AI assistant.
Your task is to analyze the following interview conversation and provide a detailed feedback report in JSON format.
The feedback should include:
- A numerical rating for technical skills, communication, problem-solving, and experience (on a scale of 1-10).
- A concise performance summary.
- A recommendation ("Yes" or "No") and a message to support the recommendation.

The output MUST be a single JSON object. DO NOT include any text, explanations, or code blocks outside of the JSON.`;

export async function POST(req) {
  try {
    const { conversation } = await req.json();

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const messages = [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
      // Correctly map the Vapi message object to the OpenAI format
      ...conversation.map(msg => ({
        role: msg.role,
        content: msg.content, // Vapi messages use 'content', not 'text'
      })),
    ];
    
    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-exp:free',
      messages,
      response_format: { type: "json_object" },
    });

    const aiResponseContent = completion.choices[0].message.content;

    // Return the content as is
    return NextResponse.json({ raw: aiResponseContent });
  } catch (e) {
    console.error("API error:", e);
    // Return a structured error message that your front-end can handle
    return NextResponse.json({
      raw: `An error occurred: ${e.message}`,
    });
  }
}
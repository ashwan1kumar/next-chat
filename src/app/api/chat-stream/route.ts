import { ragChat } from "@/lib/rag-text";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const {messages, sessionId} = await req.json();
    console.log(messages);
    const recentMessage = messages.at(-1).content;
    const response = await ragChat.chat(recentMessage, {streaming: true, sessionId});
    console.log(response);
    return aiUseChatAdapter(response);
}
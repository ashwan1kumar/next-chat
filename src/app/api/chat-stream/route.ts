import { ragChat } from "@/lib/rag-text";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";
export const POST = async (req: NextRequest) => {
    try {
        const timeoutMs = 50000;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        const {messages, sessionId} = await req.json();
        const recentMessage = messages.at(-1).content;
        
        const response = await ragChat.chat(recentMessage, {
            streaming: true, 
            sessionId,
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        return aiUseChatAdapter(response);
    } catch (error: any) {
        if (error.name === 'AbortError') {
            return new Response('Request timeout', { status: 408 });
        }
        return new Response('Internal server error', { status: 500 });
    }
}

import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-text";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";


interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

function constructUrl({ url }: { url: string[] }){ 
    const urlTokens = url.map(token => decodeURIComponent(token));
    return urlTokens.join('//');
}
const Page = async ({params}: PageProps) => {
  const sessionCookie = (await cookies()).get("sessionId")?.value;
    const resolvedParams = await params
    const { url } = resolvedParams;
    const urlInput = constructUrl({ url: url as string[] })
    const isIndexed = await redis.sismember("url-indexes", urlInput);
    const sessionId = (urlInput + "--" + sessionCookie).replace(/\//g, "");
    const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId });
    if(!isIndexed){
        await ragChat.context.add({
            type: "html",
            source: urlInput
        })
        await redis.sadd('url-indexes', urlInput);
    }
    return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages}/>
}

export default Page;

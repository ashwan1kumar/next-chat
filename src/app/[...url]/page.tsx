
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
    const {url} = await params
    const urlInput = constructUrl({ url: url as string[] })
    const isIndexed = await redis.sismember("url-indexes", urlInput);
    const session = 'mock-session';
    if(!isIndexed){
        await ragChat.context.add({
            type: "html",
            source: urlInput
        })
        await redis.sadd('url-indexes', urlInput);
    }
    return <ChatWrapper sessionId={session}/>
}

export default Page;


import { ragChat } from "@/lib/rag-text";
import { redis } from "@/lib/redis";

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

function constructUrl({url}: {url: string[]}){
    url.forEach(item=>console.log(decodeURIComponent(item)))
    const urlTokens = url.map(token => decodeURIComponent(token));
    return urlTokens.join('//');
}
const Page = async ({params}: PageProps) => {
    const urlInput = constructUrl({url: params.url as string[]})
    const isIndexed = await redis.sismember("url-indexes", urlInput);
    if(!isIndexed){
        await ragChat.context.add({
            type: "html",
            source: urlInput
        })
        await redis.sadd('url-indexes', urlInput);
    }
    
}

export default Page;

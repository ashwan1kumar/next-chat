'use client'

import { useChat } from "ai/react"


export const ChatWrapper = ({sessionId}: {sessionId: string}) => {
    const {messages, handleInputChange, handleSubmit, input} = useChat({
        api: "/api/stream-chat",
        body: {sessionId}
    })

    return (
        <div className="justify-between gap-2 relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col">
            <div className="justify-between flex-1 text-black flex flex-col bg-zinc-800">
                {JSON.stringify(messages)}
            </div>
            <form onSubmit={handleSubmit}>
                <input className="text-black" type="text" onChange={handleInputChange}/>
                <button type="submit"> Send </button>
            </form>
        </div>
    )
}
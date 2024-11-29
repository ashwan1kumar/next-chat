'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [domain, setDomain] = useState('');

  useEffect(() => {
    // Get the current domain, excluding any path
    setDomain(window.location.origin);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Chat with Any Website
        </h1>
        
        <div className="space-y-4 bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800/30 p-6 rounded-xl border border-gray-300 dark:border-neutral-800">
          <p className="text-lg">
            To get started, simply add your website URL after our domain:
          </p>
          
          <div className="bg-gray-100 dark:bg-zinc-800/50 p-4 rounded-lg font-mono text-sm">
            <code>{domain}/https://example.com</code>
          </div>
          
          <div className="space-y-2 text-left">
            <p className="font-semibold">Examples:</p>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/https://wikipedia.org/wiki/Artificial_intelligence"
                  className="text-blue-500 hover:underline break-all"
                >
                  {domain}/https://wikipedia.org/wiki/Artificial_intelligence
                </Link>
              </li>
              <li>
                <Link 
                  href="/https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  className="text-blue-500 hover:underline break-all"
                >
                  {domain}/https://developer.mozilla.org/en-US/docs/Web/JavaScript
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>Our AI will crawl the website and let you chat about its content using advanced RAG technology.</p>
        </div>
      </div>
    </main>
  );
}

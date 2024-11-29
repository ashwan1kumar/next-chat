# Website Chat Assistant

A Next.js application that allows users to chat with any website's content using RAG (Retrieval-Augmented Generation) and LLM technology. The application crawls website content and enables users to have interactive conversations about the content.

## Features

- 🌐 Website Content Crawling
- 💬 Interactive Chat Interface
- 🤖 AI-Powered Responses using Meta-Llama-3-8B
- 🔄 Real-time Streaming Responses
- 🎨 Dark Mode UI
- 📱 Responsive Design

## Tech Stack

- **Framework**: Next.js 14
- **UI Components**: NextUI
- **Styling**: Tailwind CSS
- **Database**: Upstash Redis
- **AI/LLM**: Meta-Llama-3-8B-Instruct
- **Chat Implementation**: Upstash RAG Chat

## How It Works

1. Users enter a website URL in the format: `http://localhost:3000/example.com`
2. The application crawls the website content and indexes it in Redis
3. A chat interface appears where users can ask questions about the website's content
4. The RAG system retrieves relevant content and generates contextual responses

## Key Components

### Chat System
- Uses RAG (Retrieval-Augmented Generation) for context-aware responses
- Maintains chat history per session
- Streams responses in real-time

### User Interface
- Clean, modern dark mode interface
- Responsive chat layout
- Support for markdown formatting
- Real-time message streaming

## Environment Setup

Required environment variables:


## Usage

1. Clone the repository
2. Install dependencies: run npm install
3. Run the development server: npm run dev

4. Open `http://localhost:3000` and enter a website URL to start chatting

## Project Structure

- `/app` - Next.js pages and API routes
- `/components` - Reusable UI components
- `/lib` - Utility functions and configurations
- `/public` - Static assets

## License

MIT

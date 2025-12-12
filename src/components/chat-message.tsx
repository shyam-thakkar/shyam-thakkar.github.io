'use client';

import { type ChatMessage, MessageStatus } from '@/lib/chat-types';
import { CheckCircle2, Circle, XCircle, User, Bot } from 'lucide-react';

interface ChatMessageProps {
    message: ChatMessage;
}

export function ChatMessageComponent({ message }: ChatMessageProps) {
    const isUser = message.isUser;

    return (
        <div
            className={`flex gap-2.5 mb-3 animate-fade-in ${isUser ? 'flex-row-reverse' : 'flex-row'
                }`}
        >
            {/* Avatar */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 dark:bg-zinc-700 flex items-center justify-center shadow-sm">
                {isUser ? (
                    <User className="w-4 h-4 text-zinc-100" />
                ) : (
                    <Bot className="w-4 h-4 text-zinc-100" />
                )}
            </div>

            {/* Message Content */}
            <div className={`flex-1 ${isUser ? 'flex flex-col items-end' : 'flex flex-col items-start'} max-w-[75%]`}>
                {/* User Message - Show Query */}
                {isUser && message.query && (
                    <>
                        <div className="bg-zinc-900 dark:bg-zinc-800 text-white px-4 py-2.5 rounded-2xl rounded-br-md shadow-sm border border-zinc-800 dark:border-zinc-700">
                            <p className="text-[13px] leading-relaxed whitespace-pre-wrap break-words">
                                {message.query}
                            </p>
                        </div>
                        {/* Status and Timestamp on same line for user messages */}
                        <div className="flex items-center gap-1.5 mt-1 px-1">
                            {message.status && (
                                <>
                                    {message.status === MessageStatus.SENDING && (
                                        <Circle className="w-3 h-3 text-muted-foreground/60 animate-pulse" />
                                    )}
                                    {message.status === MessageStatus.SENT && (
                                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-500" />
                                    )}
                                    {message.status === MessageStatus.FAILED && (
                                        <XCircle className="w-3 h-3 text-red-500" />
                                    )}
                                </>
                            )}
                            <span className="text-[11px] text-muted-foreground/70">
                                {new Date(message.timestamp).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </span>
                        </div>
                    </>
                )}

                {/* Bot Message - Show Only Response */}
                {!isUser && message.response && (
                    <>
                        <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-zinc-100 dark:bg-zinc-800/50 text-foreground shadow-sm border border-zinc-200 dark:border-zinc-800">
                            <p className="text-[13px] leading-relaxed whitespace-pre-wrap break-words">
                                {message.response}
                            </p>
                        </div>

                        {/* Timestamp for AI messages */}
                        <div className="text-[11px] text-muted-foreground/70 mt-1 px-1">
                            {new Date(message.timestamp).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

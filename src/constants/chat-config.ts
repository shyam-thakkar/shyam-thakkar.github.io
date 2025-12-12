export const CHAT_CONFIG = {
    // WebSocket URL for real-time chat
    WS_URL: 'wss://airplane-obj-stevens-module.trycloudflare.com/ws/chat/',

    // REST API endpoints
    CHAT_HISTORY_URL: 'https://34.180.48.177.sslip.io/chat/history/',
    DELETE_SESSION_URL: 'https://34.180.48.177.sslip.io/chat/session/',

    // Storage keys
    STORAGE_KEYS: {
        SESSION_DB: 'chat-sessions-db',
        SESSION_STORE: 'sessions',
        SESSION_KEY: 'current-session',
    },

    // Connection settings
    RECONNECT: {
        MAX_ATTEMPTS: 5,
        INITIAL_DELAY: 1000,
        MAX_DELAY: 30000,
        BACKOFF_MULTIPLIER: 2,
    },
} as const;

/// <reference types="vite/client" />

// Meta Pixel types
interface Window {
  fbq: (action: string, eventName: string, params?: Record<string, any>) => void;
  _fbq: any;
}

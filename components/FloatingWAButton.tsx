"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWAButton({ waLink }: { waLink: string }) {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:scale-110 transition-all animate-bounce slow"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      <span className="absolute -top-12 right-0 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat via WhatsApp
      </span>
    </a>
  );
}
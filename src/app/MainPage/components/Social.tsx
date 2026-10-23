"use client"

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Social() {
  const { t } = useLanguage();

  return (
    <section className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/20 pb-6">
          <h2 className="text-2xl font-mono tracking-widest text-white">
            {t.topPage.social.youtubeTitle}
          </h2>
          <Link
            href="https://www.youtube.com/@CREATErocket"
            className="group flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

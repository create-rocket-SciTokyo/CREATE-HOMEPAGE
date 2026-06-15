"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer({ className = "" }: { className?: string }) {
  return (
  <footer className={`bg-black backdrop-blur-sm text-white relative z-10 ${className}`}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">© 2026 CREATE. All Rights Reserved.</div>
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Link href="https://www.instagram.com/create_rocket/">
              <Image
                src="/Instagram_Glyph_Gradient.png"
                alt="Logo"
                width={240}
                height={240}
                className="object-contain drop-shadow-lg w-5 h-5 sm:w-7 sm:h-7"
                priority
              />
            </Link>
            <Link href="https://x.com/CREATE_rocket">
              <Image
                src="/twitter-logo-white.png"
                alt="Logo"
                width={240}
                height={240}
                className="object-contain drop-shadow-lg w-5 h-5 sm:w-7 sm:h-7"
                priority
              />
            </Link>
            <Link href="https://www.youtube.com/@CREATErocket">
              <Image
                src="/yt_icon_red_digital.png"
                alt="Logo"
                width={240}
                height={240}
                className="object-contain drop-shadow-lg w-6 h-6 sm:w-10 sm:h-10"
                priority
              />
            </Link>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 text-sm">
              <FooterNavItem href="/MainPage" text="TOP" />
              <FooterNavItem href="/AboutUsPage" text="ABOUT" />
              <FooterNavItem href="/ProjectsPage" text="PROJECTS" />
              <FooterNavItem href="/TechPage" text="TECH" />
              <FooterNavItem href="/Fund&SponsorPage" text="FUND&SPONSORS" />
              <FooterNavItem href="/ContactPage" text="CONTACT" />
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function FooterNavItem({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <a href={href} className="hover:text-gray-300 font-mono transition-colors">
        {text}
      </a>
    </li>
  )
}


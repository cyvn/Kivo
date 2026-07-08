import type { Metadata, Viewport } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kivo | Coming Soon",
  description:
    "Kivo is a premium desktop learning platform for ambitious beginners who want to build real skills, organize their progress, and turn ideas into income through courses, systems, templates, and practical tools.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Kivo | Coming Soon",
    description:
      "Kivo is a premium desktop learning platform for ambitious beginners who want to build real skills, organize their progress, and turn ideas into income through courses, systems, templates, and practical tools.",
    url: "https://kivo.app/",
    siteName: "Kivo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kivo | Coming Soon",
    description:
      "Kivo is a premium desktop learning platform for ambitious beginners who want to build real skills, organize their progress, and turn ideas into income through courses, systems, templates, and practical tools.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={unbounded.className}>{children}</body>
    </html>
  );
}

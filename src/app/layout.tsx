import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SynapseX - AI-Powered Crypto Trading",
  description: "Experience the future of cryptocurrency trading with SynapseX's advanced AI trading assistant. Automate your trades, maximize profits, and stay ahead of market trends.",
  keywords: "crypto trading, AI trading, cryptocurrency, automated trading, crypto bot",
  authors: [{ name: "SynapseX Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

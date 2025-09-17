import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";

const itim = Itim({
  weight: "400",
  variable: "--font-itim",
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "Happy Birthday ข้าวสวย! 🎂",
  description: "สุขสันต์วันเกิด ข้าวสวย - จุดเทียนและอ่านจดหมายอวยพร",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${itim.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-itim), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Екатерина Романова — стоматолог-терапевт для взрослых и детей",
  description:
    "Екатерина Романова — стоматолог-терапевт, принимает взрослых и детей. Подход, направления работы, образование, отзывы и места приёма в Москве.",
  applicationName: "Екатерина Романова",
  openGraph: {
    title: "Екатерина Романова — стоматолог-терапевт для взрослых и детей",
    description: "Качественное лечение начинается с доверия. Узнайте о подходе, направлениях, образовании и местах приёма Екатерины Романовой.",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f8f9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

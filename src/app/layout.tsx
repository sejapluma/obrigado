import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pluma | Organização e foco para sua prática clínica",
  description: "Tudo que sua prática clínica precisa num só lugar! Perfeito para psicólogas clínicas em início de carreira, profissionais com agenda lotada, atendimentos online ou quem deseja escalar sua prática.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
} 
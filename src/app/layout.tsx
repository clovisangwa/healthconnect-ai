import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HealthConnect AI - 24/7 AI Health Assistant',
  description: 'Modern AI-powered telehealth platform with verified doctors, appointments, and health guidance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-950">
        {children}
      </body>
    </html>
  );
}

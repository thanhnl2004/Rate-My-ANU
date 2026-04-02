import "@/styles/globals.css";

import { type Metadata } from "next";
import { Gelasio, Ubuntu_Mono } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { createClient } from "@/utils/supabase/server";
import { AuthProvider } from "@/contexts/auth-context";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "RateMyANU",
  description: "A social platform that allows ANU students to review courses.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fontMono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const fontSans = Gelasio({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} ${fontSans.className}`}>
      <body>
        <TRPCReactProvider>
          <AuthProvider user={user}>
            { user ? (
              <SidebarLayout>
                {children}
              </SidebarLayout>
            ) : (
              <>{children}</>
            )}
          </AuthProvider>
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

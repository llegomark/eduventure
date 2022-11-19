import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from 'next-themes'
import { Inter } from '@next/font/google'
import Layout from "../components/layout/layout";
import "../styles/globals.css";

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <ThemeProvider attribute="class">
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;

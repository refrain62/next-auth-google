import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        signed in as {session.user?.email}<br />
        <button onClick={() => signOut()}>sign Out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

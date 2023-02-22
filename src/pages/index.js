import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero/Hero";
import Section from "@/components/section/Section";
import Testi from "@/components/Testi/Testi";
import Contact from "@/components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Section />
      <Testi />
      <Contact />
    </>
  );
}

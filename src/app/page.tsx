import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Spaces } from "@/components/spaces";
import { Platform } from "@/components/platform";
import { Ecosystem } from "@/components/ecosystem";
import { News } from "@/components/news";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Spaces />
        <Platform />
        <Ecosystem />
        <News />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

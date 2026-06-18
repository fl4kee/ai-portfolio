import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { DigitalTwin } from "@/components/DigitalTwin";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Stack />
        <Work />
        <Contact />
      </main>
      <DigitalTwin />
    </>
  );
}

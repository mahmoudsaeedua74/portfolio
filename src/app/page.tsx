import About from "@/components/About";
import Intro from "@/components/Intro";
import Journey from "@/components/Journey";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Sidebar />
      <ThemeToggle />

      <main className="container">
        <Intro />
      </main>
      <section className="container">
        <About />
        <Journey/>
      </section>
    </>
  );
}

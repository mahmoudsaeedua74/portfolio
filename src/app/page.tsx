import Intro from "@/components/Intro";
import Loading from "@/components/Loading";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import dynamic from "next/dynamic";
export default function Home() {
  const LoadMore = dynamic(() => import("../components/LoadMore"));
  const About = dynamic(() => import("../components/About"));
  const Experience = dynamic(() => import("../components/Experience"));
  const Project = dynamic(() => import("../components/Project"));
  const ContactForm = dynamic(() => import("../components/Content"));
  const Journey = dynamic(() => import("../components/Journey"));
  return (
    <>
      <Sidebar />
      <ThemeToggle />
      <main className="container">
        <Intro />
      </main>
      <section className="container">
        <LoadMore />
        <About />
        <Journey />
        <Experience />
        <Project />
        <ContactForm />
      </section>
      <Loading />
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
const AnimatedCodeView = () => { 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.8,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  const AnimatedLine = ({ children }: { children: ReactNode }) => (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ amount:.2 , once:true }}
      style={{ display: "block" }}
    >
      {children}
    </motion.div>
  );
  return (
    <motion.div 
    id="About"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount:.2 ,once:true }}
      className="bg-zinc-900/80 overflow-x-auto w-full shadow-2xl max-w-screen-lg mx-auto text-lg font-semibold my-20 p-8 text-white rounded-lg "
    >
      <pre className="whitespace-pre-wrap">
        <code className="text-[#9cdcfe]">
          <AnimatedLine>
            1. <span className="text-fuchsia-600">export default</span>{" "}
            <span className="text-blue-700">function</span>{" "}
            <span className="text-amber-600">AboutMe() {"{"}</span>  
          </AnimatedLine>

          <AnimatedLine>
            2. &nbsp;&nbsp;<span className="text-blue-700">const</span>{" "}
            <span className="text-green-700">WhoAmI</span> = <span className="text-fuchsia-600"> {"{"}</span>
          </AnimatedLine>
          <AnimatedLine>
            3. &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-sky-400">name:</span>{" "}
            <span className="text-[#E99287]">&quot;Mahmoud Saeed&quot;</span>,
          </AnimatedLine>

          <AnimatedLine>
            4. &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-sky-400">aboutMe:</span> {"{"}
          </AnimatedLine>

          <AnimatedLine>
            5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;I&apos;m a Front-End Developer with a strong foundation in
              HTML, CSS,&quot; and JavaScript.&apos;,
            </span>
          </AnimatedLine>

          <AnimatedLine>
            6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;Hands-on experience with React, Next.js, and
              TypeScript.&quot;,
            </span>
          </AnimatedLine>

          <AnimatedLine>
            7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;Passionate about creating responsive, user-friendly web
              applications.&quot;,
            </span>
          </AnimatedLine>

          <AnimatedLine>
            8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;Skilled in building scalable web apps with performance
              optimization.&quot;,
            </span>
          </AnimatedLine>

          <AnimatedLine>
            9. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;Committed to delivering innovative solutions for exceptional
              user experiences.&quot;
            </span>
          </AnimatedLine>

          <AnimatedLine>10. &nbsp;&nbsp;&nbsp;&nbsp;{"]"},</AnimatedLine>

          <AnimatedLine>
            11. &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-sky-400">skills:</span> {"{"}
          </AnimatedLine>

          <AnimatedLine>
            12. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"} Programming Languages
            : [
            <span className="text-[#E99287]">
              &quot;JavaScript&quot;, &quot;TypeScript&quot;
            </span>
            ] {"},"}
          </AnimatedLine>

          <AnimatedLine>
            13. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"} Frontend: [
          </AnimatedLine>

          <AnimatedLine>
            14. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;HTML&quot;, &quot;CSS&quot;, &quot;jQuery&quot;,
            </span>
          </AnimatedLine>

          <AnimatedLine>
            15. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;Tailwind CSS&quot;, &quot;Bootstrap&quot;, &quot;SASS&quot;,
            </span>
          </AnimatedLine>

          <AnimatedLine>
            16. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;Material UI&quot;, &quot;React&quot;, &quot;Next.js&quot;,
            </span>
          </AnimatedLine>

          <AnimatedLine>
            17. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;Redux Toolkit&quot;, &quot;Tanstack Query&quot;,
            </span>
          </AnimatedLine>

          <AnimatedLine>
            18. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#E99287]">
              &quot;ContextAPI&quot;, &quot;Recoil&quot;, &quot;Framer
              Motion&quot;, &quot;GraphQL&quot;
            </span>
          </AnimatedLine>

          <AnimatedLine>
            19. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] {"},"}
          </AnimatedLine>

          <AnimatedLine>20. &nbsp;&nbsp;&nbsp;&nbsp;{"]"},</AnimatedLine>

          <AnimatedLine>21. <span className="text-fuchsia-600">&nbsp;&nbsp;{"}"}</span></AnimatedLine>

          <AnimatedLine>
            22. &nbsp;&nbsp;<span className="text-fuchsia-600">return</span>{" "}
            <span className="text-[#E99287]">
              <span className="text-fuchsia-600">{"("}</span>
              <span className="text-[#4D5BCE]"> {"{"}</span>{" "}
              <span className="text-green-700">
                {"/* Let me share my journey with you.. */"}{" "}
              </span>
              <span className="text-[#4D5BCE]">{"}"}</span>
              <span className="text-fuchsia-600">{" )"}</span>
            </span>
            ;
          </AnimatedLine>

          <AnimatedLine>23. <span className="text-amber-600"> {"}"}</span></AnimatedLine>
        </code>
      </pre>
    </motion.div>
  );
};
export default AnimatedCodeView;

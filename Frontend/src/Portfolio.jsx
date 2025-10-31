import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import profile from "./assets/me.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);

  const arrowVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const listVariants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  const toggleOpen = (index) => setOpenIndex(index);

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold">Hi, I'm Isha Sah 👋</h1>

          <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
              style={{
                objectPosition: "top",
                transform: "scale(1.4)",
              }}
            />
          </div>
        </div>

        <p className="text-neutral-700 mb-2 text-md">
          I am a software engineer. I practice DSA daily on LeetCode to
          strengthen my logic and optimize real-world backend solutions.
        </p>

        <div className="my-12">
          <h2 className="font-bold mb-4 text-xl">About</h2>
          <p className="text-neutral-700 text-md leading-relaxed">
            I started my career as a freelancer in college. In my sophomore year
            I interned at a remote health tech startup. In my final year of
            college, I worked at a remote fintech startup. Currently, I am
            building at HeroUI (YC S24) and always experimenting with cool side
            projects.
          </p>
        </div>

        {/* Skills */}
        <div className="my-12 mb-24 mt-12">
          <h2 className="font-bold mb-6 text-xl">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-black text-white text-md rounded">
              React
            </span>
            <span className="px-2.5 py-1 bg-black text-white text-md rounded">
              Next.js
            </span>
            <span className="px-2.5 py-1 bg-black text-white text-md rounded">
              TailwindCSS
            </span>
            <span className="px-2.5 py-1 bg-black text-white text-md rounded">
              TypeScript
            </span>
            <span className="px-2.5 py-1 bg-black text-white text-md rounded">
              Node.js
            </span>
            <span className="px-2.5 py-1 bg-black text-white text-md rounded">
              AWS
            </span>
            <span className="px-2.5 py-1 bg-black text-white text-md rounded">
              Postgres
            </span>
            <span className="px-2.5 py-1 bg-black text-white text-md rounded">
              Docker
            </span>
            <span className="px-2.5 py-1 bg-black text-white text-md rounded">
              Redis
            </span>
          </div>
        </div>
        {/* Work Experience */}
        <div className="my-12">
          <h2 className="font-bold mb-6 text-xl">Work Experience</h2>

          <div className="mb-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-sm bg-neutral-200 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                I
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-md">
                      Institutional Major Project
                    </div>
                    <div className="text-xs text-neutral-600">
                      Full Stack Developer
                    </div>
                  </div>
                  <div className="text-sm text-neutral-500 whitespace-nowrap">
                    July 2024 - Feb 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-sm bg-neutral-200 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                T
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-md">
                      TechOctanet Service Pvt Ltd
                    </div>
                    <div className="text-sm text-neutral-600">
                      Web Developer Intern
                    </div>
                  </div>
                  <div className="text-sm text-neutral-500 whitespace-nowrap">
                    May 2025 - July 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="my-12">
          <h2 className="font-bold mb-6 text-xl">Education</h2>

          <div className="mb-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-sm bg-neutral-200 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                T
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-md flex gap-16 item-center justify-center">
                      Dooars Academy of Technology & Management (DATM)
                      <p className="text-sm font-normal mt-[2px]">
                        {" "}
                        CGPA : 8.9{" "}
                      </p>
                    </div>

                    <div className="text-sm text-neutral-600">
                      Bachelor's Degree of Computer Application (BCA)
                    </div>
                  </div>
                  <div className="text-sm text-neutral-500 whitespace-nowrap">
                    2022 - 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-sm bg-neutral-200 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                K
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-md">
                      Kumargramduar Madan Singh High School
                    </div>
                    <div className="text-sm text-neutral-600">
                      Higher Secondary School (HS)
                    </div>
                  </div>
                  <div className="text-sm text-neutral-500 whitespace-nowrap">
                    2020 - 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Virtual experiences */}
        <div className="my-12 mt-18">
          <h2 className="font-bold mb-6 text-xl">
            Certifications & Virtual Experiences
          </h2>
          <div>
            {/* ===== AWS ===== */}
            <motion.div
              className="mb-5"
              onHoverStart={() => toggleOpen(1)}
              onHoverEnd={() => toggleOpen(null)}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm bg-neutral-200 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  A
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-md flex items-center gap-1">
                      AWS Virtual Experience –{" "}
                      <span className="inline-flex items-center">
                        Serverless Application Developer
                        <motion.span
                          className="ml-1 inline-block"
                          variants={arrowVariants}
                          initial="closed"
                          animate={openIndex === 1 ? "open" : "closed"}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <motion.path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.span>
                      </span>
                    </div>
                    <div className="text-sm text-neutral-500 whitespace-nowrap">
                      Aug - Oct 2025
                    </div>
                  </div>

                  <div className="text-sm text-neutral-600 mt-1">
                    Amazon Web Services (via AWS Skill Builder)
                  </div>

                  <motion.div
                    className="overflow-hidden"
                    variants={listVariants}
                    initial="closed"
                    animate={openIndex === 1 ? "open" : "closed"}
                  >
                    <ul className="list-disc list-inside text-sm text-neutral-700 mt-3 space-y-1">
                      <li>
                        Completed self-paced virtual internship-style programs
                        on AWS Lambda, API Gateway, and CDK.
                      </li>
                      <li>
                        Learnt how to design, build, and simulate serverless
                        applications using AWS tools and services.
                      </li>
                      <li>
                        Explored event-driven architecture, cloud
                        infrastructure, and scalable API design.
                      </li>
                      <li>
                        Earned verified AWS completion certificates through AWS
                        Skill Builder.
                      </li>
                    </ul>

                    <div className="mt-3 text-sm text-neutral-700">
                      <strong>Certificates:</strong>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <a
                          href="https://github.com/IshaSah24/Certificates/blob/main/97bd3b8f-4b69-4737-96fe-3a60b500a926.pdf"
                          className="text-blue-600 hover:underline bg-neutral-100 px-2 py-1 rounded text-xs"
                        >
                          AWS Lambda Foundations
                        </a>
                        <a
                          href="#"
                          className="text-blue-600 hover:underline bg-neutral-100 px-2 py-1 rounded text-xs"
                        >
                          API Gateway Serverless
                        </a>
                        <a
                          href="#"
                          className="text-blue-600 hover:underline bg-neutral-100 px-2 py-1 rounded text-xs"
                        >
                          CDK Getting Started
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ===== Red Hat ===== */}
            <motion.div
              className="mb-5"
              onHoverStart={() => toggleOpen(2)}
              onHoverEnd={() => toggleOpen(null)}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm bg-neutral-200 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  R
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-md flex items-center gap-1">
                      Red Hat –{" "}
                      <span className="inline-flex items-center">
                        RHEL-124 & RHEL-134
                        <motion.span
                          className="ml-1 inline-block"
                          variants={arrowVariants}
                          initial="closed"
                          animate={openIndex === 2 ? "open" : "closed"}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <motion.path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.span>
                      </span>
                    </div>
                    <div className="text-sm text-neutral-500 whitespace-nowrap">
                      May - Sep 2025
                    </div>
                  </div>

                  <div className="text-sm text-neutral-600 mt-1">
                    Red Hat Academy (Linux System Administration)
                  </div>

                  <motion.div
                    className="overflow-hidden"
                    variants={listVariants}
                    initial="closed"
                    animate={openIndex === 2 ? "open" : "closed"}
                  >
                    <ul className="list-disc list-inside text-sm text-neutral-700 mt-3 space-y-1">
                      <li>
                        Learned Linux system administration, shell scripting,
                        and user management using RHEL-9.
                      </li>
                      <li>
                        Configured networking, permissions, and system services
                        in a Linux environment.
                      </li>
                      <li>
                        Completed Red Hat Academy coursework with verified
                        attendance certificates.
                      </li>
                    </ul>

                    <div className="mt-3 text-sm text-neutral-700">
                      <strong>Certificates:</strong>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <a
                          href="/certificates/RH124.pdf"
                          className="text-blue-600 hover:underline bg-neutral-100 px-2 py-1 rounded text-xs"
                        >
                          RH124 - Certificate of Attendance
                        </a>
                        <a
                          href="/certificates/RH134.pdf"
                          className="text-blue-600 hover:underline bg-neutral-100 px-2 py-1 rounded text-xs"
                        >
                          RH134 - Certificate of Attendance
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Projects */}
        <div className="my-12">
          <div className="text-center mb-8">
            <span className="inline-block px-2.5 py-1 bg-black text-white text-md rounded mb-2">
              My Projects
            </span>
            <h2 className="text-2xl font-bold mb-2">
              Check out my latest work
            </h2>
            <p className="text-md text-neutral-600">
              I've worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>

          <div className="space-y-6 grid grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-red-50 via-blue-50 to-purple-50 flex items-center justify-center text-4xl">
                🗺️
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-1">TypeStrike AI</h3>
                <p className="text-sm text-neutral-700 mb-3 leading-relaxed">
                  TypeStrike Ai is an AI-driven full-stack typing application
                  where user can test their typing speed. Intergrated ai (as
                  typing partner) user can choose the dificulty level and play.
                  <div className="mt-6 text-md">
                    <p className="text-[.8rem]">
                      Play with ai with various levels
                    </p>
                    <p className="text-[.8rem]">
                      Helps devs to enhance their typing speed
                    </p>
                    <p className="text-[.8rem]">Multiplayer feature</p>
                  </div>
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    React.js
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    Javascript
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    Web Socket
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    MongoDb
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    Deepseek Ai
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    TailwindCSS
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    Shadcn
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    Shadcn UI
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-black text-white text-xs rounded">
                    Website
                  </button>
                  <a href="https://github.com/IshaSah24/TypeStrike-AI" className="px-3 py-1.5 border hover:bg-white hover:text-black text-white bg-black border-neutral-300 text-xs rounded">
                    Source
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-neutral-200 rounded overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center text-4xl">
                📄
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-1">Full Stack URL Shortner</h3>
                <p className="text-xs text-neutral-700 mb-3 leading-relaxed">
                  A full-stack URL shortener web application that allows users
                  to shorten long URLs, manage their links, and track analytics.
                  Features user authentication, link management, and detailed
                  analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    React.Js
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    Javascript
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    Express.Js
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    MongoDb
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    TailwindCSS
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-black text-white text-xs rounded">
                    Website
                  </button>
                  <a href="https://github.com/IshaSah24/FullStack-UrlShortner"  className="px-3 py-1.5 border hover:bg-white hover:text-black text-white bg-black border-neutral-300 text-xs rounded">
                    Source
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="border border-neutral-200 rounded overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-4xl">
                🖨️
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-1">K3DF</h3>
                <p className="text-xs text-neutral-700 mb-3 leading-relaxed">
                  A landing page for a 3D printing farm to showcase their
                  services and products. This is my first ever freelance gig and
                  first earning through tech. (The client has changed the url)
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    Next.js
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    TailwindCSS
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-black text-white text-xs rounded">
                    Website
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/*  DSA SECTION  */}
        <section className="my-20 py-16 px-8 rounded-2xl shadow-lg max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Data Structures & Algorithms
          </h2>

          <p className=" max-w-3xl mx-auto text-center mb-10 leading-relaxed">
            I consistently practice{" "}
            <span className="font-semibold">
              Data Structures and Algorithms
            </span>{" "}
            on{" "}
            <a
              href="https://leetcode.com/u/ishasah850/" // ✅ replace with your username
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LeetCode
            </a>{" "}
            to strengthen my logic, improve problem-solving ability, and enhance
            my backend development skills. My current focus is on Arrays, Linked
            Lists, Stacks, Queues, and Dynamic Programming.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
            {/* LeetCode Stats Card */}
            <img
              src="https://leetcard.jacoblin.cool/ishasah850?theme=dark&font=Source%20Code%20Pro&ext=heatmap"
              alt="LeetCode Stats"
              className="w-full md:w-[280px] rounded-xl shadow-lg border border-neutral-700"
            />

            {/* Quick Stats */}
            <div className=" space-y-3 text-center md:text-left">
              <p>
                - Solved{" "}
                <span className="font-semibold text-black">
                  200+ LeetCode problems
                </span>
              </p>
              <p>- Maintain a daily problem-solving streak</p>
              <p>
                - Focused on{" "}
                <span className="text-black font-medium">
                  time and space optimization
                </span>
              </p>
              <p>- participant in LeetCode Weekly Contests</p>
              <p>
                - Clean, well-documented solutions available on{" "}
                <a
                  href="https://github.com/isha-sah/leetcode-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:underline hover:text-blue-500"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://leetcode.com/u/ishasah850/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 px-4 py-4 rounded-full font-semibold text-white transition"
            >
              view
            </a>
          </div>
        </section>
      </div>

      <nav className="fixed bottom-0 left-0 right-0  border-neutral-50 py-4">
        <div className="max-w-sm mx-auto px-8 flex justify-evenly gap-6 border-2 border-[oklch(87.2% 0.01 258.338)] p-4 rounded-full bg-gray-50  transparent">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 hover:text-black border-r "
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 hover:text-black"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 hover:text-black"
          >
            <Twitter size={16} />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-neutral-800 hover:text-black border-l"
          >
            <Mail size={16} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Portfolio;

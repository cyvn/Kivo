"use client";

import { motion } from "framer-motion";

const repeatedItems = Array.from({ length: 20 }, (_, index) => index);

function Spark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="size-6 -rotate-12 text-gray-900"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9"
      />
    </svg>
  );
}

function RibbonItem() {
  return (
    <div className="inline-flex items-center gap-4">
      <span className="text-sm font-extrabold uppercase text-gray-900">
        Coming Soon
      </span>
      <Spark />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex w-full items-center justify-center px-8">
      <motion.section
        className="mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex w-full flex-col justify-center rounded-lg border-2 border-stone-400/10 bg-[#0C0C0C]">
          <div className="w-full space-y-8 p-5 text-center md:p-11">
            <motion.a
              className="inline-block size-11"
              draggable="false"
              href="/"
              aria-label="Kivo"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <img
                src="/kivo-logo.png"
                alt=""
                className="size-full object-contain"
                draggable="false"
              />
            </motion.a>
            <h1 className="mb-2 text-3xl font-black text-white">Kivo</h1>
            <p className="mb-8 text-xl font-light">
              Kivo is a premium desktop learning platform for ambitious
              beginners who want to build real skills, organize their progress,
              and turn ideas into income through courses, systems, templates,
              and practical tools.
            </p>
          </div>

          <div className="w-full">
            <div className="overflow-x-clip py-16 lg:py-24">
              <motion.div
                className="-mx-1 -rotate-3 bg-gradient-to-r from-[#A89172] via-[#D6C3A5] to-[#F3EBDD]"
                initial={{ opacity: 0.92 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="animate-move-left flex flex-none gap-4 py-3 pr-4 [animation-duration:30s]">
                    {repeatedItems.map((item) => (
                      <RibbonItem key={item} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

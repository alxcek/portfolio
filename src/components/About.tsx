// import { Arrow } from "./Arrow";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56 4.57-1.52 7.86-5.83 7.86-10.91C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
    <path d="M5.25 6.5C6.35 6.5 7.25 5.6 7.25 4.5C7.25 3.4 6.35 2.5 5.25 2.5C4.15 2.5 3.25 3.4 3.25 4.5C3.25 5.6 4.15 6.5 5.25 6.5Z" />
    <path d="M10.5 8.5H13.75V10.13C14.24 9.19 15.46 8.25 17.28 8.25C20.63 8.25 21.44 10.06 21.44 13.36V20.5H18.06V14.09C18.06 12.22 17.57 11.16 16.42 11.16C14.81 11.16 13.88 12.28 13.88 14.09V20.5H10.5V8.5Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const About = () => {
  const contactLinkClass =
    "inline-flex items-center gap-2 hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out";

  return (
    <section className="relative">
      <main className="max-w-6xl mx-auto w-full px-5 sm:px-8 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-16">
        <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10 lg:gap-16 items-start">
          <div>
            <p className="font-mono text-xs sm:text-sm tracking-wide text-gray-400">
              <span className="text-[#FF4D4D]">//</span> welcome{" "}
            </p>
          </div>

          <div>
            <p className="font-bold leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Aleksa Cekić
            </p>

            <p className="max-w-xl text-base sm:text-lg text-gray-300 leading-relaxed mt-8 sm:mt-10">
              I&apos;m a software engineer based in Niš, currently building full-stack product
              features at Codemancy. My background is in backend systems for a large healthcare
              platform, and I&apos;m now studying artificial intelligence and machine learning —
              I like working where clean systems and applied intelligence meet.
            </p>

            <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-3 font-mono text-sm text-gray-300">
              <a
                href="https://github.com/alxcek"
                target="_blank"
                rel="noreferrer"
                className={contactLinkClass}
              >
                <GithubIcon /> github
              </a>
              <span className="text-[#FF4D4D]">&middot;</span>
              <a
                href="https://www.linkedin.com/in/alcekic"
                target="_blank"
                rel="noreferrer"
                className={contactLinkClass}
              >
                <LinkedinIcon /> linkedin
              </a>
              <span className="text-[#FF4D4D]">&middot;</span>
              <a href="mailto:aleksa.cekic8@gmail.com" className={contactLinkClass}>
                <MailIcon /> email
              </a>
            </div>
          </div>
        </div>

        {/* Scroll chevron temporarily hidden — uncomment to bring back.
        <div className="hidden md:flex justify-center mt-16 lg:mt-24">
          <Arrow />
        </div>
        */}
      </main>
    </section>
  );
};

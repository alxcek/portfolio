import clsx from 'clsx';
import { experience } from '../data/experience';
import { education } from '../data/timeline';
import type { Experience as ExperienceItem } from '../types/experience';

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56 4.57-1.52 7.86-5.83 7.86-10.91C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const Card = ({ item }: { item: ExperienceItem }) => (
  <article
    className="relative rounded-xl border border-white/10 bg-white/[0.04] p-5
      transition-transform duration-300 ease-out transform hover:scale-[0.97]"
  >
    {item.github && (
      <a
        href={item.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.title} GitHub repository`}
        className="absolute top-4 right-4 text-gray-400 transition-colors duration-300 hover:text-[#FF4D4D]"
      >
        <GithubIcon />
      </a>
    )}

    <h3 className="text-[16px] font-semibold text-white pr-8">{item.title}</h3>
    <p className="mt-1 text-[13px] text-gray-500 md:hidden">{item.dateRange}</p>
    <p className="mt-3 text-[14px] leading-relaxed text-gray-400">{item.description}</p>

    <ul className="mt-4 flex flex-wrap gap-2">
      {item.tags.map((tag) => (
        <li
          key={tag}
          className="text-[12px] px-2.5 py-[3px] rounded-full bg-white/10 text-gray-300 whitespace-nowrap"
        >
          {tag}
        </li>
      ))}
    </ul>
  </article>
);

export const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-10 bg-[#111] mb-14 pt-10 scroll-mt-16"
    >
      <h2
        id="experience-heading"
        className="text-2xl sm:text-3xl font-bold text-white mb-10"
      >
        Experience
      </h2>

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-0 bottom-0 w-px bg-white/10 left-4 md:left-1/2 md:-translate-x-1/2"
        />

        <ol className="flex flex-col gap-10">
          {experience.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <li key={item.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-5 w-3 h-3 rounded-full bg-[#FF4D4D] ring-4 ring-[#111] left-4 -translate-x-1/2 md:left-1/2"
                />

                <span
                  className={clsx(
                    'hidden md:flex md:absolute md:top-5 md:h-3 md:items-center text-[13px] text-gray-500',
                    isLeft ? 'md:left-1/2 md:pl-10' : 'md:right-1/2 md:pr-10'
                  )}
                >
                  {item.dateRange}
                </span>

                <div className="grid md:grid-cols-2 md:gap-10">
                  <div
                    className={clsx(
                      'pl-12 md:pl-0',
                      isLeft ? 'md:pr-10 md:col-start-1' : 'md:pl-10 md:col-start-2'
                    )}
                  >
                    <Card item={item} />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-16">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">Education</h3>

        <ul>
          {education.map((item) => (
            <li
              key={`${item.name}-${item.year}`}
              className="flex items-center gap-4 py-4 border-b border-white/10"
            >
              {item.icon ? (
                <img
                  src={item.icon}
                  alt={`${item.name} logo`}
                  className="w-10 h-10 rounded-md object-cover shrink-0 bg-white/5"
                />
              ) : (
                <span className="w-10 h-10 rounded-md shrink-0 bg-white/5" aria-hidden="true" />
              )}

              <p className="text-gray-400 text-xs sm:text-sm">
                <span className="font-bold text-white">{item.name}</span>
                <span className="hidden sm:inline"> / {item.role}</span>
              </p>

              <span className="ml-auto text-gray-500 text-xs whitespace-nowrap pl-4">
                {item.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

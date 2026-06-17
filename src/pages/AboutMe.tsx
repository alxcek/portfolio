import { education } from '../data/timeline';
import { TimelineItem } from '../types/timeline';

const TimelineSection = ({ title, items }: { title: string; items: TimelineItem[] }) => (
    <section className="mb-12 sm:mb-16">
        <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-5">
            {title}
        </h2>

        <ul>
            {items.map((item) => (
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
    </section>
);

const AboutMe = () => {
    return (
        <div className="w-full">
            <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 mt-10 sm:mt-14">
                <section className="mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        About Me
                    </h1>

                    <p className="text-gray-300 leading-relaxed text-[16px] sm:text-[17px]">
                        I’m Aleksa — a Software Engineer from Niš who grew up around computers,
                        video games, and the natural urge to take things apart just to see how
                        they work. That curiosity slowly turned into a love for programming, and
                        eventually into a career where I get to solve problems, build systems,
                        and bring ideas to life.
                        <br /><br />
                        What motivates me most is the intersection of engineering and
                        intelligence,  how machines learn, how systems behave, and how
                        technology shapes the way we think.
                        <br /><br />
                        I still keep the playful side of it. I enjoy video games, building tools
                        for myself, and exploring new projects simply because they’re fun. At
                        the end of the day, I see engineering as a mix of creativity, logic, and
                        curiosity, and that’s the approach I bring to everything I work on.
                    </p>
                </section>

                <section className="mb-12 sm:mb-16">
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">BACKGROUND</h2>

                    <p className="text-gray-300 leading-relaxed">
                        My journey into software engineering began with simple curiosity. I
                        enjoyed figuring out how things worked, writing small scripts, and slowly
                        moving toward backend development and distributed systems. Over time, I
                        became increasingly interested in building reliable systems and solving
                        problems that have real impact.
                        <br /><br />
                        Studying Software Engineering helped me build a solid foundation, while
                        real-world experience taught me how to think clearly, structure solutions
                        effectively, and focus on creating software that people actually depend
                        on.
                    </p>
                </section>

                <section className="mb-12 sm:mb-16">
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">CURRENTLY</h2>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        These days, I’m focused on growing as an engineer while exploring the
                        areas of tech that excite me the most.
                    </p>

                    <ul className="space-y-3 text-gray-300">
                        <li>▸ Building backend services for a large healthcare platform used across Europe.</li>
                        <li>▸ Studying Artificial Intelligence and Machine Learning at Faculty of Electronics.</li>
                        <li>▸ Working on personal projects in many different languages such as: React, Spring, C++ and Python.</li>
                        <li>▸ Experimenting with machine learning models and planning my next bigger project.</li>
                    </ul>
                </section>

                <TimelineSection title="Education" items={education} />

            </div>
        </div>
    );
};

export default AboutMe;

import React from "react";

const AboutMe = () => {
    return (
        <div className="w-full">

            {/* Image /*}
      {/* <img
        src="https://placehold.co/1920x1080"
        alt="me"
        className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[21/9] object-cover object-center opacity-90"
      /> */}

            <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 mt-10 sm:mt-14">
                <section className="mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        About Me
                    </h1>

                    <p className="text-gray-300 leading-relaxed text-[16px] sm:text-[17px]">
                        I'm Aleksa — a Software Engineer from Niš who grew up around computers,
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

                <section className="mb-20">
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">EDUCATION</h2>

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-medium text-white">
                                    University of Niš - Faculty of Electronics
                                </p>
                                <p className="text-gray-400 text-sm">
                                    MSc Artificial Intelligence & Machine Learning
                                </p>
                            </div>
                            <div className="flex items-end">
                                <span className="text-gray-500 text-sm whitespace-nowrap ml-6">
                                    2025 – Present
                                </span>
                            </div>
                        </div>

                        <div className="border-t border-white/10"></div>

                        <div className="flex justify-between">
                            <div>
                                <p className="font-medium text-white">
                                    Univerzitet Metropolitan - Faculty of Computer Science
                                </p>
                                <p className="text-gray-400 text-sm">
                                    BSc Computer Software Engineering
                                </p>
                            </div>
                            <div className="flex items-end">
                                <span className="text-gray-500 text-sm whitespace-nowrap ml-6">
                                    2019 – 2024
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AboutMe;

import React from "react";
import Button from "../components/Button"

const EmotionDetection = () => {
    return (
        <div className="text-white bg-[#111] min-h-screen flex flex-col items-center">
            <div className="w-full px-6 mb-10 max-w-[1920px]">
                <main className="w-full">
                    <div className="flex flex-col sm:flex-row justify-between gap-10">
                        <div className="flex-1 text-left">
                            <img
                                src="https://placehold.co/950x450"
                                alt="Emotion Detection App"
                                className="w-full mb-10 mt-10 rounded"
                            />

                            <div className="mb-12 text-l mt-2">
                                <div className="mb-2 text-base text-xl font-semibold uppercase">Overview</div>
                                <div className="border-b border-white/15 mb-5"></div>
                                <div className="flex flex-col md:flex-row justify-between items-start gap-y-6">
                                    <div className="md:min-w-[280px] md:mr-24">
                                        <div className="text-gray-400 mb-1 text-base uppercase">Project Name</div>
                                        <div className="font-semibold">Emotion Detection App</div>
                                    </div>

                                    <div className="flex flex-wrap gap-y-4 gap-x-16">
                                        <div>
                                            <div className="text-gray-400 mb-1 text-base uppercase">Duration</div>
                                            <div>Jun 10 2022 - Jun 19 2022</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-400 mb-1 text-base uppercase">Role</div>
                                            <div>AI Developer</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-400 mb-1 text-base uppercase">Tech Stack</div>
                                            <div className="space-y-1">
                                                <div>Python</div>
                                                <div>TensorFlow / Keras</div>
                                                <div>OpenCV</div>
                                                <div>CNN (Convolutional Neural Networks)</div>
                                                <div>NumPy & Pandas</div>
                                                <div>Matplotlib</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12 text-l">
                                <div className="mb-2 text-base text-xl font-semibold uppercase">About</div>
                                <div className="border-b border-white/15 mb-5 mt-2"></div>
                                <div className="leading-relaxed">
                                    The <b>Emotion Detection App</b> is a computer vision project designed
                                    as part of my AI university course. The app uses a trained
                                    <b> Convolutional Neural Network (CNN)</b> model to classify human
                                    emotions in real-time.
                                    <br /><br />
                                    Once the camera is activated, frames are captured and processed
                                    with OpenCV. The model detects a person’s face, extracts facial
                                    features, and predicts the corresponding emotion such as
                                    <i> happy, sad, angry, surprised, or neutral</i>.
                                    <br /><br />
                                    The detected emotion is displayed as a label above the face,
                                    making it interactive and intuitive for real-time use cases
                                    like feedback systems, gaming, or psychology experiments.
                                </div>
                            </div>

                            {/* <div className="text-xl font-semibold mb-1 text-base uppercase">Involvement</div> */}
                            {/* <div className="border-b border-white/15 mb-5 mt-2"></div> */}

                            <div className="mb-12 text-l">
                                <div className="flex flex-col md:flex-row gap-10">
                                    <div className="flex-1">
                                        <div className="text-l mb-2 text-base font-semibold uppercase">What I did</div>
                                        <div className="leading-relaxed">
                                            I built and trained a CNN model in Python using TensorFlow/Keras
                                            to classify emotions from facial expressions.
                                            <br /><br />
                                            For preprocessing, I used OpenCV to detect faces in video
                                            frames, converted them to grayscale, resized them, and
                                            normalized pixel values before passing them into the network.
                                            <br /><br />
                                            The CNN was trained on a dataset of labeled facial images
                                            and fine-tuned with dropout and data augmentation
                                            to avoid overfitting.
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-l mb-2 text-base font-semibold uppercase">Experience</div>
                                        <div className="leading-relaxed">
                                            Through this project, I gained strong hands-on experience
                                            in computer vision, deep learning model training, and
                                            real-time video inference.
                                            <br /><br />
                                            I learned how to integrate machine learning models
                                            with live video streams using OpenCV, how to preprocess
                                            image data efficiently, and how CNN architectures capture
                                            spatial features in images.
                                            <br /><br />
                                            The project gave me confidence in building end-to-end
                                            AI applications that combine both research concepts and
                                            practical implementations.
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <Button
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/",
                                                "_blank",
                                                "noopener,noreferrer"
                                            )
                                        }
                                        size="md"
                                        className="w-full max-w-[200px]"
                                    >
                                        <span className="text-fill-animate">See GitHub</span>
                                        <span className="text-fill-animate">&gt;</span>
                                    </Button>
                                </div>
                            </div>
                            
                            <div className="border-b border-white/15 mb-5"></div>

                            <div className="mb-20 mt-20">
                                <div className="space-y-12">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                                        <img
                                            src="https://placehold.co/800x700"
                                            alt="Face Detection"
                                            className="rounded w-full"
                                        />
                                        <div className="sticky top-20 self-start">
                                            <h3 className="text-xl font-semibold mb-2">Face Detection</h3>
                                            <p className="text-gray-400">
                                                The app uses OpenCV to detect faces in real-time from the camera feed.
                                                Each frame is analyzed, and detected faces are passed into the CNN model
                                                for classification.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                                        <img
                                            src="https://placehold.co/800x700"
                                            alt="Emotion Classification"
                                            className="rounded w-full"
                                        />
                                        <div className="sticky top-20 self-start">
                                            <h3 className="text-xl font-semibold mb-2">Emotion Classification</h3>
                                            <p className="text-gray-400">
                                                The CNN model predicts the emotion of the detected face.
                                                Labels such as happy, sad, angry, and neutral are displayed
                                                directly above the user’s face in the live feed.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                                        <img
                                            src="https://placehold.co/800x700"
                                            alt="Real-Time Results"
                                            className="rounded w-full"
                                        />
                                        <div className="sticky top-20 self-start">
                                            <h3 className="text-xl font-semibold mb-2">Real-Time Results</h3>
                                            <p className="text-gray-400">
                                                The system runs in real-time, updating predictions
                                                frame by frame. The label moves with the face,
                                                providing an interactive user experience.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EmotionDetection;

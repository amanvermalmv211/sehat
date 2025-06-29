const About = () => {
    return (
        <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Sehat</h2>
                <p className="text-lg text-gray-300 mb-12 max-md:text-justify">
                    Empowering individuals through intelligent, accessible, and proactive health solutions.
                </p>

                {/* Vision & Mission */}
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-left backdrop-blur-md mb-8">
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-300">🌍 Vision & Mission</h3>
                    <p className="text-gray-300">
                        Our vision is to bridge the gap between early symptom detection and medical consultation
                        using Artificial Intelligence. Sehat aims to become the first point of contact for
                        health concerns — helping users analyze symptoms, generate smart reports, and connect
                        with doctors seamlessly.
                    </p>
                </div>

                {/* Future Goals */}
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-left backdrop-blur-md mb-8">
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-300">🚀 Future Goals</h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>Integrate voice-based symptom input for faster accessibility</li>
                        <li>Expand AI capabilities to suggest natural remedies for minor conditions</li>
                        <li>Build a partner network of certified clinics and hospitals</li>
                        <li>Launch a dedicated mobile app for on-the-go health assessments</li>
                        <li>Real-time health monitoring integrations with wearables</li>
                    </ul>
                </div>

                {/* Optional: Team / AI Behind Sehat */}
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-left backdrop-blur-md">
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-300">🤖 The AI Behind Sehat</h3>
                    <p className="text-gray-300">
                        Sehat is powered by a hybrid AI model combining natural language understanding,
                        medical knowledge bases, and context-aware question generation. We are constantly
                        training our model using verified medical sources to ensure it delivers meaningful,
                        personalized, and safe responses. Human oversight ensures ethical usage and data safety.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
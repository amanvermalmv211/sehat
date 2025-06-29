const Solutions = () => {
  return (
    <div className="bg-gray-900 py-10 px-4 sm:px-8 lg:py-20 text-gray-300">
      <div className="max-w-6xl mx-auto">
        {/* Title and Intro */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Our Solution</h2>
          <p className="text-lg max-w-2xl mx-auto">
            DocTech is an AI-powered assistant that supports patients and doctors from symptom check to recovery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Patients Section */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-md hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-white mb-6">🔹 For Patients</h3>
            <ul className="space-y-4 text-gray-300 text-base">
              <li>🗣️ Talk to the AI in your own language</li>
              <li>✍️ Enter symptoms easily (voice/text/photo)</li>
              <li>📖 Get a clear explanation of your illness</li>
              <li>🍎 Receive a diet, medicine, and lifestyle plan</li>
              <li>☁️ Store your health history on the cloud</li>
            </ul>
          </div>

          {/* Doctors Section */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-md hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-white mb-6">🔹 For Doctors</h3>
            <ul className="space-y-4 text-gray-300 text-base">
              <li>📋 Pre-diagnostic reports ready before consultation</li>
              <li>📊 Dashboard showing symptoms, vitals, history & risks</li>
              <li>⚡ Faster consultations with more accurate decisions</li>
              <li>🔍 Similar case comparison and alerts</li>
              <li>⏱️ Save time, improve patient trust</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
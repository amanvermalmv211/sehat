import { FaRegComments, FaFileMedical, FaUserMd, FaSearch } from "react-icons/fa";

const steps = [
  {
    title: "Describe Your Problem",
    description: "Start by sharing your symptoms or health concern with Sehat.",
    icon: <FaSearch className="text-3xl text-cyan-400" />,
  },
  {
    title: "Answer Smart Questions",
    description: "Sehat asks AI-driven, relevant questions to understand you better.",
    icon: <FaRegComments className="text-3xl text-cyan-400" />,
  },
  {
    title: "Get a Health Report",
    description: "Receive a personalized health report based on your responses.",
    icon: <FaFileMedical className="text-3xl text-cyan-400" />,
  },
  {
    title: "Consult with Doctors",
    description: "Get referred to the right specialists or doctors for treatment.",
    icon: <FaUserMd className="text-3xl text-cyan-400" />,
  },
];

const Working = () => {
  return (
    <section className="px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">How Sehat Works</h2>
        <p className="text-lg text-gray-300 mb-12">
          From symptoms to solutions — see how Sehat makes your healthcare journey easier.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md hover:scale-105 transition-transform"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;
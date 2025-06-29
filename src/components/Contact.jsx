const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Join Sehat</h2>
        <p className="text-lg text-gray-300 mb-10">
          Whether you're a doctor looking to reach more patients, or a user interested in
          personalized AI-driven health support — we’d love to hear from you!
        </p>

        {/* Call to Action */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-left backdrop-blur-md mb-10">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">📝 Contact Us</h3>
          <form className="space-y-4" onSubmit={(e)=>{e.preventDefault()}}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-white/5 text-white border border-white/20 placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-white/5 text-white border border-white/20 placeholder-gray-400"
              />
            </div>
            <input
              type="text"
              placeholder="Are you a Doctor or a User?"
              className="w-full p-3 rounded-md bg-white/5 text-white border border-white/20 placeholder-gray-400"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-white/5 text-white border border-white/20 placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-md bg-cyan-500 hover:bg-cyan-600 transition font-semibold text-white"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-gray-400 text-sm">
          <p>Email: <a href="mailto:hello@sehat.ai" className="text-cyan-400">hello@sehat.ai</a></p>
          <p>Phone: <a href="tel:+911234567890" className="text-cyan-400">+91 12345 67890</a></p>
          <p>Location: Bengaluru, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
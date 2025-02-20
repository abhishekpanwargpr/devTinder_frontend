const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-gray-600 mb-4 text-center">
        We'd love to hear from you! Reach out to us through the details below.
      </p>

      {/* Email Address */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📧 Email Address</h2>
        <p className="text-gray-700">
          You can contact us via email at:
          <a href="mailto:support@devtinder.info" className="text-blue-600 font-medium ml-1">
            support@devinfo.com
          </a>
        </p>
      </section>

      {/* Mobile Number */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📞 Phone Number</h2>
        <p className="text-gray-700">
          Call or WhatsApp us at:
          <span className="font-medium ml-1">+91 8864939119</span>
        </p>
    </section>
    
      {/* Contact Form */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✉️ Send Us a Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-6">
        <p>© {new Date().getFullYear()} devtinder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;

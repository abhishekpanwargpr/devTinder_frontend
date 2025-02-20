const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-gray-600 mb-4 text-center">
        Effective Date: February 18, 2025
      </p>

      {/* Personal Information Collection */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. What Personal Information We Collect
        </h2>
        <p className="text-gray-700">
          We may collect personal information, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Name and contact details (email, phone number)</li>
          <li>Billing and shipping addresses</li>
          <li>Payment information</li>
          <li>IP address and device information</li>
          <li>Browsing behavior on our website</li>
        </ul>
      </section>

      {/* How Information is Collected */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. How We Collect Your Information
        </h2>
        <p className="text-gray-700">
          We collect information in various ways, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>When you register an account on our website</li>
          <li>When you make a purchase or transaction</li>
          <li>Through cookies and tracking technologies</li>
          <li>When you contact us for support</li>
        </ul>
      </section>

      {/* How Information is Used */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p className="text-gray-700">
          We use collected information for purposes such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Providing and improving our services</li>
          <li>Processing transactions and payments</li>
          <li>Sending important updates and promotional materials</li>
          <li>Ensuring website security and fraud prevention</li>
        </ul>
      </section>

      {/* Keeping Information Safe */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. How We Keep Your Information Safe
        </h2>
        <p className="text-gray-700">
          We implement strict security measures to protect your personal data,
          including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Encryption of sensitive data</li>
          <li>Regular security audits</li>
          <li>Secure payment gateways</li>
        </ul>
      </section>

      {/* Third-Party Information Sharing */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Sharing Your Information with Third Parties
        </h2>
        <p className="text-gray-700">
          We do not sell or rent personal information. However, we may share
          information with trusted third-party service providers for:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Payment processing</li>
          <li>Order fulfillment and delivery</li>
          <li>Analytics and marketing</li>
        </ul>
        <p className="text-gray-700 mt-2">
          All third parties are obligated to keep your information secure.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about our Privacy Policy, you can contact
          us at:
        </p>
        <p className="mt-2 text-gray-700">
          📧 Email:{" "}
          <a href="mailto:privacy@devtinder.info" className="text-blue-600 font-medium">
            privacy@devtinder.info
          </a>
        </p>
        <p className="text-gray-700">
          📍 Address: Near New Law College , Gopeshwar, India
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

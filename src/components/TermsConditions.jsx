import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms & Conditions</h1>
      <p className="text-gray-600 mb-4">Effective Date: February 18, 2025</p>

      {/* Contact Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Contact Information</h2>
        <p className="text-gray-700">
          If you have any questions about these terms, you can contact us at:
        </p>
        <p className="text-gray-700 font-medium mt-2">
          Email: support@devtinder.info  
          <br />
          Phone: +91 8864939119 
          <br />
          Address: Near New Law College, Gopeshwar, India
        </p>
      </section>

      {/* Limitation of Liability & Disclaimer of Warranties */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Limitation of Liability & Disclaimer of Warranties
        </h2>
        <p className="text-gray-700">
          We do not guarantee that our services will be uninterrupted or error-free.
          You agree that we are not liable for any direct, indirect, incidental,
          or consequential damages arising from the use of our services.
        </p>
      </section>

      {/* Rules of Conduct */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Rules of Conduct</h2>
        <p className="text-gray-700">
          By using our website, you agree to abide by the following rules:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Do not post harmful, illegal, or abusive content.</li>
          <li>Do not engage in fraudulent activities.</li>
          <li>Do not interfere with the security or functionality of our platform.</li>
        </ul>
      </section>

      {/* User Restrictions */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Restrictions</h2>
        <p className="text-gray-700">
          Users are strictly prohibited from:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Attempting to reverse-engineer or modify our services.</li>
          <li>Using automated bots or scrapers to access our platform.</li>
          <li>Impersonating another person or misrepresenting identity.</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsConditions;

import React from "react";

const CancellationRefund = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Cancellation & Refund Policy
      </h1>
      <p className="text-gray-600 mb-4">Effective Date: February 18, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Return & Exchange Policy
        </h2>
        <p className="text-gray-700">
          We allow returns and exchanges within **30 days** of the purchase
          date. Items must be in their original condition, unused, and with
          proof of purchase.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. How to Initiate a Return or Exchange
        </h2>
        <p className="text-gray-700">
          To start a return or exchange, please contact us at:
        </p>
        <p className="text-gray-700 font-medium mt-2">
          Email: support@devtinder.info  
          <br />
          Phone: +91 8864939119 
          <br />
          Address: Near New Law College, Gopeshwar, India
        </p>
        <p className="text-gray-700 mt-2">
          Our support team will guide you through the process.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Refund Processing Time
        </h2>
        <p className="text-gray-700">
          Once we receive your return request, refunds are processed within
          **7 business days**. You will receive a confirmation email once the
          refund is issued. The amount will be credited back to your original
          payment method.
        </p>
      </section>
    </div>
  );
};

export default CancellationRefund;

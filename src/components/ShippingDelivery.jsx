import React from "react";

const ShippingDelivery = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Shipping & Delivery Policy</h1>
      <p className="text-gray-600 mb-4">Effective Date: February 18, 2025</p>

      {/* Order Processing Time */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Order Processing Time</h2>
        <p className="text-gray-700">
          Orders are processed within <span className="font-semibold">1-3 business days</span>. 
          Orders placed on weekends or holidays will be processed on the next business day.
        </p>
      </section>

      {/* Shipping Time & Delivery Estimates */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Shipping Time & Delivery Estimates</h2>
        <p className="text-gray-700">
          Shipping times vary depending on your location and chosen shipping method. 
          Below are estimated delivery times:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><span className="font-semibold">Standard Shipping:</span> 5-7 business days</li>
          <li><span className="font-semibold">Express Shipping:</span> 2-3 business days</li>
          <li><span className="font-semibold">International Shipping:</span> 7-15 business days</li>
        </ul>
      </section>

      {/* Shipping Costs */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Shipping Costs</h2>
        <p className="text-gray-700">
          Shipping costs vary based on the shipping method selected and the destination. 
          The final shipping cost will be displayed at checkout.
        </p>
      </section>

      {/* Order Tracking */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Order Tracking</h2>
        <p className="text-gray-700">
          Once your order has shipped, you will receive an email with tracking information. 
          You can track your order using the provided tracking number.
        </p>
      </section>

      {/* Delays & Exceptions */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Delays & Exceptions</h2>
        <p className="text-gray-700">
          We are not responsible for shipping delays caused by unforeseen circumstances such as 
          weather conditions, carrier delays, or customs clearance.
        </p>
      </section>
    </div>
  );
};

export default ShippingDelivery;

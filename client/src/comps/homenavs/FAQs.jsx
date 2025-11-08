import React, { useState } from "react";


export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is this platform about?",
      a: "Our platform provides healthy, nutrition-rich food products including dairy, fruits, protein supplements, spices, and more — delivered fresh to your doorstep."
    },
    {
      q: "Are the products 100% natural and chemical-free?",
      a: "Yes. We partner with certified farmers and trusted brands to ensure every product is free from preservatives, artificial colors, and chemicals."
    },
    {
      q: "Do you offer vegan or gluten-free products?",
      a: "Yes! We have a dedicated section for vegan, gluten-free, lactose-free, keto-friendly, and organic foods."
    },
    {
      q: "How do I place an order?",
      a: "Select a product, add it to cart, proceed to checkout, select delivery & payment, and confirm your order."
    },
    {
      q: "What payment options do you accept?",
      a: "We support UPI, Debit/Credit Cards, Net Banking, Wallets, and Cash on Delivery (where available)."
    },
    {
      q: "How long does delivery take?",
      a: "Orders are delivered within 1–3 business days based on location. Fresh items may have same-day delivery."
    },
    {
      q: "Can I return or replace a product?",
      a: "Food items are non-returnable unless damaged, expired, or incorrect. You must report issues within 24 hours."
    },
    {
      q: "Do you offer subscriptions?",
      a: "Yes! You can subscribe to essential items and get auto-delivery with discounts."
    },
    {
      q: "How can I track my order?",
      a: "Go to My Orders → Track Order for live updates."
    },
    {
      q: "How can I contact customer support?",
      a: "Email: support@nutritionfoods.com | WhatsApp/Call: +91-XXXXXXXXXX | Live chat: 9AM–7PM"
    }
  ];

  return (
    <div className="faq-wrapper" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqs.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.q}
            <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
          </div>

          {activeIndex === index && (
            <div className="faq-answer">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

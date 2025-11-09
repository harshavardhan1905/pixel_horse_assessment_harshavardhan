import React from "react";


export default function AboutPage() {
  return (
    <div className="about-wrapper" id="contact">
      <section className="about-section">
        <h1 className="about-title">About Our Nutrition Platform</h1>
        <p className="about-text">
          Welcome to <strong>NutriFresh</strong> — your trusted marketplace for
          healthy and nutrition-rich food products. We are dedicated to making
          clean, organic, and preservative-free food accessible to every home.
          From dairy and fruits to grains, spices, protein supplements, and
          more — we bring only quality-tested products from verified farms and
          brands.
        </p>

        <p className="about-text">
          Our mission is simple: <strong>“Eat Clean, Live Better.”</strong> We
          believe that good nutrition is not just a lifestyle choice, but a
          necessity — and we are committed to making it affordable, fresh, and
          convenient.
        </p>
      </section>

      <section className="founder-section">
        <h2 className="section-title">Meet the Founder</h2>

        <div className="founder-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Founder"
            className="founder-img"
          />
          <div>
            <h3>Harshavardhan</h3>
            <p>Founder & Visionary of NutriFresh</p>
            <p>
              Email:{" "}
              <a href="mailto:podetiharshavrdhan@gmail.com">
                podetiharshavrdhan@gmail.com
              </a>
            </p>
            <p>Location: Hyderabad, Telangana, India</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Contact & Support</h2>
        <p>
          📩 Email:{" "}
          <a href="mailto:podetiharshavrdhan@gmail.com">
            podetiharshavrdhan@gmail.com
          </a>
        </p>
        <p>📍 Office Address: Hyderabad, Telangana, India</p>
        <p>🕑 Support Hours: 9:00 AM – 7:00 PM (Mon – Sat)</p>
      </section>
    </div>
  );
}

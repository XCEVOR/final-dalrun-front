import React from "react";
import { Link } from "react-router-dom";

const faqContent = [
  {
    title: "Progress",
    faqInner: [
      {
        title: "How about our progress?",
        descriptions: `Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.`,
      },
      {
        title: "Do you provide a NDA Agreement?",
        descriptions: `
        Hoodie tote bag mixtape tofu. Typewriter jean shorts wolf quinoa, messenger bag organic freegan cray.`,
      },
      {
        title: "How many revisions times that I get?",
        descriptions: `
        Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings, deep v XOXO chambray sustainable slow-carb raw denim church-key fap chillwave Etsy. +1 typewriter kitsch, American Apparel tofu Banksy Vice.`,
      },
    ],
  },
  {
    title: "Payment",
    faqInner: [
      {
        title: "What payment methods are accepted?",
        descriptions: `Fashion axe DIY jean shorts, swag kale chips meh polaroid kogi butcher Wes Anderson chambray next level semiotics gentrify yr. Voluptate photo booth fugiat Vice. Austin sed Williamsburg, ea labore raw denim voluptate cred proident mixtape excepteur mustache.`,
      },
      {
        title: "Can I have to deposit?",
        descriptions: `
        Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest.`,
      },
    ],
  },
  {
    title: "Support",
    faqInner: [
      {
        title: "How about Hosting & Domain, Its included in your service?",
        descriptions: `Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb Odd Future seitan normcore. Master cleanse American Apparel gentrify flexitarian beard slow-carb next level. Raw denim polaroid paleo farm-to-table, put a bird on it lo-fi tattooed Wes Anderson Pinterest letterpress. Fingerstache McSweeney’s pour-over.`,
      },
      {
        title: "How can I cancel or change my project?",
        descriptions: `Plaid letterpress leggings craft beer meh ethical Pinterest. Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn.`,
      },
      {
        title: "How long for support service?",
        descriptions: `
        Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest.`,
      },
      {
        title: "What’s files that I will got?",
        descriptions: `Plaid letterpress leggings craft beer meh ethical Pinterest. Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn.`,
      },
      {
        title: "How long for support service?",
        descriptions: `Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb Odd Future seitan normcore. Master cleanse American Apparel gentrify flexitarian beard slow-carb next level. Raw denim polaroid paleo farm-to-table, put a bird on it lo-fi tattooed Wes Anderson Pinterest letterpress. Fingerstache McSweeney’s pour-over.`,
      },
    ],
  },
];

const FaqTwo = () => {
  return (
    <section>
      {/* <!--Spacer--> */}

      <div className="container-xxl">
        {faqContent.map((item, i) => (
          <div key={i}>
            <div className="ptf-animated-block" data-aos="fade">
              {/* <!--FAQ--> */}
              <div className="ptf-faq">
                <div className="ptf-faq__category">
                  <h3>{item.title}</h3>
                </div>
                <div className="ptf-faq__content">
                  {item.faqInner.map((val, i) => (
                    <div className="ptf-faq__item" key={i}>
                      <div className="ptf-faq__question">
                        <h6>{val.title}</h6>
                      </div>
                      <div className="ptf-faq__answer">
                        <p>{val.descriptions}</p>
                      </div>
                    </div>
                  ))}
                  {/* End .ptf-faq__item */}
                </div>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5.625rem" }}
            ></div>
          </div>
        ))}

        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "4.375rem" }}></div>
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade">
          <p className="fz-24">
            Don’t find your question?{" "}
            <Link
              className="has-accent-4 text-decoration-underline"
              to="/contact"
            >
              Contact us{" "}
            </Link>
            now, we alway willing to help you.
          </p>
        </div>
      </div>
      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
      ></div>
    </section>
  );
};

export default FaqTwo;

import React from "react";
import "./ClientCard.scss";
import image1 from "./assets/image4.png";
import image2 from "./assets/image5.png";
import image3 from "./assets/image6.png";
import image4 from "./assets/image7.png";
import image5 from "./assets/image3.png";
import image6 from "./assets/image8.png";
import image7 from "./assets/image9.png";
import image8 from "./assets/image10.png";
import image9 from "./assets/image11.png";
import image10 from "./assets/image12.png";
import image11 from "./assets/image13.png";
import image12 from "./assets/image14.png";
import image13 from "./assets/image15.png";

const ClientCard = () => {
  return (
    <div className="client-section">
      <div className="categorie-filter">
        <h3>
          Show me <b>all work</b>
        </h3>
        <h3>
          in <b>all industries</b>
        </h3>
      </div>
      <div className="client-cards">
        <div className="client-item">
          <img src={image1} alt="clientimage" />
          <div className="client-info">
            <h1>BOL.COM</h1>
            <h2>A Summer island in the Netherlands</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <div className="img-overlay">
            <img src={image2} alt="clientimage" />
          </div>
          <div className="client-info">
            <h1>KEMPEN</h1>
            <h2>Not some average banking website</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <img src={image3} alt="clientimage" />
          <div className="client-info">
            <h1>PHILIPS</h1>
            <h2>Beautiful design meets innovative technology</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <img src={image4} alt="clientimage" />
          <div className="client-info">
            <h1>GEMEENTEMUSEUM</h1>
            <h2>A 100 years of Mondriaan & De Stijl</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <img src={image5} alt="clientimage" />
          <div className="client-info">
            <h1>FLORENSIS</h1>
            <h2>Rethinking the entire online ecosystem</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <div className="client-info-projects">
            <div className="project">
              <h1>MICROSOFT</h1>
              <p>
                Tapping into Ireland's unique gaming culture and bringing a
                flesh flavour to theri Xbox soscial media channels
              </p>
              <h4>&#x2609; Read more</h4>
            </div>
            <div className="project" id="center-project">
              <h1>O'NEILL</h1>
              <p>
                Integrating existing content into O'Neill's new e-commerce
                platform
              </p>
              <h4>&#x2609; Read more</h4>
            </div>
            <div className="project" id="last-project">
              <h1>MICROSOFT</h1>
              <p>
                Tapping into Ireland's unique gaming culture and bringing a
                flesh flavour to theri Xbox soscial media channels
              </p>
              <h4>&#x2609; Read more</h4>
            </div>
          </div>
        </div>
        <div className="client-item">
          <img src={image6} alt="clientimage" />
          <div className="client-info">
            <h1>BE LIGHTNING</h1>
            <h2>Delivering clarity on a global scale</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <div className="img-overlay">
            <img src={image7} alt="clientimage" />
          </div>
          <div className="client-info">
            <h1>TUI</h1>
            <h2>Swipe to find your next holiday destination</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <div className="client-info-projects">
            <div className="project">
              <h1>MICROSOFT</h1>
              <p>
                Tapping into Ireland's unique gaming culture and bringing a
                flesh flavour to theri Xbox soscial media channels
              </p>
              <h4>&#x2609; Read more</h4>
            </div>
            <div className="project" id="center-project">
              <h1>O'NEILL</h1>
              <p>
                Integrating existing content into O'Neill's new e-commerce
                platform
              </p>
              <h4>&#x2609; Read more</h4>
            </div>
            <div className="project" id="last-project">
              <h1>MICROSOFT</h1>
              <p>
                Tapping into Ireland's unique gaming culture and bringing a
                flesh flavour to theri Xbox soscial media channels
              </p>
              <h4>&#x2609; Read more</h4>
            </div>
          </div>
        </div>
        <div className="client-item">
          <img src={image5} alt="clientimage" />
          <div className="client-info">
            <h1>FLORENSIS</h1>
            <h2>Rethinking the entire online ecosystem</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <img src={image8} alt="clientimage" />
          <div className="client-info">
            <h1>CHOCOMEL</h1>
            <h2>A campaign for the limited edition letter packs</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <div className="img-overlay">
            <img src={image9} alt="clientimage" />
          </div>
          <div className="client-info">
            <h1>JBL</h1>
            <h2>Live like a champion with Jerome Boateng</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <img src={image10} alt="clientimage" />
          <div className="client-info">
            <h1>ZALANDO</h1>
            <h2>Innovative SEO and content strategy for Zalando</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <div className="img-overlay">
            <img src={image11} alt="clientimage" />
          </div>
          <div className="client-info">
            <h1>KONINKLIJKE BIBIBLIOTHEEK</h1>
            <h2>The search of the most influential book ever</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
      </div>
      <div className="client-quote">
        <p>
          "Dept helped us tell our story through a bold identity and a robust
          online experience. To the tone of 60% growth in online bookings in
          just one month"
        </p>
        <p>MATTHIJS TEN DRINK - CEO, TRANSAVIA</p>
      </div>
      <div className="client-cards">
        <div className="client-item">
          <img src={image12} alt="clientimage" />
          <div className="client-info">
            <h1>ZALANDO</h1>
            <h2>Innovative SEO and content strategy for Zalando</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
        <div className="client-item">
          <div className="img-overlay">
            <img src={image13} alt="clientimage" />
          </div>
          <div className="client-info">
            <h1>KONINKLIJKE BIBIBLIOTHEEK</h1>
            <h2>The search of the most influential book ever</h2>
            <h4>&#x2609; Read more</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;

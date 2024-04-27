import React from "react";

function About() {
  return (
    <div>
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">About US</h1>
                <span className="color-text-a">
                  <h6>Our Commitment to Freshness & Beauty:</h6> At HELLO SPRING!, we're dedicated to sourcing our flowers and bouquets from trusted growers who share our passion for quality. Every stem is carefully inspected and arranged to ensure you receive the freshest, most beautiful blooms for your home or special occasion. Our commitment to freshness and beauty means you can confidently fill your home or give the perfect gift with the finest floral arrangements available.
                  <h6>Wide Variety, Stunning Choices:</h6>
                  Discover our extensive range of fresh flowers and bouquets, thoughtfully curated for every style and occasion. From classic roses to vibrant peonies, elegant lilies, and exotic orchids, we offer a diverse selection to suit your unique taste. Whether you're decorating your home, celebrating a milestone, or expressing your sympathy, our collection has the perfect arrangement for you. 
                  <h6>Convenience Redefined :</h6>
                  Why visit a florist when you can shop from the comfort of your home? With our user-friendly website and mobile app, ordering fresh flowers and bouquets is as easy as a few clicks. Enjoy the convenience of doorstep delivery, saving you time and effort for the things that matter most.
                  <h6>Beauty at Your Doorstep:</h6>
                  Bringing beauty into your home has never been easier. By choosing [Flower Shop Name], you're opting for a more vibrant, colorful, and fragrant living space. Fresh flowers are just a click away, ensuring that you and your loved ones have access to the best blooms for a touch of nature's elegance.
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

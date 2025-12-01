"use client";
import Link from "next/link";
import "../globals.scss";
import "../../styles/_footer.scss";

export default function Footer() {
  return (
    <footer className="footer-sec">
      <div className="outer">
        <div className="container">
          <div className="disclaimer-blk">
            <p><strong>Disclaimer: </strong>This website is owned and managed by an authorized channel partner. All information provided is for general 
                guidance only and does not constitute an offer or solicitation. Prices, availability, and project details 
                are subject to change without notice. Images and visuals are indicative and may not represent the actual 
                project. While we strive for accuracy, no guarantee is made regarding the completeness or reliability of 
                the content. Users are advised to verify all information independently and consult appropriate legal or 
                financial advisors before making any decisions. For the most accurate, updated, and verified details 
                regarding pricing, availability, specifications, and services, please contact us directly through the 
                contact information provided on this website.
              </p>
          </div>
          <div className="footer-wrapper">
            <div className="footer-left">
              <a href="https://propey.com/">
              <p>© 2025. Propey. All rights reserved.</p>
              </a>

              <div className="social-icons">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <img
                    src="/assets/homepage/fb.svg"
                    alt="Facebook"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/linkedin.svg"
                    alt="LinkedIn"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/ball.svg"
                    alt="Dribbble"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/insta.svg"
                    alt="Instagram"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/be.svg"
                    alt="Behance"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/x.svg"
                    alt="X (Twitter)"
                    className="icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

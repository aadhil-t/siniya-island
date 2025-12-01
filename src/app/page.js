"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import "./home.scss";
import "../styles/_common.scss";
import "../styles/_community-sec.scss";
import "../styles/_accordian-sec.scss";
import "../styles/_luxury-sec.scss";
import "../styles/_faq.scss";
import "../styles/_step-sec.scss";
import "../styles/_image-sec.scss";
import "../styles/_information.scss";
import "../styles/_dubai-sec.scss";
import "../styles/_premium-sec.scss";
import "../styles/_scroll.scss";
import "../styles/_popup.scss";
import Header from "./components/Header";
import AnimatedButton from "../app/components/Connectbtn"; // adjust path if needed
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination  } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
gsap.registerPlugin(ScrollTrigger);
// AOS //
import AOS from 'aos';
import 'aos/dist/aos.css';
// import $ from "jquery";
// import "magnific-popup";
import emailjs from "@emailjs/browser";

export default function Home() {

const [isHoverPlaying, setIsHoverPlaying] = useState(false);
  // EMAIL SEND FUNCTION
  const handleEmailSend = async (e, formType) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    let params = {};

    if (formType === "callback") {
      params = {
        user_name: data.name,
        user_phone: data.phone,
        message: "Callback request",
      };
    } else {
      params = {
        user_name: data.name,
        user_email: data.email,
        message: data.message || "",
      };
    }

    try {
      await emailjs.send(
        "service_zi80l2f",    
        "template_ywxx979",   
        params,
        "hRQlQZPMhcZz8n4sV"      
      );

      alert("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  


useEffect(() => {
  if (typeof window === "undefined") return;

  (async () => {
    const jQuery = (await import("jquery")).default;
    window.$ = window.jQuery = jQuery;

    await import("magnific-popup");

    $(".popup-with-form").magnificPopup({
      type: "inline",
      preloader: false,
      focus: "#name",
      callbacks: {
        beforeOpen: function () {
          const formType = this.st.el?.attr("data-form");

          $("#callbackForm, #connectForm").hide();

          if (formType === "callback") {
            $("#callbackForm").show();
          } else {
            $("#connectForm").show();
          }
        }
      }
    });

  })();
}, []);

  
  
  // faq datas //
  const faqs = [
    {
      number: "01",
      question: "Is Sobha Siniya Island a good place to live?",
      answer: (
        <>
          <p>
            Sobha Siniya Island is an extraordinary destination for those 
            seeking a tranquil yet luxurious lifestyle. This island offers 
            a harmonious combination of unspoiled natural beauty and modern 
            living. With meticulously designed villas, waterfront mansions, 
            and apartments, Sobha Siniya Island stands as a testament to Sobha 
            Realty’s commitment to exceptional quality and sustainability.
          </p>
          <p>
            <strong>Key Advantages of Living on Sobha Siniya Island:</strong>
          </p>
          <p>
            <strong>Serene Natural Beauty: </strong>
            <br />
            This pristine paradise is surrounded by lush mangroves, white sand 
            beaches, and rich wildlife, including gazelles, oryx, flamingos, and 
            rare turtles.
          </p>
          <p>
            <strong>Luxurious Residences:</strong>
            <br />
            Siniya Island offers exquisite villas, waterfront mansions, apartments 
            and resorts. Each home is crafted to provide ultimate comfort and elegance.
          </p>
          <p>
            <strong>Exclusive Amenities:</strong>
            <br />
            Residents can enjoy pristine beaches, an 18-hole golf course, and 
            resort-inspired facilities, including fine dining and a bustling retail boulevard.
          </p>
          <p>
            <strong>Accessibility: </strong>
            <br />
            Despite its secluded charm, the island is just 50 minutes from Dubai, 30 minutes 
            from Sharjah, and 10 minutes from Al Marjan Island.
          </p>
          <p>
            <strong>Cultural and Historical Significance: </strong>
            <br />
            With roots tracing back to being the oldest pearl fishing town in the Persian Gulf, 
            the island also holds archaeological treasures like an ancient monastery.
          </p>
          <p>
            In essence, Sobha Siniya Island offers an unmatched living experience, seamlessly 
            merging luxurious modernity with untouched nature. It’s the ideal haven for those 
            who desire a serene lifestyle without compromising on connectivity or sophistication.
          </p>
        </>
      ),
    },
    {
      number: "02",
      question: "What amenities does Sobha Siniya Island offer?",
      answer: (
        <>
           <p>
          Sobha Siniya Island in Umm Al Quwain offers an array of luxurious amenities 
          that blend leisure, comfort, and nature, providing an unparalleled living 
          experience. Here’s what residents can enjoy:
        </p>
        <p>
          <strong>Exclusive Recreational Facilities: </strong>
          <br />
            An 18-hole golf course surrounded by lush greenery and the soothing 
            rhythm of the sea creates an ideal setting for golf enthusiasts.
        </p>
        <p>
          <strong>Marina Lifestyle:</strong>
          <br />
             A private marina offers boat docking and nautical adventures, complemented 
             by a vibrant boardwalk featuring charming cafés, restaurants, and lively nightlife.
        </p>
        <p>
          <strong>Luxurious Wellness and Leisure: </strong>
          <br />
             The island’s clubhouse, resort facilities, and private beaches ensure that 
             relaxation and recreation are always within reach.
        </p>
        <p>
          <strong>Nature-Inspired Living:</strong>
          <br />
            Immerse yourself in the island’s untouched natural beauty, with pristine beaches,
            serene mangroves, and thriving wildlife.
        </p>
        <p>
          <strong>Retail and Dining: </strong>
          <br />
            A dynamic retail boulevard invites residents to indulge in fine dining, boutique 
            shopping, and leisurely strolls along breezy sidewalks.
        </p>
        <p>
            Sobha Siniya Island has been designed to offer a serene yet vibrant lifestyle, 
            where every day feels like an escape into luxury and tranquillity.
        </p>
        </>
      ),
    },
    {
      number: "03",
      question: "Is investing in Sobha Siniya Island a good idea?",
      answer: (
        <>
        <p>
          Investing in Sobha Siniya Island offers an exceptional opportunity for those 
          seeking both capital appreciation and attractive rental yields. Here’s why it 
          stands out as a prime investment choice:
        </p>
        <p>
          <strong>High Demand for Luxury Living:</strong>
          <br />
             With its unique blend of serene island life and proximity to UAE’s cosmopolitan 
             hubs, the island appeals to high-net-worth individuals and expatriates seeking 
             exclusive residences. This ensures a steady demand for rental properties.
        </p>
        <p>
          <strong>Diverse Property Options: </strong>
          <br />
             The island offers a range of villas, waterfront mansions, and apartments, catering 
             to varying investor preferences while promising premium pricing potential.
        </p>
        <p>
          <strong>Strong Rental Yields:</strong>
          <br />
              The combination of luxurious amenities, unparalleled natural surroundings, and 
              exclusivity positions Sobha Siniya Island to deliver robust rental returns, 
              particularly from long-term tenants and affluent holidaymakers.
        </p>
        <p>
          <strong>Sustainability Appeal: </strong>
          <br />
              As eco-conscious living gains traction, properties that prioritise environmental 
              harmony, like Sobha Siniya Island, are increasingly valued by investors and tenants 
              alike.
        </p>
        <p>
          In conclusion, Sobha Siniya Island offers a great opportunity for investors, combining 
          the allure of luxury living, sustainable design, and promising rental yields, all within 
          a highly sought-after UAE location.
        </p>
        </>
      ),
    },
  ];

  
// FAQ accordion states
const [faqActiveIndex, setFaqActiveIndex] = useState(null);
const faqContentRefs = useRef([]);
const [faqContentHeights, setFaqContentHeights] = useState([]);


// 3️⃣ Auto-height calculation
useEffect(() => {
  const heights = faqContentRefs.current.map((ref) =>
    ref ? ref.scrollHeight : 0
  );
  setFaqContentHeights(heights);
}, [faqs]);

// 4️⃣ FAQ toggle
const toggleFaqAccordion = (index) => {
  setFaqActiveIndex(faqActiveIndex === index ? null : index);
};




  const premiumData = [
  {
    title: "Coral Beach Villas",
    subtitle: "5 and 6 Bedroom Villas",
    img: "/assets/homepage/siniya/coral.jpg",
    rangefrom: "AED 23.38 M* |  INR 55.7 CR* |  USD 6.40 M* | EUR 5.67 M* | GBP 4.91 M*",
    sqfrom: "Sq. Ft. is Available upon Request \u00A0\u00A0 Sq. M. is Available upon Request",
    rangeto: "AED 20.87 M* | INR 49.7 CR* | USD 5.72 M* | EUR 5.66 M* | GBP 4.65 M*",
    sqto: "To 1595.32 Sq. Ft.\u00A0\u00A0 To 148.21 Sq. M.",
    handover: "Handover – Jun 2028"
  },
  {
    title: "Palm Grove Villas",
    subtitle: "4 Bedroom Villas",
    img: "/assets/homepage/premium2.png",
    rangefrom: "AED 10.75 M* |  INR 25.6 CR* |  INR 25.6 CR* | EUR 2.61 M* | EUR 2.61 M*",
    sqfrom: "Sq. Ft. is Available upon Request\u00A0\u00A0 Sq. M. is Available upon Request",
    rangeto: "AED 12.06 M* | INR 28.7 CR* | USD 3.30 M* | EUR 3.27 M* | GBP 2.69 M*",
    sqto: "To 2288.9 Sq. Ft.\u00A0\u00A0 To 212.65 Sq. M.",
    handover: "Handover – Dec 2027"
  },
  // {
  //   title: "Demo 1",
  //   subtitle: "1, 1.5, 2 and 2.5 Bedroom Apartments",
  //   img: "/assets/homepage/premium3.png",
  //   rangefrom: "AED 1.90 M* |  INR 4.5 CR* |  USD 521 K* | EUR 462 K* | GBP 400 K*",
  //   sqfrom: "From 827.5 Sq. Ft.\u00A0\u00A0 From 76.88 Sq. M.",
  //   rangeto: "AED 8.03 M* | INR 19.1 CR* | USD 2.20 M* | EUR 2.18 M* | GBP 1.79 M*",
  //   sqto: "To 2886.6 Sq. Ft.\u00A0\u00A0 To 268.17 Sq. M.",
  //   handover: "Handover – Dec 2028"
  // },
  // {
  //   title: "demo 2",
  //   subtitle: "1, 1.5, 2 and 4 Bedroom Apartments",
  //   img: "/assets/homepage/premium1.png",
  //   rangefrom: "AED 2.18 M* |  INR 5.2 CR* |  USD 597 K* | EUR 532 K* | GBP 461 K*",
  //   sqfrom: "From 791.8 Sq. Ft.\u00A0\u00A0 From 73.56 Sq. M.",
  //   rangeto: "AED 8.85 M* | INR 21.1 CR* | USD 2.42 M* | EUR 2.40 M* | GBP 1.97 M*",
  //   sqto: "To 3110.7 Sq. Ft.\u00A0\u00A0 To 288.99 Sq. M.",
  //   handover: "Handover – March 2029"
  // },
  // {
  //   title: "Demo 3",
  //   subtitle: "1, 1.5, 2 and 2.5 Bedroom Apartments",
  //   img: "/assets/homepage/premium1.png",
  //   rangefrom: "AED 2.24 M* |  INR 5.3 CR* |  USD 615 K* | EUR 549 K* | GBP 476 K*",
  //   sqfrom: "From 869.9 Sq. Ft.\u00A0\u00A0 From 80.82 Sq. M.",
  //   rangeto: "AED 4.44 M* | INR 10.6 CR* | USD 1.22 M* | EUR 1.20 M* | GBP 989 K*",
  //   sqto: "To 1711.9 SQ.FT.\u00A0\u00A0 To 159.04 Sq. M.",
  //   handover: "Handover – March 2029"
  // },
  // {
  //   title: "Demo 4",
  //   subtitle: "1, 1.5, 2, 2.5 and 3 Bedroom Apartments",
  //   img: "/assets/homepage/premium1.png",
  //   rangefrom: "AED 1.77 M* |  INR 4.1 CR* |  USD 485 K* | EUR 480 K* | GBP 394 K*",
  //   sqfrom: "From 762.1 Sq. Ft.\u00A0\u00A0 From 70.8 Sq. M.",
  //   rangeto: "AED 4.99 M* | INR 11.6 CR* | USD 1.37 M* | EUR 1.35 M* | GBP 1.11 M*",
  //   sqto: "To 2062.6 Sq. Ft.\u00A0\u00A0 To 191.62 Sq. M.",
  //   handover: "Handover – March 2029"
  // },
];


  // community counter animation //
  const countersRef = useRef([]);
  const sectionRef = useRef(null);
  useEffect(() => {
      const ctx = gsap.context(() => {
        countersRef.current.forEach((counterEl) => {
          if (!counterEl) return;

          const finalValue = parseFloat(counterEl.dataset.value);
          const suffix = counterEl.dataset.suffix || "";
          const prefix = counterEl.dataset.prefix || "";

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",      
              end: "bottom 20%",
              toggleActions: "play none none reset", 
            },
          });

          tl.fromTo(
            counterEl,
            { innerText: 0 },
            {
              innerText: finalValue,
              duration: 2.5,
              ease: "power1.out",
              snap: { innerText: 1 },
              onUpdate() {
                counterEl.textContent = `${prefix}${Math.floor(
                  counterEl.innerText
                )}${suffix}`;
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
  }, []);

  

  // Aos effect //
    useEffect(() => {
    // Initialize AOS once
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
    });
  }, []);

  // Mouse follow effect //
  useEffect(() => {
    const sections = [
      { selector: ".home-banner", ballClass: ".banner-ball" },
      { selector: ".information-section", ballClass: ".info-ball" },
      { selector: ".video-section .vdo-dec-blk", ballClass: ".video-ball" }
    ];

    const cleanupFns = [];

    sections.forEach(({ selector, ballClass }) => {
      const section = document.querySelector(selector);
      const ball = document.querySelector(ballClass);

      if (!section || !ball) return;

      gsap.set(ball, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(ball, "x", { duration: 0.5, ease: "expo.out" });
      const yTo = gsap.quickTo(ball, "y", { duration: 0.5, ease: "expo.out" });

      let isPaused = false;

      const handleMove = (e) => {
        if (!isPaused) {
          xTo(e.clientX);
          yTo(e.clientY);
        }
      };

      const handleEnter = () => {
        if (!isPaused)
          gsap.to(ball, { scale: 1, duration: 0.5, ease: "expo.out" });
      };

      const handleLeave = () => {
        gsap.to(ball, { scale: 0, duration: 0.5, ease: "expo.out" });
      };

      section.addEventListener("mousemove", handleMove);
      section.addEventListener("mouseenter", handleEnter);
      section.addEventListener("mouseleave", handleLeave);

      // Pause when hovering buttons / links
      const pauseElements = section.querySelectorAll(".btn, .scroll-down, iframe, .play-btn");
      const handlePauseEnter = () => {
        isPaused = true;
        gsap.to(ball, { opacity: 0, scale: 0.5, duration: 0.3 });
      };
      const handlePauseLeave = () => {
        isPaused = false;
        gsap.to(ball, { opacity: 1, scale: 1, duration: 0.3 });
      };

      pauseElements.forEach((el) => {
        el.addEventListener("mouseenter", handlePauseEnter);
        el.addEventListener("mouseleave", handlePauseLeave);
      });

      // 👉 If this is the video ball, add click-to-play behavior
      if (ballClass === ".video-ball") {
        const videoBall = ball;
        videoBall.addEventListener("click", () => {
          const playButton = document.querySelector(".video-thumbnail");
          if (playButton) playButton.click(); // trigger the React state change
        });
        cleanupFns.push(() => videoBall.removeEventListener("click", () => {}));
      }

if (ballClass === ".banner-ball") {
  ball.addEventListener("click", () => {
    $("#callbackForm, #connectForm").hide();
    $("#connectForm").show(); // because banner-ball = connect

    $.magnificPopup.open({
      items: { src: '#test-form' },
      type: 'inline'
    });
  });
}




      cleanupFns.push(() => {
        section.removeEventListener("mousemove", handleMove);
        section.removeEventListener("mouseenter", handleEnter);
        section.removeEventListener("mouseleave", handleLeave);
        pauseElements.forEach((el) => {
          el.removeEventListener("mouseenter", handlePauseEnter);
          el.removeEventListener("mouseleave", handlePauseLeave);
        });
      });
    });

    return () => cleanupFns.forEach((fn) => fn());
  }, []);


 // 👇 Scroll-based open logic
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -20% 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    }, options);

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      itemRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);



  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  const sections = [
    {
      icon: "/assets/homepage/star.svg",
      label: "Live",
      title: "Crafting a Lifestyle of Your Dreams",
      image: "/assets/homepage/acco1.png",
      text: [
        "Sobha Hartland II is a stunning mixed-use community featuring lush green spaces and sustainable amenities. It offers a harmonious blend of residential and recreational options, creating an ideal urban living environment intertwined with nature.",
        "Within this community is Sobha Estates, an exclusive gated villa enclave offering luxurious 5- and 6-bedroom villas. This private retreat emphasises both luxury and privacy, surrounded by vibrant greenery and serene waterways.",
        "The Riverside Crescent, Skyscape and Skyvue residences further enhance the appeal. Riverside Crescent features six unique towers for waterfront living, while Skyscape, comprising Aura, Altius, and Avenue boasts stunning views of the lagoon and Dubai Downtown and Skyvue consists of three towers overlooking the iconic Dubai skyline and Ras Al Khor wildlife sanctuary. Together, they redefine urban sophistication and luxury living in Dubai.",
      ],
    },
    {
      icon: "/assets/homepage/entertainment.svg",
      label: "Entertainment",
      title: "Leisure that Refreshes Your Soul",
      image: "/assets/homepage/acco1.png",
      text: [
        "Indulge in world-class entertainment with exclusive leisure hubs, serene parks, and family-friendly spaces that redefine recreation within the community.",
      ],
    },
    {
      icon: "/assets/homepage/dine.svg",
      label: "Dine",
      title: "Feast on Luxurious Delicacies",
      image: "/assets/homepage/acco1.png",
      text: [
        "Experience a culinary journey with fine dining restaurants, cozy cafés, and vibrant eateries offering international and local cuisine amidst stunning views.",
      ],
    },
  ];
  

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // inside Home component, with other states
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const [isCircleActive, setIsCircleActive] = useState(true);

  // GLOBAL FOLLOW CIRCLE
  useEffect(() => {
    const moveCircle = (event) => {
      if (!isCircleActive) return; // 👈 stop movement when disabled
      gsap.to(".circle", {
        duration: 0.3,
        x: event.clientX - 10,
        y: event.clientY - 10,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCircle);
    return () => document.removeEventListener("mousemove", moveCircle);
  }, [isCircleActive]);

  // 🟡 SECTION-SPECIFIC BALLS
  useEffect(() => {
    const sections = [
      { selector: ".home-banner", ballClass: ".banner-ball" },
      { selector: ".information-section", ballClass: ".info-ball" },
      { selector: ".video-section .vdo-dec-blk", ballClass: ".video-ball" },
    ];

    const cleanupFns = [];

    sections.forEach(({ selector, ballClass }) => {
      const section = document.querySelector(selector);
      const ball = document.querySelector(ballClass);
      if (!section || !ball) return;

      gsap.set(ball, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(ball, "x", { duration: 0.5, ease: "expo.out" });
      const yTo = gsap.quickTo(ball, "y", { duration: 0.5, ease: "expo.out" });
      let isPaused = false;

      const handleMove = (e) => {
        if (!isPaused) {
          xTo(e.clientX);
          yTo(e.clientY);
        }
      };

      const handleEnter = () => {
        setIsCircleActive(false); // 👈 hide global circle
        gsap.to(ball, { scale: 1, duration: 0.5, ease: "expo.out" });
      };

      const handleLeave = () => {
        setIsCircleActive(true); // 👈 re-enable global circle
        gsap.to(ball, { scale: 0, duration: 0.5, ease: "expo.out" });
      };

      section.addEventListener("mousemove", handleMove);
      section.addEventListener("mouseenter", handleEnter);
      section.addEventListener("mouseleave", handleLeave);

      cleanupFns.push(() => {
        section.removeEventListener("mousemove", handleMove);
        section.removeEventListener("mouseenter", handleEnter);
        section.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => cleanupFns.forEach((fn) => fn());
  }, []);

  return (
    
    <main>
<div className="circle">
  <div className="circle-inner"></div>
</div>

      {/* home banner */}
    <>
      <div className="home-banner">
        {/* <div className="banner-ball">
          <span className="ball-text">Connect</span>
        </div> */}

        <a href="#test-form" className="banner-ball popup-with-form" data-form="connect">
  <span className="ball-text">Connect</span>
</a>


        <div className="bg-image">
          <div className="container">
            <div className="head-content-blk" data-aos="fade-up">
              <img
                src="/assets/homepage/siniya-logo.svg"
                alt="sobha-hartland"
              />
              <h1>Live the Good Life</h1>
              <p>
                Sobha Siniya Island - Waterfront Properties in UAQ
              </p>
            </div>

            <div className="media-btn-blk">
              <Link href="#test-form" className="btn primary popup-with-form" data-form="callback">
                Call Back
                <img
                  src="/assets/homepage/call.svg"
                  alt="Call Back"
                  className="icon"
                />
              </Link>

              <Link href="/whatsapp" className="btn green" data-aos="">
                WhatsApp
                <img
                  src="/assets/homepage/whatsapp.svg"
                  alt="WhatsApp"
                  className="icon"
                />
              </Link>
            </div>

            <div className="media-btn-mb-blk">
              <Link href="#test-form" className="btn primary popup-with-form"  data-form="callback">
                <img
                  src="/assets/homepage/call.svg"
                  alt="Call Back"
                  className="icon"
                />
              </Link>

              <Link href="/whatsapp" className="btn green" data-aos="">
                <img
                  src="/assets/homepage/whatsapp.svg"
                  alt="WhatsApp"
                  className="icon"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* 👇 Scroll-down button added here */}
        <a href="#next-section" className="scroll-down" >
          <span></span>
          Scroll Down
        </a>
      </div>
    </>

      <Header/>

      {/* Community section */}
      <section className="community-section" id="next-section" ref={sectionRef}>
        <div className="outer">
          <div className="container">
            <div className="community-container">
              {/* Left section */}
              <div className="community-left">
                <h3 data-aos="fade-up">Dubai’s most</h3>
                <h2 data-aos="fade-up">Premium Master Community</h2>

                <div className="community-stats">
                <div className="stat-item" data-aos="fade-up">
                  <img src="/assets/homepage/area.svg" alt="Total Land Area" />
                  <div className="stat-content">
                    <div className="stat-top">
                      <h4 ref={(el) => (countersRef.current[0] = el)} data-value="16">0</h4>
                      <span className="millio">Million Sq. Ft.</span>
                    </div>
                    <p>of the Land Area</p>
                  </div>
                </div>

                <div className="stat-item" data-aos="fade-up">
                  <img src="/assets/homepage/building.svg" alt="Residential Units" />
                  <div className="stat-content">
                    <div className="stat-top">
                      <h4 ref={(el) => (countersRef.current[1] = el)} data-value="2">0</h4>
                      <span>+</span>
                    </div>
                    <p>Upcoming Luxury Resorts</p>
                  </div>
                </div>

                <div className="stat-item" data-aos="fade-up">
                  <img src="/assets/homepage/sun.svg" alt="Open Spaces" />
                  <div className="stat-content">
                    <div className="stat-top">
                      <h4 ref={(el) => (countersRef.current[2] = el)} data-value="46">0</h4>
                      <span>%</span>
                    </div>
                    <p>Open Green Spaces</p>
                  </div>
                </div>

                </div>

              </div>

              {/* Middle image */}
              <div className="community-image" data-aos="fade-up">
                <img src="/assets/homepage/siniya/girlbeachmb.jpg" alt="Sobha Hartland II" />
              </div>

              {/* Right section */}
              <div className="community-right" data-aos="fade-up">
                <p>
                  Sobha Siniya Island, situated 50 minutes from Dubai, beautifully harmonises luxury with nature, 
                  offering an exquisite collection of resorts, mansions, villas and residences. This island paradise 
                  captures the tranquillity of untouched natural beauty, preserving its pristine mangroves and wildlife 
                  such as rare turtles, gazelles, and flamingos
                </p>
                <p>
                  Experience the vibrant pulse of UAE’s cosmopolitan life while enjoying the peaceful seclusion of island 
                  living, connected by a 1.7 km bridge. 
                </p>

                <AnimatedButton
                  label="Connect Us"
                  onClick={() => console.log("Button clicked")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Dubai Section */}
      <section class="dubai-centre">
        <div class="container">
          <div class="hero-image" data-aos="fade-up">
            <img src="/assets/homepage/siniya/dinetable.jpg" alt="Dine banner" />
            <div class="hero-text">
              <h2>Right in the <span>Centre of Dubai</span></h2>
            </div>
          </div>
        </div>

          <div class="info-section">
            <div className="container">
            <div class="locations-wrapper">
              <ul class="locations top-row">
                <li data-aos="fade-up">
                  <h3>Marjan Island</h3>
                  <p>10 minutes away</p>
                </li>
                <li data-aos="fade-up">
                  <h3>Sharjah</h3>
                  <p>30 minutes away</p>
                </li>
              </ul>

              <ul class="locations bottom-row">
                <li data-aos="fade-up">
                  <h3>Dubai</h3>
                  <p>50 minutes away</p>
                </li>
                {/* <li data-aos="fade-up">
                  <h3>Burj Al Arab</h3>
                  <p>28 minutes away – 24 km</p>
                </li>
                <li data-aos="fade-up">
                  <h3>Downtown Dubai</h3>
                  <p>10 minutes away – 8.7 km</p>
                </li> */}
              </ul>
            </div>
            </div>
          </div>
      </section>

    {/* Premium Section */}
    <section className="premium-section">
      <div className="premium-outer">
        <div className="container">

          <h4 className="sub-heading">Discover a</h4>
          <h2 className="main-heading">Premium Lifestyle</h2>

          {/* CUSTOM PREV/NEXT BUTTONS */}
          {/* <div className="premium-nav">
            <button className="premium-prev">
              <img src="/assets/homepage/left-icon.svg" alt="Previous" />
            </button>
            <button className="premium-next">
              <img src="/assets/homepage/right-icon.svg" alt="Next" />
            </button>
          </div> */}

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".premium-prev",
              nextEl: ".premium-next",
            }}
            pagination={{ clickable: true }}
            slidesPerView={3}
            spaceBetween={55}
            breakpoints={{
              1100: { slidesPerView: 3 },
              1024: { slidesPerView: 2 },
              688: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="premiumSwiper"
          >
            {premiumData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="premium-card">

                  {/* IMAGE + HOVER ENQUIRE */}
                  <div className="image-wrapper">
                    <img src={item.img} alt={item.title} />

                    {/* HOVER ENQUIRE BOX */}
                    <div className="enquire-box">ENQUIRE NOW!</div>
                  </div>

                  {/* TITLE */}
                  <h3 className="title">{item.title}</h3>
                  <p className="subtitle">{item.subtitle}</p>

                  {/* CONTENT */}
                  <div className="info-block">
                    <p className="lab-head">RANGING FROM</p>
                    <p className="label rangefrom">
                      {item.rangefrom}
                    </p>

                    <div className="icon-row">
                      <img src="/assets/homepage/zoom-icon.svg" alt="Zoom Icon" />
                      <p className="sqfrom">{item.sqfrom}</p>
                    </div>

                    <p className="lab-head">TO</p>
                    <p className="label rangeto">
                      {item.rangeto}
                    </p>

                    {/* <div className="icon-row">
                      <img src="/assets/homepage/zoom-icon.svg" alt="Zoom Icon" />
                      <p className="sqto">{item.sqto}</p>
                    </div> */}
                  </div>

                  {/* FOOTER */}
                  <p className="handover">{item.handover}</p>
                  <p className="note">*Subject to Availability</p>
                  <p className="note">*The global prices may vary as per the exchange rate</p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>

    {/* Video Section */}
      <section className="video-section">
          <div className="video-ball">
            <span className="ball-text">Play</span>
          </div>
          <div className="container">
            {/* Heading */}
            <div className="video-blk">
              <h2 className="video-heading" data-aos="fade-up">
                Step Into <span>A World Of Sophistication</span>
              </h2>

              {/* Video Block */}
              <div className="vdo-dec-blk">
                <div className="video-wrapper" data-aos="fade-up">
                  {!isPlaying ? (
                    <>
                     <img
                        src="/assets/homepage/siniya/beach.jpg"
                        alt="Video Thumbnail"
                        className="video-thumbnail"
                        onClick={() => setIsPlaying(true)}
                      />
                    </>
                  ) : (
                    <div className="video-player">
                      <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1"
                        title="Sobha Hartland II Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="description-blk" >
            <div className="container">
              <div className="outer">
                <div className="video-description">
                  <p>
                    Sobha Hartland II is strategically located in the heart of Dubai,
                    making it an attractive investment opportunity. Its proximity to
                    major business districts, entertainment hubs, and key landmarks,
                    including Burj Khalifa, Dubai Waterfront, and more.
                  </p>
                  <AnimatedButton
                    label="Connect Us"
                    onClick={() => console.log("Button clicked")}
                  />
                </div>
              </div>
            </div>
          </div>
    </section>


      {/* lifestyle Accordian Section */}
    <section className="lifestyle-section">
      <div className="outer">
        <div className="container">
          {sections.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`lifestyle-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)} // 👈 Added click handler
            >
              <div className="lifestyle-header">
                <div className="left">
                  <img src={item.icon} alt={item.label} />
                  <span>{item.label}</span>
                </div>
                <h2>{item.title}</h2>
              </div>

              <div
                className="lifestyle-content"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? `${itemRefs.current[index]?.querySelector(".lifestyle-content").scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="image-blk">
                  <img src={item.image} alt={item.label} />
                </div>
                <div className="text-blk">
                  {item.text.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Luxury slider Section */}
      <div className="luxury-section">
      <div className="luxury-slider">
      <div className="container">
        <div className="top-swip-head" data-aos="fade-up">
          <h4>In the heart of</h4>
          <h3>Luxury</h3>
        </div>
        <Swiper
          modules={[FreeMode, Navigation]}
          // slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={true}  
          navigation={true}
          loop={true}
          className="luxury-swiper"
          data-aos="fade-up"
          Navigationavigation={{
            prevEl: ".luxury-prev",
            nextEl: ".luxury-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            550: { slidesPerView: 1, spaceBetween: 16 },   // Below 800px → 2 slides
            800: { slidesPerView: 1, spaceBetween: 20 },   // Above 800px → 3 slides
          }}
        >
          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Pool Area" />
              </div>
              <div className="luxury-slide-content">
                <h4 data-aos="fade-left">Elegant Pool Area</h4>
                <p data-aos="fade-left">
                  Clique nas numerações do mapa para visualizar as áreas comuns.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Grand Lobby" />
              </div>
              <div className="luxury-slide-content">
                <h4 data-aos="fade-left">Grand Lobby</h4>
                <p data-aos="fade-left">Clique nas numerações do mapa para visualizar as áreas comuns.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Modern Lounge" />
              </div>
              <div className="luxury-slide-content">
                <h4 data-aos="fade-left">Modern Lounge</h4>
                <p data-aos="fade-left">Clique nas numerações do mapa para visualizar as áreas comuns.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Exclusive Bar" />
              </div>
              <div className="luxury-slide-content">
                <h4 data-aos="fade-left">Exclusive Bar</h4>
                <p data-aos="fade-left">
                  Clique nas numerações do mapa para visualizar as áreas comuns.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
      </div>

      {/* Faq Section */}
      <section className="faq-section">
        <div className="container">
          <div className="outer">

              <div className="faq-left" data-aos="fade-up">
                    <p className="faq-subtitle">Got Questions?</p>
                    <h2 className="faq-title">
                      We've Got <br />
                      <span>Answers!</span>
                    </h2>
                  </div>

            <div className="faq-right">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${faqActiveIndex === index ? "active" : ""}`}
                  key={index}
                >
                  <div
                    className="faq-header"
                    onClick={() => toggleFaqAccordion(index)}
                  >
                    <span className="faq-number">{faq.number}</span>
                    <h3 className="faq-question">{faq.question}</h3>
                  </div>

                  <div
                    className="faq-content"
                    style={{
                      maxHeight:
                        faqActiveIndex === index && faqContentHeights[index]
                          ? `${faqContentHeights[index]}px`
                          : "0px",
                    }}
                    ref={(el) => (faqContentRefs.current[index] = el)}
                  >
                    <div className="faq-inner">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* image Section */}
      <div className="image-section">
        <div className="outer">
          <img src="/assets/homepage/siniya/islandvilla.jpg" alt="Exclusive Bar" />
        </div>
      </div>

      {/* information Section */}
      <div className="information-section"> 
        <a href="#test-form" className="info-ball popup-with-form" data-form="connect">
          <span className="ball-text">Connect</span>
        </a>
        <div className="outer">
          <div className="container">
            <h2 data-aos="fade-up" className="info-title">Need more informations?</h2>
          </div>
        </div>
      </div>




    {/* popup */}
<>
  {/* POPUP WRAPPER (Magnific Popup target) */}
  <div id="test-form" className="white-popup-block mfp-hide">

    {/* CALLBACK FORM */}
    <div id="callbackForm" className="form-type">
      <h1>Request a Call Back</h1>

      <form onSubmit={(e) => handleEmailSend(e, "callback")}>
        <fieldset style={{ border: 0 }}>
          <ol>
            <li>
              <label htmlFor="cb_name">Name</label>
              <input id="cb_name" name="name" type="text" placeholder="Name" required />
            </li>

            <li>
              <label htmlFor="cb_phone">Phone</label>
              <input id="cb_phone" name="phone" type="tel" placeholder="Eg. +447500000000" required />
            </li>
          </ol>

          <button type="submit" className="popup-submit-btn">Submit</button>
        </fieldset>
      </form>
    </div>

    {/* CONNECT FORM */}
    <div id="connectForm" className="form-type">
      <h1>Connect With Us</h1>

      <form onSubmit={(e) => handleEmailSend(e, "connect")}>
        <fieldset style={{ border: 0 }}>
          <ol>
            <li>
              <label htmlFor="con_name">Name</label>
              <input id="con_name" name="name" type="text" placeholder="Name" required />
            </li>

            <li>
              <label htmlFor="con_email">Email</label>
              <input id="con_email" name="email" type="email" placeholder="example@domain.com" required />
            </li>

            <li>
              <label htmlFor="con_message">Message</label>
              <textarea id="con_message" name="message" placeholder="Your message"></textarea>
            </li>
          </ol>

          <button type="submit" className="popup-submit-btn">Submit</button>
        </fieldset>
      </form>
    </div>

  </div>
</>

    </main>
  );
}

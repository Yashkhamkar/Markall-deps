import Image from "next/image";
import Link from "next/link";
import React from "react";
import market from "../../assets/market.jpg";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  const handleScroll = () => {
    scroll.scrollTo(0, 500, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="home-background">
      <div className="nav">
        <p className="markall">MARKALL</p>
        <ul className="nav-links">
          <ScrollLink to="section" smooth={true} duration={500}>
            <li className="nav-li">Services</li>
          </ScrollLink>
          <ScrollLink to="testi" smooth={true} duration={500}>
            <li className="nav-li">About Us</li>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <li className="nav-li">Pricing</li>
          </ScrollLink>
        </ul>
        <div className="btn">
          <ScrollLink to="contact" smooth={true} duration={500}>
            <div className="sub-btn">Get Started</div>
          </ScrollLink>
        </div>
      </div>
      <div className="main-content">
        <div className="t1">
          Reach your -<span>audience</span> & convert
        </div>
        <div className="t2">your leads</div>
        <div className="s-text">
          Get your customers with SEO, rank your business with email marketing,
          build sales leads{" "}
        </div>
        <div className="btnn">
          <ScrollLink to="section" smooth={true} duration={500}>
            <div className="sub-btnn">Get Started</div>
          </ScrollLink>
        </div>
        <div className="rect">
          <div className="sub-rect">Watch Demo</div>
        </div>
      </div>
      <div className="right">
        <div className="right-img">
          <Image src={market} width={578} height={386} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

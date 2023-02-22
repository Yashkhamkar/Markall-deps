import React from "react";
import auto from "../../assets/auto.jpg";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
const Section = () => {
  return (
    <div className="section" id="section">
      <div className="heading">OUR FEATURES</div>
      <div className="audience">Know your audience and boost sales</div>
      <div className="line"></div>
      <div className="para">
        Effective emails convey the most significant substance to a client at
        the proper time which is our marketing approaches include scheduled
        emails.
      </div>
      <div className="rectangle">
        <div className="rectangle-title">
          Save precious time with automation
        </div>
        <div className="rectangle-content">
          Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa
          leo purus cras commodo. Volutpat massa fusce sit libero ut mollis
          risus.
        </div>
        <div className="learn">
          Learn more <AiOutlineArrowRight />
        </div>
        <div className="rectangle-image">
          <Image src={auto} width={450} height={350} />
        </div>
      </div>
    </div>
  );
};

export default Section;

import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testi = () => {
  return (
    <div className="rectangles" id="testi">
      <div className="title">OUR HAPPY CUSTOMERS</div>
      <div className="title-para">What our customers say about us</div>
      <div className="title-line"></div>
      {/* <div className="quote">
        <RiDoubleQuotesL />
      </div> */}
      <div className="quote-para">
        Lorem ipsum dolor sit amet consectetur. In praesent ac sit scelerisque
        lacus. Faucibus tincidunt commodo mi.
      </div>
      <div className="quote-title">Jane Doe</div>
      <div className="quote-paraa">Product Specialist, Lorem Co.</div>
    </div>
  );
};

export default Testi;

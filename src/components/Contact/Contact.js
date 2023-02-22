import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [message, setmessage] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !phone || !message) {
      return Swal.fire({
        icon: "warning",
        text: "Please Fill all fields",
      });
    }
    console.log("Sending");
    let data = {
      name,
      email,
      phone,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      Swal.fire({
        icon: "success",
        text: "Message sent successfully",
      })
    );
  };
  return (
    <div>
      <div className="contact-rect" id="contact"></div>
      <div className="contact-form-rect">
        <div className="contact-title">
          Contact Now
          <div className="contact-para">
            In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra
            sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id
            vestibulum tincidunt adipiscing gravida risus.
          </div>
          <div className="contact-form-input">
            <form>
              <input
                placeholder="*Name"
                className="input-name"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <div className="input-line"></div>
              <input
                placeholder="*Email"
                onChange={(e) => setemail(e.target.value)}
                className="input-name"
                required
              />
              <div className="input-line"></div>
              <input
                placeholder="*Phone"
                className="input-name"
                onChange={(e) => setphone(e.target.value)}
                required
              />
              <div className="input-line"></div>
              <input
                placeholder="*Message"
                className="input-name"
                onChange={(e) => setmessage(e.target.value)}
                required
              />
              <div className="input-line"></div>
              {/* <div className="submit-button">Submit Now</div> */}
            </form>
            <button className="submit-button" onClick={handleSubmit}>
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

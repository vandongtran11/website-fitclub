import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jc50yuj', 'template_20vm8ba', form.current, '6oJDWB86i8vYN0Iq6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form}  className="email-container" onSubmit={sendEmail} >
          <input
            type="email"
            name="user.mail"
            placeholder="Enter your Email address"
          />
          <button className="btn btn-j"> Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;

import React, { useState } from "react";
import Navbar from "./Navbar";
import Map from "./Map";
import ReadMore from "./ReadMore";
import phone from "../Images/phone.svg";
import email from "../Images/email.svg";
import messenger from "../Images/messenger.svg";
import telegram from "../Images/telegram.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareTwitter,
  faPinterest,
  faLinkedin,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

// ContactUs component definition starts here
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className=" bg-[#F6F6F6]">
      <div className="flex flex-col items-center w-[100%]">
        <Navbar />
        <Map />
        <div className="">
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-start">
            <div className="bg-white p-6 rounded-[30px] w-full">
              <h1 className="text-3xl  mb-6 font-lexend font-medium">
                Get in Touch
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 font-openSans "
              >
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-[28vw] h-[44px] border border-gray-300 p-3 rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-[28vw] border border-gray-300 p-3 rounded-lg outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg outline-none"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-[200px] border border-gray-300 p-3 rounded-lg outline-none"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-32 bg-[#FE7E2A] text-white py-3 rounded-lg hover:bg-[#eb7f38]"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white  text-black p-6 rounded-lg flex flex-col gap-[40px] font-openSans font-semibold items-start">
              <h2 className="text-xl font-semibold ">Need Help?</h2>

              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <img src={phone} alt="phone" />
                  <a href="tel:08002420363">08002420363</a>
                </div>

                <div className="flex items-center space-x-2">
                  <img src={messenger} alt="messenger" />
                  <a href="Messenger.com">Messenger</a>
                </div>

                <div className="flex items-center space-x-2">
                  <img src={telegram} alt="telegram" />
                  <a href="telegram.com">Telegram</a>
                </div>

                <div className="flex items-center space-x-2">
                  <img src={email} alt="email" />
                  <a href="mailto:help@example.com">info@boomgos.com</a>
                </div>
              </div>

              <div className="text-xl font-semibold space-y-4">
                <h1 className="">Subscribe us</h1>
                <div className="flex  flex-col gap-[10px] items-start">
                  <div className="flex gap-[20px]  items-start">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ fontSize: "40px", color: "#206aa2" }}
                      />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faSquareTwitter}
                        style={{ fontSize: "40px", color: "#74C0FC" }}
                      />
                    </a>
                    <a
                      href="https://www.pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faPinterest}
                        style={{ fontSize: "40px", color: "#cb154c" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ fontSize: "40px", color: "#316d9b" }}
                      />
                    </a>
                    <a
                      href="https://www.whatsapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ fontSize: "40px", color: "#4fab8f" }}
                      />
                    </a>
                  </div>
                  <div className=" ">
                    <a
                      href="https://www.telegram.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTelegram}
                        style={{ fontSize: "40px", color: "#74C0FC" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-black p-6 mt-16 mb-10 rounded-lg  space-y-6 ">
            <div>
              <h3 className="text-gray-400">Reg No. 16813544</h3>
              <h4 className="font-medium mt-3 text-xl font-lexend text-[26px]">
                BOOMGOS OÜ
              </h4>
              <div className="text-gray-400 mt-4">
                <p>
                  Email:{" "}
                  <span className="font-semibold">support@boomgos.com</span>
                </p>
                <p>Phone: 0800 2420363</p>
              </div>
            </div>
            <div>
              <ReadMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

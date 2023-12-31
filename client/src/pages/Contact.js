import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
           Available 24/7 for queries and help.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.Ecommerce2023@gamil.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0712-2345673
          </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

import React from "react";
import { Footer, Navbar } from "../components";
import ContactImg from '../assets/contact1.jpg';
const ContactPage = () => {
  return (
    <>
      <Navbar />
   
      <div id="fh5co-contact">
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-md-5 col-md-push-1 animate-box">
            <div className="fh5co-contact-info">
             <img className="contactImg" src={ContactImg} alt="" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <p className="contact-sub">Get In Touch</p>
            <form action="#">
              <div className="row form-group">
                <div className="col-md-12">
                  {/* <label for="fname">First Name</label> */}
                  <input
                    type="text"
                    id="fname"
                    className="form-control"
                    placeholder="Your firstname"
                  />
                </div>
           
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  {/* <label for="email">Email</label> */}
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Your email address"
                  />
                </div>
              </div>
            
              <div className="row form-group">
                <div className="col-md-12">
                  {/* <label for="message">Message</label> */}
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    className="form-control"
                    placeholder="Say something about us"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="Btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    

      <Footer />
    </>
  );
};

export default ContactPage;
import React from "react";
import ContactInput from "../ChildComponents/ContactInput";

const ContactForm = () => {
  return (
    <section className="px-5 md:p-0 text-gray-600 body-font relative">
      <div className="container  py-24 mx-auto flex  gap-10  sm:flex-nowrap flex-wrap">
        <div
          data-aos="fade-up"
          className="w-full  rounded-lg overflow-hidden   flex items-end justify-start relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.763092379057!2d78.32467757586147!3d20.433828107945086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd393295524a827%3A0x738acf19f9d3c6ec!2z4KS44KS-4KS14KSy4KWAIOCkrOCkueClgeCkpuCljeCkpuClh-CktuCkv-CkryDgpLjgpILgpLjgpY3gpKXgpL4g4KSV4KSz4KSC4KSs!5e0!3m2!1sen!2sin!4v1710504103400!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
    <ContactInput/>
      </div>
    </section>
  );
};

export default ContactForm;

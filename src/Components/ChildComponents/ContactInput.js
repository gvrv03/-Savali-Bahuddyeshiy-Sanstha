"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ContactInput = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `${formData.name} are trying to contact you !`,
          formData: `
          <table style="width: 100%;border: 1px solid black;">
          <tr>
              <td   style="border: 1px solid black;" >Name:</td>
              <td   style="border: 1px solid black;" >${formData.name}</td>
          </tr>
          <tr>
              <td   style="border: 1px solid black;" >Email:</td>
              <td   style="border: 1px solid black;" >${formData.email}</td>
              
          </tr>
          <tr>
              <td   style="border: 1px solid black;" >Phone:</td>
              <td   style="border: 1px solid black;" >${formData.phone}</td>
              
          </tr>
          <tr>
              <td   style="border: 1px solid black;" >Message:</td>
              <td   style="border: 1px solid black;" >${formData.message}</td>
              
          </tr>
      </table>
      `,
        }),
      });

      const { data, error } = await response.json();
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setloading(false);
      if (data) {
        return toast.success("Message send Successfully !");
      } else {
        return toast.error("Error Occured!");
      }
    } catch (error) {
      setloading(false);
      toast.error("Error submitting form:", error);
      // Handle error
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex flex-col md:ml-auto w-full md:w-[50%]"
    >
      <h2
        data-aos="fade-up"
        className="text-gray-900 text-xl mb-1 font-medium title-font"
      >
        Contact Us
      </h2>

      <div data-aos="fade-up" className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          required={true}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div data-aos="fade-up" className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          required={true}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div data-aos="fade-up" className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
          Phone No.
        </label>
        <input
          required={true}
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div data-aos="fade-up" className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          required={true}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>

      <button
        type="submit"
        data-aos="fade-up"
        className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactInput;

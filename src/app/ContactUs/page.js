import ContactInput from "@/Components/ChildComponents/ContactInput";
import React from "react";

const page = () => {
  return (
    <section className=" mt-[92px] text-gray-600 body-font">
      <div className="bg-red-800 text-white py-5 px-5 md:px-0 ">
        <div className="container m-auto">
          <h1 className=" text-2xl md:text-4xl font-bold ">Contact Us</h1>
          <p className=" text-sm md:text-xl py-2">
            Savali Bahuddyeshiy Sanstha{" "}
          </p>
        </div>
      </div>
      <div className="container mx-auto py-10 flex md:flex-row  gap-10 flex-col  px-5  ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <tbody>
            <tr data-aos="fade-up" className="bg-white border-b  ">
              <th
                scope="row"
                className=" py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Name
              </th>
              <td className=" py-4">Jaya Sunil Shende</td>
            </tr>
            <tr data-aos="fade-up" className="bg-white border-b  ">
              <th
                scope="row"
                className=" py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Contact Number
              </th>
              <td className=" py-4"> +91 9067050941</td>
            </tr>
            <tr data-aos="fade-up" className="bg-white border-b">
              <th
                scope="row"
                className=" py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Email
              </th>
              <td className=" py-4">shendes969@gmail.com</td>
            </tr>

            <tr data-aos="fade-up" className="bg-white border-b">
              <th
                scope="row"
                className=" py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Address
              </th>
              <td className=" py-4">
                सावली बहुद्देशिय संस्था कळंब छत्रपती नगर दत्त रोड, जि, थाळेगाव,
                Kalamb, Maharashtra 445401
              </td>
            </tr>
          </tbody>
        </table>
        <ContactInput />
      </div>
    </section>
  );
};

export default page;

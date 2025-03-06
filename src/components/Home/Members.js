import React from "react";

const Members = () => {
  return (
    <section className="text-gray-600 body-font pb-10">
      <div className="container px-5  mx-auto">
      <div className="text-center mb-16">
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
       
        </div>
        <div className="grid grid-cols-3 md:grid-cols-7">
          <SingleMember
            img="/members/sunil.jpg"
            name="Sunil Shende"
            designation="President"
          />
          <SingleMember
            img="/members/gajendra.png"
            name="Gajendra Kove"
            designation="Vice President"
          />
          <SingleMember
            img="/members/jaya.jpg"
            name="Jaya Jambhure"
            designation="Secretry"
          />
          <SingleMember
            img="/members/nalini.jpg"
            name="Nalini Wakade"
            designation="Member"
          />
          <SingleMember
            img="/members/rupali.jpg"
            name="Rupali Nanaaware"
            designation="Member"
          />
          <SingleMember
            name="Kishor Shende"
            img="/members/kishor.png"
            designation="Member"
          />
          <SingleMember
            img="/members/rohan.jpg"
            name="Rohan Thakre"
            designation="Member"
          />
        </div>
      </div>
    </section>
  );
};

const SingleMember = ({ name, designation, img }) => {
  return (
    <div data-aos="fade-up" className="p-4 w-full">
      <div className="h-full flex flex-col items-center text-center">
        <img src={img} className="w-24 h-24 rounded-full border" alt="users" />
        <div className="w-full mt-5">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {name}
          </h2>
          <h3>{designation}</h3>
        </div>
      </div>
    </div>
  );
};
export default Members;

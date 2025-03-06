import PageHeader from "@/components/Utility/PageHeader";
import React from "react";

const page = () => {
  return (
    <div className="">
      <PageHeader title="Achievement" />
      <div className=" p-5 md:p-0 container m-auto mt-5">
        <SingleAward
          image="/Awards/img.jpg"
          name="Rajmata Jijavu Puraskar (National Level)"
          detail="Our mission is to engage in social work dedicated to the welfare and development of children. Through various initiatives and programs, we strive to create a nurturing and supportive environment where children can thrive emotionally, socially, and academically. Our efforts encompass providing essential resources, such as education, healthcare, and emotional support, as well as advocating for children's rights and protection from harm. By empowering children and supporting their holistic growth, we aim to create a brighter and more promising future for the next generation"
        />
      </div>
    </div>
  );
};

const SingleAward = ({ image, name, detail }) => {
  return (
    <section className="text-gray-600 body-font  ">
      <div className="container mx-auto flex pb-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={image}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {name}
          </h1>
          <p className="mb-8 leading-relaxed">{detail}</p>
        </div>
      </div>
    </section>
  );
};

export default page;

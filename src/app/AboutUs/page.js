import Features from "@/Components/Home/Features";
import React from "react";
import DonateUs from "../DonateUs/page";

const page = () => {
  return (
    <section className=" mt-[92px] text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5  justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/logo.svg"
        />
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Savali Bahuddyeshiy Sanstha, Kalamb
          </h1>

          <p className=" text-justify">
            Savli Bahuddyeshiy Sanstha is a registered, non-profit, secular,
            voluntary organization. Which is working for rural and urban
            development. This organization has been established in 2020 with the
            specific objective of solving rural problems and social development,
            creating public awareness. Under the employment guarantee scheme,
            livelihood issues, community health, quality education, women
            empowerment, women and child rights awareness, justice for children
            in child sexual abuse cases, public awareness to stop child
            marriage, implementation of village cleanliness campaign. This
            organization works for this.
          </p>
          <p className=" text-justify">
            Savli Multipurpose Sanstha Kalamb works to achieve sustainable
            development with special emphasis on women empowerment of
            underprivileged tribal communities. Savali Multipurpose Sanstha
            Kalamb is a registered society under Act 1860.
          </p>

          <Features />
          <DonateUs />
        </div>
      </div>
    </section>
  );
};

export default page;

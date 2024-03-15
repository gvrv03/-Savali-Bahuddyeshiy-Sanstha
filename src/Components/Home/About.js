import React from "react";

const About = () => {
  return (
    <div className="  container mt-20 m-auto p-5 md:p-0 md:flex-row flex-col flex gap-5 justify-between">
      <div className="w-full  md:w-[60%] ">
        <h4 className="text-2xl font-mono text-gray-400">Welcome to</h4>
        <h2 className="text-4xl mb-5 font-bold">
          {" "}
          Savali Bahuddyeshiy Sanstha, Kalamb
        </h2>
        <p className=" text-justify">
          <span className="font-bold  ml-5 ">Savli</span> Bahuddyeshiy Sanstha
          is a registered, non-profit, secular, voluntary organization. Which is
          working for rural and urban development. This organization has been
          established in 2020 with the specific objective of solving rural
          problems and social development, creating public awareness. Under the
          employment guarantee scheme, livelihood issues, community health,
          quality education, women empowerment, women and child rights
          awareness, justice for children in child sexual abuse cases, public
          awareness to stop child marriage, implementation of village
          cleanliness campaign. This organization works for this.
        </p>
        <p className=" text-justify">
          <span className="font-bold  ml-5 ">Savli</span> Multipurpose Sanstha
          Kalamb works to achieve sustainable development with special emphasis
          on women empowerment of underprivileged tribal communities. Savali
          Multipurpose Sanstha Kalamb is a registered society under Act 1860.
        </p>
        <button className=" py-2  px-5 mt-10  font-semibold border-2  text-black ">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-[40%]  grid grid-cols-2 gap-2 ">
        <img  className="w-80 h-60" src="/About/img (1).jpg" />
        <img  className="w-80 h-60" src="/About/img (2).jpg" />
        <img  className="w-80 h-60" src="/About/img (3).jpg" />
        <img  className="w-80 h-60" src="/About/img (4).jpg" />
      </div>
    </div>
  );
};

export default About;

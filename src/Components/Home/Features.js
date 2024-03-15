import React from "react";

const Features = () => {
  return (
    <section className=" bg-red-100 mt-20 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <SingleFeature
            icon="uil uil-eye"
            name="Vision"
            details="
Efforts include empowering women through sustainable livelihoods and business mentoring, safeguarding children from abuse, distributing Ekal Mahila Ration, promoting forest produce cultivation, raising awareness on water sanitation, and empowering tribal communities under the Forest Rights Act"
          />
          <SingleFeature
            icon="uil uil-rocket"
            name="Mission"
            details="Efforts encompass education provision, leadership development for women and tribal youth, village health workshops, committee meetings for child protection, discussions on local development, awareness campaigns on appropriate touch, employment creation, environmental conservation, training initiatives, drug abuse prevention in schools, and support for single women."
          />
          <SingleFeature
            icon="uil uil-crosshairs"
            name="Area of Work"
            details="Efforts include various activities by Savli Bahuddeshiy Sanstha in Kalamb and Wardha district, Lac cultivation, workshops for women empowerment, psychological support and rehabilitation for child victims of sexual abuse in Wardha district, discussions on child protection, police systems, and legal services, distribution of school supplies to affected children, promoting self-government and livelihood, raising awareness among children about appropriate touch, and conducting sanitation campaigns."
          />
        </div>
      </div>
    </section>
  );
};

const SingleFeature = ({ name, icon, details }) => {
  console.log(details);
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-200 text-red-500 mb-5 flex-shrink-0">
        <i className={` text-3xl  ${icon}`} />
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-base md:text-lg title-font font-medium mb-3">
          {name}
        </h2>
        <p className="leading-relaxed  text-sm md:text-base">{details}</p>
      </div>
    </div>
  );
};

export default Features;

import React from "react";

const DonateUs = () => {
  return (
    <div className="mt-[92px] py-5 px-5 md:px-0 container m-auto ">
      <div>
        <h1 className="text-3xl py-5 font-bold ">Contribution</h1>
        <p className="pb-5 text-justify">
          Savali Bahuddyeshiy Sanstha is a registered, non-profit, secular,
          voluntary organization. Which is working for rural and urban
          development. This organization has been established in 2020 with the
          specific objective of solving rural problems and social development,
          creating public awareness. Under the employment guarantee scheme,
          livelihood issues, community health, quality education, women
          empowerment, women and child rights awareness, justice for children in
          child sexual abuse cases, public awareness to stop child marriage,
          implementation of village cleanliness campaign. This organization
          works for this.
        </p>
      </div>

      <div className=" w-full md:w-fit border">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <tbody>
            <tr className="bg-white border-b  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Account Name
              </th>
              <td className="px-6 py-4">SAVALI BAHUDDESHIYA SANSTHA KALAMB</td>
            </tr>
            <tr className="bg-white border-b  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Account Number
              </th>
              <td className="px-6 py-4">5197630101</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Account Type
              </th>
              <td className="px-6 py-4">SBA</td>
            </tr>

            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                IFSC Code
              </th>
              <td className="px-6 py-4">CBIN0281917</td>
            </tr>

            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Branch
              </th>
              <td className="px-6 py-4">DONGAR_DONGARKHARDA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonateUs;

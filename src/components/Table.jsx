import React from "react";
import userdata from "./userdata";

const Table = ({ filteredData }) => {
  return (
    <div className="flex flex-col ">
      <table className="border-2">
        <thead>
          <tr className="info flex justify-between text-center">
            <td className="id border-2  px-8 h-fit p-2 bg-orange-200 ">ID</td>
            <td className="id border-2  px-8 h-fit p-2 bg-orange-200 ">
              Customer Name
            </td>
            <td className="id border-2  px-8 h-fit p-2 bg-orange-200 ">Age</td>
            <td className="id border-2  px-8 h-fit p-2 bg-orange-200 w-60">
              Email
            </td>
            <td className="id border-2  px-8 h-fit p-2 bg-orange-200 ">
              Salary
            </td>
            <td className="id border-2  px-8 h-fit p-2 bg-orange-200 ">
              Order
            </td>
            <td className="id border-2  px-8 h-fit p-2 bg-orange-200 ">
              Total Spents
            </td>
            <td className="id border-2  px-8 h-fit p-2 bg-orange-200 ">
              Gender
            </td>
            <td className="id border-2  px-8 h-fit p-2 bg-orange-200 ">
              Last seen
            </td>
            {/* <td className="id border-2 border-black px-8 h-fit w-38">Hobby</td> */}
          </tr>
        </thead>

        <div className="flex flex-col gap-4">
          {userdata.map((data) => {
            return (
              <tbody>
                {/* <tr className="info border-2">
              {Object.keys(data).map((key, index) => {
                console.log(data[key]);
                return (
                  <td
                    key={index}
                    className="border-2 px-10 h-fit p-2 bg-orange-200 "
                  >
                    {data[key]}
                  </td>
                );
              })}
            </tr> */}

                {filteredData.map((data, index) => (
                  <tr key={index} className="info border-2">
                    {Object.values(data).map((value, index) => (
                      <td
                        key={index}
                        className="border-2 px-11 h-fit p-2 bg-orange-200"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            );
          })}
        </div>
      </table>
    </div>
  );
};

export default Table;

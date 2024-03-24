/* eslint-disable react/prop-types */
import React from "react";
import userdata from "./userdata";

const Table = ({ filteredData }) => {
  return (
    <div className="w-9/12 flex flex-col ">
      <table className="border-2 table-fixed">
        <thead>
          <tr className="info flex justify-start ">
            <td className="id border-2 h-fit p-2 bg-orange-200 ">ID</td>
            <td className="id border-2 h-fit p-2 bg-orange-200 ">
              Customer Name
            </td>
            <td className="id border-2 h-fit p-2 bg-orange-200 ">Age</td>
            <td className="id border-2 h-fit p-2 bg-orange-200">Email</td>
            <td className="id border-2 h-fit p-2 bg-orange-200 ">Salary</td>
            <td className="id border-2 h-fit p-2 bg-orange-200 ">Order</td>
            <td className="id border-2 h-fit p-2 bg-orange-200 ">
              Total Spents
            </td>
            <td className="id border-2 h-fit p-2 bg-orange-200 ">Gender</td>
            <td className="id border-2 h-fit p-2 bg-orange-200 ">Last seen</td>
            {/* <td className="id border-2 border-black px-8 h-fit w-38">Hobby</td> */}
          </tr>
        </thead>

        
          <tbody>
            {filteredData.map((data, index) => {
              return (
                <tr key={index} className="info flex justify-start">
                  {Object.keys(data).map((key, index) => {
                    console.log(data[key]);
                    return (
                      <td
                        key={index}
                        className="id border-2 p-2 bg-orange-200"
                      >
                        {data[key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        
      </table>
    </div>
  );
};

export default Table;

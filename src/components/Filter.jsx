import React from "react";

const Filter = ({ filter, setFilter, genderFilter, setGenderFilter , activeFilter, setActiveFilter }) => {
  return (
    <>
      <div className="border-2 w-96 p-10 h-[80vh] ">
        <form action="/" className="flex flex-col gap-16">
          <div className="search">
           
            <input
              type="text"
              placeholder="Search by Customer Name..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className=" bg-gray-500 py-3 rounded-lg w-[100%] text-2xl text-white"
            />
          </div>

          <div className="Gender flex space-x-8">
            <label htmlFor="Gender">Gender</label>
            <select
              name=""
              id="Gender"
              className=" bg-gray-500 py-3 text-center rounded-lg w-[50%] text-white"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="All gender">All Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="lastseen flex space-x-8">
            <label htmlFor="active">Last Active</label>
            <select
              name=""
              id="active"
              className=" bg-gray-500 py-3 text-center rounded-lg w-[50%] text-white"
              // value={activeFilter}
              onChange={(e)=>setActiveFilter(e.target.value)}
            >
              <option value="All years">All Year</option>
              <option value="2005">2005</option>
              <option value="2011">2011</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;

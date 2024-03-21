import './App.css'
import Filter from './components/Filter'
import Table from './components/Table'
import userdata from './components/userdata'
import { useState } from 'react'

function App() {

  const [filter, setFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  
  const filteredData = userdata.filter((data) => {
    // return(
      // data["name"].toLowerCase().includes(filter.toLowerCase())
      
      const nameMatch = data["name"].toLowerCase().includes(filter.toLowerCase());
      const genderMatch = genderFilter === "" || data["gender"] === genderFilter;
      // const activefilter = activeFilter === "" || data["lastseen"] === activeFilter;



      // return (nameMatch && genderMatch && activeFilter);
      return nameMatch && genderMatch;
    // )
    
  });

  return (
    <div className='flex justify-center items-start gap-10 mt-20'>
    <Filter filter={filter} setFilter={setFilter} genderFilter={genderFilter} setGenderFilter={setGenderFilter} activeFilter = {activeFilter} setActiveFilter={setActiveFilter}/>
    <Table filteredData={filteredData} />
    </div>
  )
}

export default App

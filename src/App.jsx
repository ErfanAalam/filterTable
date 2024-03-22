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
      
      const nameMatch = data["name"].toLowerCase().includes(filter.toLowerCase());
      const genderMatch = genderFilter === "" || data["gender"] === genderFilter;
      const activeMatch = activeFilter === "" || data.lastSeen.slice(data.lastSeen.lastIndexOf("-") + 1) === activeFilter


      return (
        nameMatch &&
        genderMatch  
        &&
        activeMatch
      )
    
  });

  return (
    <div className='flex justify-center items-start gap-10 mt-20'>
    <Filter filter={filter} setFilter={setFilter} genderFilter={genderFilter} setGenderFilter={setGenderFilter} activeFilter = {activeFilter} setActiveFilter={setActiveFilter}/>
    <Table filteredData={filteredData} />
    </div>
  )
}

export default App

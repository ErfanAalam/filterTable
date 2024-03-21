import './App.css'
import Filter from './components/Filter'
import Table from './components/Table'
import userdata from './components/userdata'
import { useState } from 'react'

function App() {

  const [filter, setFilter] = useState("");
  
  const filteredData = userdata.filter((data) => {
    return data["Customer Name"].toLowerCase().includes(filter.toLowerCase());
    // return data && data["Customer Name"]?.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className='flex justify-center items-start gap-10 mt-20'>
    <Filter filter={filter} setFilter={setFilter} />
    <Table filteredData={filteredData} />
    </div>
  )
}

export default App

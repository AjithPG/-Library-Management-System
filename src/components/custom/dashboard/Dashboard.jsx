import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getBooks } from '@/api/booksApi'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Pencil, Search, Trash2 } from 'lucide-react';

const Dashboard = () => {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "name" },
    { field: "author" },
    { field: "publisher" },
    { field: "ISBN" },
    { field: "assignedto", cellRenderer: () => <span className='cursor-pointer underline'>Student</span> },
    {
      field: "Edit", maxWidth: 100, cellRenderer: () => (
        <div className='py-2'>
          <Pencil color="grey" size={20} className='cursor-pointer' />
        </div>
      )
    },
    { field: "Delete", maxWidth: 100, cellRenderer: () => (
      <div className='py-2'>
        <Trash2 color="red" size={20} className='cursor-pointer' />
      </div>
    ) }
  ]);
  const [searchTerm,setSearchTerm] = useState('')
  const { data: books, isPending, error } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  })
  console.log({ books })
  return (
    <>
      <h2 className='text-center text-lg p-3 font-semibold tracking-wider  uppercase'>Dashboard</h2>
      <div className='border flex my-2 p-2 max-w-sm rounded-lg'>
        <Search color='grey'/>
        <input type='text' placeholder='Search any fields' className='outline-none pl-2' onChange={(event)=>setSearchTerm(event.target.value)}/>
      </div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={books}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={10}
          quickFilterText={searchTerm}
        />
      </div>
    </>

  )
}

export default Dashboard
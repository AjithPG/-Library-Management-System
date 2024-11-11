import { useState,useRef } from 'react'
import {  useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getStudents,deleteStudent } from '@/api/studentsApi'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Pencil, Search, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const StudentList = () => {
  const [searchTerm,setSearchTerm] = useState('')
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  const {mutate} = useMutation({
    mutationKey: ['deleteStudents'],
    mutationFn: deleteStudent,
    onSuccess:()=>{
      toast('Student is Deleted SuccessFully')
      queryClient.invalidateQueries({
        queryKey: ["students"],
      });
    },
    onError:(error)=>{
      toast(error.message)
    }
  })
  // Column Definitions: Defines the columns to be displayed.
  const colDefs = useRef([
    { field: "first_name" ,headerName: "First Name"},
    { field: "middle_name",headerName: "Second Name",cellRenderer:(params)=> {return params.data.middle_name || <span>&mdash;</span>}},
    { field: "last_name",headerName: "Last Name" },
    { field: "class" ,maxWidth:100},
    { field: "address" },
    { field: "city" },
    { field: "state" },
    { field: "pincode",maxWidth:100 },
    { field: "phone" },
    {
      field: "Edit", maxWidth: 100, cellRenderer: (params) => (
        <div className='py-2' onClick={()=>navigate(`/books/${params.data.id}`)}>
          <Pencil color="grey" size={20} className='cursor-pointer' />
        </div>
      )
    },
    { field: "Delete", maxWidth: 100, cellRenderer: (params) => (
      <div className='py-2' 
      onClick={ ()=>{
        const shouldDelete = window.confirm('Are you sure you want to delete the selected book')
        if(shouldDelete){
          mutate(params.data.id)
        }
      }
        
      }
      >
        <Trash2 color="red" size={20} className='cursor-pointer' />
      </div>
    ) }
  ])
 
  const { data: students, isPending, error } = useQuery({
    queryKey: ['students'],
    queryFn: getStudents
  })


  return (
    <>
      <h2 className='text-center text-lg p-3 font-semibold tracking-wider  uppercase'>Studetnts List</h2>
      {error && <p className='text-xl text-red-500 tracking-wide text-center'>{error.message}</p>}
      <div className='border flex my-2 p-2 max-w-sm rounded-lg'>
        <Search color='grey'/>
        <input type='text' placeholder='Search any fields' className='outline-none pl-2' onChange={(event)=>setSearchTerm(event.target.value)}/>
      </div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={students}
          columnDefs={colDefs.current}
          pagination={true}
          paginationPageSize={10}
          quickFilterText={searchTerm}
        />
      </div>
    </>

  )
}

export default StudentList
import React from 'react'
import EditBook from '../edit-book/EditBook'
import { useMutation } from '@tanstack/react-query'
import { addBooks } from '@/api/booksApi'
import { toast } from 'sonner'


const AddBook = () => {

 const {isPending,error,mutateAsync} = useMutation(
  {
    mutationKey:['addBooks'],
    mutationFn:addBooks,
    onSuccess:()=>toast("Book is addedd successfully"),
    onError:(error)=>toast(error.message)

  }
 )

 const handleFormSubmit = async (books)=>{
  try{
    await mutateAsync(books)
    return true
  } catch(error) {
    console.log(error);
    return false
  }
 
 }

  return (
    <>
      <h2 className='text-center text-lg p-3 font-semibold tracking-wider  uppercase'>Add Book</h2>
       <EditBook handleFormSubmit={handleFormSubmit} isPending={isPending} />
    </>

  )
}

export default AddBook
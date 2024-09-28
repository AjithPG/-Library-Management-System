import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { addBooks } from '@/api/booksApi'
import { toast } from 'sonner'
import BookForm from '../book-form/BookForm'


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
       <BookForm handleFormSubmit={handleFormSubmit} isPending={isPending} />
    </>

  )
}

export default AddBook
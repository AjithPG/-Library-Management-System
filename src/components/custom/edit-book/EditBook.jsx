import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { editBooks,getBook } from '@/api/booksApi'
import { toast } from 'sonner'
import BookForm from '../book-form/BookForm'
import { useNavigate, useParams } from 'react-router-dom'


const EditBook = () => {
 const {id} = useParams();
 const navigate = useNavigate()

 const {data:book,isPending:bookIsPending,error:bookIserror} = useQuery(
  {
    queryKey:['getBook',id],
    queryFn:()=>getBook(id)
  }
 )

 console.log('book',book)

 const {isPending,error,mutateAsync} = useMutation(
  {
    mutationKey:['editBooks'],
    mutationFn:editBooks,
    onSuccess:()=>{
      toast("Book is Updated Successfully")
      setTimeout(()=>{
        navigate('/dashboard')
      },1000) 
    },
    onError:(error)=>toast(error.message)

  }
 )

 const handleFormSubmit = async ({id,book})=>{
  try{
    await mutateAsync({id,book})
    return true
  } catch(error) {
    console.log(error);
    return false
  }
 
 }

  return (
    <>
      <h2 className='text-center text-lg p-3 font-semibold tracking-wider uppercase'>Edit Book {id}</h2>
       {
        bookIserror && <p className='text-center text-base font-normal tracking-wider text-red-500'>{bookIserror.message}</p>
       }
       {
        bookIsPending && <p className='text-center text-base font-normal tracking-wider text-black-600'>Loading...</p>
       }
       <BookForm key={book?.id} book={book} handleFormSubmit={handleFormSubmit} isPending={isPending || bookIsPending}  />
    </>

  )
}

export default EditBook
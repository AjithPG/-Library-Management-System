import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const EditBook = ({handleFormSubmit,isPending}) => {

  const formSchema = z.object({
    name: z.string().refine((v)=>v.trim() !== "","This is a required field")
    .refine((v)=>v.length >= 5,"Please enter atleast 5 characters"),
    author: z.string().refine((v)=>v.trim() !== "","This is a required field"),
    publisher: z.string().refine((v)=>v.trim() !== "","This is a required field"),
    isbn: z.string().refine((v)=>v.trim() !== "","This is a required field")
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      author:"",
      publisher:"",
      isbn:""
    },
  })

  async function onSubmit(values) {
    console.log(values)
    const isSuccess = await handleFormSubmit(values);
    if(isSuccess){
      form.reset();
    }
  }

  return (
    <div className='max-w-[500px] mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Name" {...field} className="focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Author name" {...field} className="focus-visible:ring-transparent"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publisher"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Publisher</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Publisher name" {...field} className="focus-visible:ring-transparent"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input placeholder="Enter ISBN" {...field} className="focus-visible:ring-transparent"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>Add Book</Button>
        </form>
      </Form>
    </div>

  )
}

export default EditBook
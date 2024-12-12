'use client'
import { Button, Callout, TextField, Text, Spinner } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

type IssueForm = z.infer<typeof createIssueSchema>; //zod now infer this a type of createIssueSchema

// interface IssueForm{
//     title: string;
//     description: string;
// }

//Note: formState object represents all needed to know about the form including errors.
const NewIssuePage = () => {
  const router = useRouter();
  const {register, control, handleSubmit, formState:{ errors }} = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)}
    );
  
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  //console.log(register('title'))

  return (
    <div className='max-w-xl'>{ error && 
        <Callout.Root color="red" className='mb-5'>  
            <Callout.Text>{error}</Callout.Text>  
        </Callout.Root>
        }
  
    <form className=' space-y-3' 
        onSubmit={handleSubmit(async (data) =>{
          try{
            setSubmitting(true);
            await axios.post('/api/issues', data);
            router.push('/issues')
          }catch (error) {
            setSubmitting(false);
            setError('An unexpected error occurred.')
            console.log(error)
          }
        })}>

        <TextField.Root placeholder='Title' {...register('title')}/>
        {/* Can remove conditions (E.g.{errors.title && ...} ) due to check added in ErrorMessage component */}
        <ErrorMessage> {errors.title?.message} </ErrorMessage>
        <Controller 
            name="description" 
            control={control} 
            render={({field}) =>( <SimpleMDE placeholder="Description"  {...field}/> )} />
            
        <ErrorMessage> {errors.description?.message} </ErrorMessage>                                                                                     
        <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Spinner/>}</Button>
    </form>
    </div>
  )
}

export default NewIssuePage


//Older Code
//import { Button, TextArea } from "@radix-ui/themes";
// import React from 'react'

// ** change the <div> to <form> **
// const NewIssuePage = () => {
//   const {register, control, handleSubmit} = useForm<IssueForm>();
//   console.log(register('title'))
//   return (
//     <div className='max-w-xl space-y-3'>  <-- ** these were changed **
//       <TextField.Root placeholder='Title' {...register('title')}/>
//       <Controller 
//           name="description" 
//           control={control} 
//           render={({field}) => <SimpleMDE placeholder="Description"  {...field}/>} />                                                                                       
//       <Button>Submit New Issue</Button>
//     </div> <-- ** these were changed **
//   )
// }
import React from 'react'
import { useForm } from "react-hook-form";

function Contacts() {
     const { register, handleSubmit, formState: { errors } } = useForm();
          const onSubmit = data => console.log(data);
  return (
    <>
    <div className="flex mt-12 h-screen items-center justify-center">
    
    
  <form onSubmit={handleSubmit(onSubmit)}>
    {/* if there is a button in form, it will close the modal */}
  
  <h3 className="font-bold text-4xl">Contact Form</h3>
  <div className="mt-4">
    <span className="mt-2">Name</span>
    <br />
    <input type="text" placeholder="Enter your Name" className="w-80 px-3 py-1 border rounded outline-none"
    {...register("name", { required: true })}
    />
    <br />
    {errors.name && <span className="text-red-500 text-sm">This Name field is required</span>}
    </div>
  <div className="mt-4">
    <span className="mt-2">Email</span>
    <br />
    <input type="email" placeholder="Enter your Email" className="w-80 px-3 py-1 border rounded outline-none"
    {...register("email", { required: true })}
    />
    <br />
    {errors.email && <span className="text-red-500 text-sm">This Email field is required</span>}
    </div>
    <div className="mt-4">
    <span className="mt-2">Message</span>
    <br />
    <textarea rows="5" cols="100" placeholder="Enter your Message" className="w-80 px-3 py-1 border rounded outline-none"
    {...register("message", { required: true })}
    />
    <br />
    {errors.message && <span className="text-red-500 text-sm">This Message field is required</span>}
    </div>
    <div className="mt-3"> 
      <button className="mt-3 px-3 py-1 rounded-md border outline-none text-white bg-blue-500 hover:bg-pink-700">Submit</button>
      
   
    </div>
    </form>
</div>


    
    </>
  )
}

export default Contacts
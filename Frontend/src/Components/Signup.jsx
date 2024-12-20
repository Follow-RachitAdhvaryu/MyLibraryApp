import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => console.log(data);
  return (
    <>
    
    <div className="flex h-screen items-center justify-center">
    <div className="w-[500px] rounded-md">
<div className="modal-box">
  <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    {/* if there is a button in form, it will close the modal */}
    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
  <h3 className="font-bold text-lg">SignUp</h3>
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
    <span className="mt-2">Password</span>
    <br />
    <input type="password" placeholder="Enter your Password" className="w-80 px-3 py-1 border rounded outline-none"
    {...register("password", { required: true })}
    />
    <br />
    {errors.password && <span className="text-red-500 text-sm">This Password field is required</span>}
    </div>
    <div className="mt-3"> 
      <button className="px-3 py-1 rounded-md border outline-none text-white bg-pink-500 hover:bg-pink-700">Sign Up</button>
      <p className="justify-right">Already Registered?<button className="underline text-blue-500" onClick={()=>document.getElementById("my_modal_3").showModal()}>&nbsp;Login</button>
      <Login/>
      </p>
   
    </div>
    </form>
</div>
</div>
</div>
</>
)
}

export default Signup
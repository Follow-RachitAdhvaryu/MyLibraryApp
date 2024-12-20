import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      <h3 className="font-bold text-lg">Login</h3>
      <div className="mt-4">
        <span className="mt-2">Email</span>
        <br />
        <input type="email" placeholder="Enter your Email" className="w-80 px-3 py-1 border rounded outline-none"
        {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="mt-4">
        <span className="mt-2">Password</span>
        <br />
        <input type="password" placeholder="Enter your Password" className="w-80 px-3 py-1 border rounded outline-none"
        {...register("password", { required: true })}
        />
        <br />
        {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="mt-3 flex justify-around"> 
          <button className="px-3 py-1 rounded-md border outline-none text-white bg-pink-500 hover:bg-pink-700">Login</button>
          <p className="justify-right">Not Registered?<Link  to="/signup" className="nav-link underline text-blue-500">&nbsp;<a href="/signup">Sign Up</a></Link></p>
        </div>
        </form>
    </div>
  </dialog>
  </div>
  )
}

export default Login
import React from 'react'



function Cards({item}) {
  return (
    <>
    <div className="mt-5 my-4 p-2">
    <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200 rounded">
  <figure>
    <img
      src={item.image}
      alt={item.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline"><span>&#8377;</span>&nbsp;{item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 text-white"><button>Buy Now</button></div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
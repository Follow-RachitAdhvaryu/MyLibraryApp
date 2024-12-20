import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom'
function Course() {
 
  return(
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
      
      <h1 className="text-2xl text-white md:text-4xl">We are Delighted to have you <span className="text-pink-500">here:-)</span></h1>
      <p className="mt-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi veritatis quaerat nesciunt voluptatibus, tenetur fugiat voluptatem porro obcaecati vero officiis doloremque temporibus, alias ipsum esse at maiores eveniet pariatur.
      </p>
      <Link to="/">
            <button className="bg-pink-500 rounded text-white px-4 py-2 hover:bg-pink-700 mt-6">Back</button>
            </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
       {
        list.map((item)=>(
          <Cards item={item} key={item.id}></Cards>
        ))  // here we are mapping through the list array and passing each item as a prop to the Cards component. This will render each course card on the page.  // The key prop is required for React to identify unique elements when re-rendering the component.  // This is necessary for performance optimization as React needs to track changes in the DOM.  // In this case, the key is the id of the course.  // Note: In a real-world application, you would likely use a unique identifier other than the id property to ensure uniqueness across the entire list.  // This is a common practice in JavaScript and React development.  // In this case, the id is used for demonstration purposes.  // If you were to add or remove items from the list, you would need to update the keys accordingly to maintain the correct order and
       }
      </div>
      </div>
   </>
  )
}

export default Course
import React from 'react';
import { Link } from 'react-router';
import { FaStarHalfAlt } from "react-icons/fa";
// import { use } from 'react';    


const Book = ({book}) => {
    // const data = use(bookPromise);
    // console.log(data)
    const { bookName , author, image, rating , category, tags, yearOfPublishing, publisher }= book;
    return (
       <Link to={`/bookDetails/${book.id}`}>
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-10'>
    {
      tags.map(tag => <button>{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>{publisher}</p>
    <div className=' border-t-2 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
    </div>
  </div>
</div>
       </Link>
    );
};

export default Book;
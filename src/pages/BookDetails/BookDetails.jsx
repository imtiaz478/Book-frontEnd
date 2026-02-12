import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();


    if (!data) {
        return (
            <div className='w-2/3 mx-auto'>
                <p>Loading...</p>
            </div>
        );
    }

    const bookId = id ? Number(id) : NaN;

   
    const singleBook = Array.isArray(data)
        ? data.find(book => Number(book.bookId) === bookId)
        : null;

    if (!singleBook) {
        return (
            <div className='w-2/3 mx-auto'>
                <p>Book not found.</p>
            </div>
        );
    }

    const { bookName, image } = singleBook;

    const handleMarkAsRead = id => {
        addToStoredDB(id);  

    }
    return (
        <div className=' w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <button onClick={()=>handleMarkAsRead(id)} className=' btn btn-accent'>Mark as Read</button>
            <button className=' btn btn-info'>Add to WishList</button>
        </div>
    );
};

export default BookDetails;
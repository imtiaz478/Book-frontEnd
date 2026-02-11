import React from 'react';
import { useLoaderData, useParams } from 'react-router';

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
    return (
        <div className=' w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <button className=' btn btn-accent'>Read</button>
            <button className=' btn btn-info'>WishList</button>
        </div>
    );
};

export default BookDetails;
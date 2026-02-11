import React, { Suspense} from 'react';
import Book from '../Book/Book';
const Books = ({data}) => {
    // const [allBooks, setBooks] = useState([]);
    // useEffect(()=> {
    //     fetch("booksData.json").then(res => res.json()).then(data => {setBooks(data)})

    // },[])

    // const bookPromise = fetch('./booksData.json').then(res => res.json());

    return (
        <div>
            <h1 className=' text-3xl text-center p-6'>Hello ami books</h1>
            <Suspense fallback={<span>Loading....</span>}>
              <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center gap-5'> 
              {
                // data.map((book) => <Book key={book.bookId} book={book}></Book>)
                    data.map((book) => <Book key={book.bookId} book={book}></Book>) 
               }
              </div>

            </Suspense>
        </div>
    );
};

export default Books;
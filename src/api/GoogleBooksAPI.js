import axios from 'axios'

const APIKey= "AIzaSyCF7yCdC0RSIpcCjw6cc4ESBGC6tgoIzco";

const GoogleBooksAPI=axios.create({
    baseURL:"https://www.googleapis.com/books/v1/volumes"
});

const getBooksByTerm=(SearchTerm, setBooks,  startIndex, setTotalPages)=>{
    GoogleBooksAPI.get('', {
        params: {
            q: SearchTerm,
            key: APIKey,
            startIndex: startIndex,
        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems/20));
    })
}

const getBookDetails=(book_id, setCurrentBook)=>{
    console.log("API " +book_id);
    GoogleBooksAPI.get(''+book_id)
        .then((response) => {
            console.log("book ", response.data);
            setCurrentBook(response.data);
        });
}

export {getBooksByTerm, getBookDetails};


import { combinereducers } from 'redux'

const booksReducer = () => {
    return [
        {title: 'WEB601', notes: 'Cheese'},
        {title: 'WEB601', notes: 'Cheese'},
        {title: 'WEB601', notes: 'Cheese'},
        {title: 'WEB601', notes: 'Cheese'}
    ]
}

const selectedBookReducer = (selectedBook =null, action) => {
    if (action.type == 'BOOK_SELECTED') {
        return action.payload
    }
    return selectedBook
} 

export default combinereducers ({
    books: booksReducer,
    selectedBook: selectedBookReducer    
})
export const selecBook = (Book) => {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
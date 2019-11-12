import React, {Component} from 'react'
import { connect } from 'react-redux'
import selectBook from '../actions'

class BookList extends Component {
    renderList() {
        return this.props.book.map((book) => {
            return (
                <div className="item" key={book.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectedBook(book)}>
                            Details
                        </button>
                    </div>
            <div className="content">{book.title}</div>
                </div>
            );
        })
    }
    render() {
        console.log(this.props)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {books : state.books}
}

export default connect(mapStateToProps, {
    selectBook
})(BookList)
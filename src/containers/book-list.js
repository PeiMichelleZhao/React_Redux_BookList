import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => { this.props.selectBook(book);}}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
    <ul className="list-group col-sm-4">
    {this.renderList()}
    </ul>
    );
  }
}

//helper function
//connect between redux and component
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//call actionCreators
//pass action to reducer
//return props to component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//connect function
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

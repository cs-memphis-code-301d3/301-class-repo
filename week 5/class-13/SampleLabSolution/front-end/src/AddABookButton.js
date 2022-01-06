import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookFormModal from './BookFormModal';

class AddABookButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
    }
  }

  addABook = () => {
    // create
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    return(
      <>
        <Button onClick={this.addABook}>Add a Book</Button>
        <BookFormModal
          close={this.handleClose}
          updateBookArray={this.props.updateBookArray}
          show={this.state.show}
        />
      </>
    )
  }
}

export default AddABookButton;
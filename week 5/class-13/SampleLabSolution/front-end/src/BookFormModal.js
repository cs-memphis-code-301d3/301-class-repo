import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

const API = 'http://localhost:3001';

class BookFormModal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      description: '',
      status: 'LIFE-CHANGING',
      img: ''
    }
  }

  handleClose = () => {
    this.props.close();
  }
    
  createBook = () => {
    this.props.auth0.getIdTokenClaims()
    .then(async res => {
      const jwt = res.__raw;

      const config = {
        headers: {"Authorization" : `Bearer ${jwt}`},
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books/',
        data: {
          email: this.props.auth0.user.email,
          name: this.state.name,
          description: this.state.description,
          status: this.state.status,
          img: this.state.img,
        }
      }

      const bookResults = await axios(config);
      this.props.close();
      this.props.updateBookArray(bookResults.data);
    })
    .catch(err => console.error(err));
  }

  render() {
    return(
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book To Favorites</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Book Name</Form.Label>
            <Form.Control onChange={(e)=> this.setState({name:e.target.value})} type="text" placeholder="book name" />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Book description</Form.Label>
            <Form.Control onChange={(e)=> this.setState({description:e.target.value})}type="text" placeholder="book description" />
          </Form.Group>
          <Form.Group controlId="img">
            <Form.Label>Book Image URL</Form.Label>
            <Form.Control onChange={(e)=> this.setState({img:e.target.value})}type="text" placeholder="book image url" />
          </Form.Group>
          <Form.Group controlId="genre">
            <Form.Label>Status</Form.Label>
            <Form.Control defaultValue='' onChange={(e)=> this.setState({genre:e.target.value})} as="select">
              <option></option>
              <option value="LIFE-CHANGING">Life Changing</option>
              <option value="FAVORITE FIVE">Favorite Five</option>
              <option value="RECCOMENDED TO ME">Reccomended To Me</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.createBook}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default withAuth0(BookFormModal);

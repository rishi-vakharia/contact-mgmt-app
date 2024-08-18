import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ContactService from "../services/ContactService";

const NewContactForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      ContactService.fetchContactById(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setPhoneNo(response.data.phoneNo);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id) {
      ContactService.updateContact(id, { firstName, lastName, phoneNo }).then((response) => {
        console.log(response.data);
        setFirstName("");
        setLastName("");
        setPhoneNo("");
        navigate('/contact-list');
      }).catch((error) => {
        console.log(error);
      });
    }
    else {
      ContactService.addContact({ firstName, lastName, phoneNo }).then((response) => {
        console.log(response.data);
        setFirstName("");
        setLastName("");
        setPhoneNo("");
        navigate('/contact-list');
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  return (
    <Container>
      <Card className='col-md-6 offset-md-3 mt-4'>
        <h2 className='text-center mt-2'>{id ? 'Edit Contact' : 'Add Contact'}</h2>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
              >
                <Form.Control type="text" name="firstName" placeholder="John" value={firstName} onChange={e => setFirstName(e.target.value)} />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
              >
                <Form.Control type="text" name="lastName" placeholder="Doe" value={lastName} onChange={e => setLastName(e.target.value)} />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Phone Number"
              >
                <Form.Control type="text" name="phoneNo" placeholder="Phone No" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} />
              </FloatingLabel>
            </Form.Group>
            <Button type="submit">{id ? 'Edit' : 'Add'}</Button>
            <Link to='/contact-list' role='button' className='btn btn-secondary mx-3'>
              Cancel
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default NewContactForm
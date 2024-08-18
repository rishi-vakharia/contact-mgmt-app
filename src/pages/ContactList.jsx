import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ContactService from '../services/ContactService';

const ContactList = () => {

  /*
  const contacts = [
    { id: 1, firstName: 'John', lastName: 'Doe', phoneNo: '123-456-7890' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNo: '987-654-3210' },
    { id: 3, firstName: 'Michael', lastName: 'Johnson', phoneNo: '555-555-5555' },
    { id: 4, firstName: 'Emily', lastName: 'Davis', phoneNo: '111-222-3333' },
    { id: 5, firstName: 'David', lastName: 'Wilson', phoneNo: '444-444-4444' },
    { id: 6, firstName: 'Sarah', lastName: 'Anderson', phoneNo: '777-888-9999' },
    { id: 7, firstName: 'Matthew', lastName: 'Taylor', phoneNo: '666-666-6666' },
    { id: 8, firstName: 'Olivia', lastName: 'Brown', phoneNo: '999-999-9999' },
    { id: 9, firstName: 'Daniel', lastName: 'Miller', phoneNo: '222-333-4444' },
    { id: 10, firstName: 'Sophia', lastName: 'Wilson', phoneNo: '888-888-8888' }
  ];
  */

  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    ContactService.fetchContacts().then((response) => {
      setContacts(response.data);
    }).catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = (id) => {
    ContactService.deleteContact(id).then((response) => {
      console.log(response.data);
      fetchContacts();
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <Container>
      <h2 className='text-center my-4'>Contact List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Contact Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {
            contacts.map(contact => 
              <tr key = {contact.id}>
                <td className='align-middle'> {contact.id} </td>
                <td className='align-middle'> {contact.firstName} </td>
                <td className='align-middle'> {contact.lastName} </td>
                <td className='align-middle'> {contact.phoneNo} </td>
                <td>
                  <Link to={`/edit-contact/${contact.id}`} role='button' className='btn btn-info'>
                    edit
                  </Link>
                  <Button variant="danger" className='mx-4' onClick={() => deleteContact(contact.id)}>delete</Button>  
                </td>
              </tr>
            )
          }
        </tbody>
    </Table>

    <div className="d-flex justify-content-end">
      <Link to='/add-contact' role='button' className='btn btn-primary'>
        new contact
      </Link>
    </div>

    </Container>
  )
}

export default ContactList
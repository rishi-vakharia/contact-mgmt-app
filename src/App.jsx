import { Routes, Route } from 'react-router-dom';
import ContactList from './pages/ContactList';
import NewContactForm from './pages/NewContactForm';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<ContactList />} />
      <Route path='/contact-list' element={<ContactList />} />
      <Route path='/add-contact' element={<NewContactForm />} />
      <Route path='/edit-contact/:id' element={<NewContactForm />} />
    </Routes>
  );
}

export default App
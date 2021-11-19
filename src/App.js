// import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import Phonebook from './pages/Phonebook';
// import Section from './components/Section/Section';
// import FormAddContact from './components/FormAddContact/FormAddContact';
// import ContactsList from './components/ContactsList/ContactsList';
// import Filter from './components/Fliter/Filter';
// import HomePage from './pages/Home';
// import ContactsPage from './components/ContactsList/Contacts';
// import AddContact from './components/AddContact/AddContact';

export default function App() {
  return (
    <Container>
      <Phonebook />
      {/* <HomePage /> */}
    </Container>
  );
}

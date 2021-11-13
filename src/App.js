// import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
// import Section from './components/Section/Section';
// import FormAddContact from './components/FormAddContact/FormAddContact';
// import ContactsList from './components/ContactsList/ContactsList';
// import Filter from './components/Fliter/Filter';
// import HomePage from './pages/Home';
import ContactsPage from './pages/Contacts';
import AddContact from './pages/AddContact';

export default function App() {
  return (
    <Container>
      {/* <Section title="Phonebook">
        <FormAddContact />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section> */}
      {/* <HomePage /> */}
      <AddContact />
      <ContactsPage />
    </Container>
  );
}

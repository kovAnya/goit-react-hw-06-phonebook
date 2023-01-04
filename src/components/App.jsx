import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { RootEl } from './App.styled';

export const App = () => {
  return (
    <RootEl>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </RootEl>
  );
};

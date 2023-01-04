import { Form, FormLabel, FormBtn } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormSubmit = evt => {
    evt.preventDefault();
    const contactName = evt.currentTarget.elements.name.value;
    const contactPhone = evt.currentTarget.elements.number.value;

    if (searchForDublicate(contactName)) {
      evt.currentTarget.reset();
      return alert(`${contactName} is already in contacts.`);
    }

    dispatch(addContact(contactName, contactPhone));

    evt.currentTarget.reset();
  };

  const searchForDublicate = searchedName => {
    return contacts.some(contact => contact.name === searchedName);
  };

  return (
    <Form id={'form'} onSubmit={onFormSubmit}>
      <FormLabel htmlFor="name">Name: </FormLabel>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormLabel htmlFor="number">Number: </FormLabel>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

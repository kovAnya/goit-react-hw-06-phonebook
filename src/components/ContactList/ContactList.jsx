import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  return (
    <List>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map(contact => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              phone={contact.number}
            />
          );
        })}
    </List>
  );
};

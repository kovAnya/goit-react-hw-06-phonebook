import { Item, DeleteBtn } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, phone }) => {
  const dispatch = useDispatch();
  const onDelete = evt => {
    const nameToRemove = evt.currentTarget.dataset.name;
    dispatch(deleteContact(nameToRemove));
  };

  return (
    <Item>
      {name}: {phone}
      <DeleteBtn type="button" data-name={name} onClick={onDelete}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

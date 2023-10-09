import { useDispatch } from 'react-redux';
import { Item } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { deleteContactThunk } from 'redux/operations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <p>
        {contact.name}:<span>{contact.number}</span>
      </p>
      <button
        type="button"
        onClick={() => dispatch(deleteContactThunk(contact.id))}
      >
        Delete
      </button>
    </Item>
  );
};

ContactListItem.protoTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

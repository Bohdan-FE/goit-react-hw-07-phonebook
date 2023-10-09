import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getConstactsThunk } from 'redux/operations';
import { isLoading as loading, visibleItemsSelector } from 'redux/selectors';

export const ContactList = () => {
  const visibleItems = useSelector(visibleItemsSelector);
  const isLoading = useSelector(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConstactsThunk());
  }, [dispatch]);

  return (
    <List>
      {isLoading
        ? 'Loading...'
        : visibleItems.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
    </List>
  );
};

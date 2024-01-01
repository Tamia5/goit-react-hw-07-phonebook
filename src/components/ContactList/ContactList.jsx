import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { List, Item, Text, Btn, Spinner } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Spinner />}

      {!filteredContacts?.length && !error && !isLoading && (
        <p>No contacts found.</p>
      )}

      {error && <p>{error}</p>}
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <Text>
              {name}: {phone}
            </Text>
            <Btn type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Btn>
          </Item>
        ))}
      </List>
    </>
  );
};

import PropTypes from 'prop-types';
import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const visibleContacts = (contacts, filter) => {
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispath = useDispatch();
  const handleDeleteItems = id => {
    dispath(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {visibleContacts(contacts, filter).map(item => {
        return (
          <li key={item.id}>
            {item.name} {item.phone}{' '}
            <button
              className={css.button}
              type="button"
              onClick={() => handleDeleteItems(item.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.protoTypes = {
  contacts: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  filter: PropTypes.string.isRequired,
};

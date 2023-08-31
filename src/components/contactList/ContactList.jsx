import PropTypes from 'prop-types';
import css from './contactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/appReducer';

const visibleContacts = (contacts, filter) => {
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};

export const ContactList = () => {
  const contacts = useSelector(state => state.app.contacts);
  const filter = useSelector(state => state.app.filter);
  const dispath = useDispatch();
  const handleDeleteItems = id => {
    dispath(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {visibleContacts(contacts, filter).map(item => {
        return (
          <li key={item.id}>
            {item.name} {item.number}{' '}
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

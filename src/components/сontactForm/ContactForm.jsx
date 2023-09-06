import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispath = useDispatch();

  const handleInput = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const nameId = event => {
    event.preventDefault();
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      name, //: name
      number, //: number
    };
    dispath(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.container} onSubmit={nameId}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInput}
        />
      </label>{' '}
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInput}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

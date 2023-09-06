import css from './filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispath = useDispatch();
  const updateFilter = filter => {
    dispath(setFilter(filter));
  };
  return (
    <label className={css.filter}>
      Find contacts by name <br />
      <input
        className={css.input}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={event => {
          updateFilter(event.currentTarget.value);
        }}
      />
    </label>
  );
};

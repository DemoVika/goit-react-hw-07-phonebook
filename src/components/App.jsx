import css from './app.module.css';
import { ContactForm } from './сontactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

export const App = () => {
  return (
    <div className={css.div}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

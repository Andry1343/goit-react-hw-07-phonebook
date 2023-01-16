import { ContactForm } from '../components/form/Form.jsx';
import { Filter } from '../components/filter/Filter.jsx';
import { ContactList } from '../components/contactList/ContactList.jsx';
import style from './form/Form.module.css';
/* import { useSelector } from 'react-redux';
import { getStatusFilter } from './redux/selectors'; */

export const App = () => {
  /* const contacts = useSelector(getContacts); */

  return (
    <div className={style.form}>
      <div className={style.form_name_number_filter}>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <Filter />
        <h2>Contacs</h2>
      </div>
      <ContactList />
    </div>
    

   
  );
};

 

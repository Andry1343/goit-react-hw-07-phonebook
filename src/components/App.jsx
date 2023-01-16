import { ContactForm } from '../components/form/Form.jsx';
import { Filter } from '../components/filter/Filter.jsx';
import { ContactList } from '../components/contactList/ContactList.jsx';
import style from './form/Form.module.css';
/* import { useSelector } from 'react-redux';
import { getStatusFilter } from './redux/selectors'; */

import { tasksReducer } from './redux/contactsSlice'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
/* import { getIsLoading } from './redux/selectors.js';
import { getError } from './redux/selectors.js'; */

export const App = () => {
  /* const contacts = useSelector(getContacts); */
  const dispatch = useDispatch();

  /* const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError); */

  useEffect(() => {
    dispatch(tasksReducer());
  }, [dispatch]);

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

 

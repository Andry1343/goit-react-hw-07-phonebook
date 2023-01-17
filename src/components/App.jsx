import { ContactForm } from '../components/form/Form.jsx';
import { Filter } from '../components/filter/Filter.jsx';
import { ContactList } from '../components/contactList/ContactList.jsx';
import style from './form/Form.module.css';



import { fetchContacts } from './redux/operations.js';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

/* import { getTasks, getIsLoading,  getError} from './redux/selectors' */


export const App = () => {
  const dispatch = useDispatch();

  /* const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading); */
  
  useEffect(() => {
    dispatch(fetchContacts());
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

 

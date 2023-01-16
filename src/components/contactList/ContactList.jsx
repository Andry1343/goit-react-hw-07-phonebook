import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
/* import { getStatusFilter } from 'components/redux/selectors'; */
import { visibleContacts } from 'components/redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(visibleContacts);

 /*  const contacts = useSelector(getStatusFilter);
  const filter = useSelector(getStatusFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts(); */

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

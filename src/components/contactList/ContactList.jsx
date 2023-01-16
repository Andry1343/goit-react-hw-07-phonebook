import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { /* getContacts, */ getStatusFilter } from 'components/redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getStatusFilter);
  const filter = useSelector(getStatusFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

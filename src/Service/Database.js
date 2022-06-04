const PHONEBOOK = 'phonebook';

export const fetchPhonebook = () => {
  return JSON.parse(localStorage.getItem(PHONEBOOK));
};

export const updatePhonebook = contacts => {
  localStorage.setItem(PHONEBOOK, JSON.stringify(contacts));
};

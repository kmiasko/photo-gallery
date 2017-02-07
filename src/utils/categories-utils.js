import shortid from 'shortid';

export const checkDuplicate = (category, list) =>
  list.findIndex(cat => cat.category.toLowerCase() === category.toLowerCase()) > -1;

export const pushCategory = (category, list) => {
  const id = shortid.generate();
  return list.push({ id, category });
};

export const removeCategory = (id, list) => {
  const idx = list.findIndex(val => val.id === id);
  return list.remove(idx);
};


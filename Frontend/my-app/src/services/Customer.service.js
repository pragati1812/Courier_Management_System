import httpClient from '../customer-comman';

const getAll = () => {
  return httpClient.get('');
};

const create = (data) => {
  return httpClient.post('', data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
export default { getAll, create, get, update, remove };
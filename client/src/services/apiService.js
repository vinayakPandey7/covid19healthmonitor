import http from "../http-common";

const getAll = () => {
  return http.get("/data/find");
};

const getLatest = () => {
    return http.get("/data/latest-data");
};

const get = id => {
  return http.get(`/tutorials/${id}`);
};

// const createUser = data => {
//   console.log(data)
//   return http.post("/auth/signup", data);
// };

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

export default {
  getAll,
  get,
  // createUser,
  update,
  remove,
  removeAll,
  findByTitle,
  getLatest
};
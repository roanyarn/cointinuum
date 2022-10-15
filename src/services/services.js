import axiosInstance from './axiosInstance';

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axiosInstance.get(url).then(responseBody),
  post: (url, body) => axiosInstance.post(url, body).then(responseBody),
  put: (url, body) => axiosInstance.put(url, body).then(responseBody),
  delete: (url) => axiosInstance.delete(url).then(responseBody),
};

const Auth = {
  createUser: (body) => requests.post('auth/new', body),
  loginUser: (body) => requests.post('auth', body),
  renewToken: () => requests.get('auth/renew'),
};

const Blog = {
  getAllBlogs: () => requests.get('blogs'),
  createBlog: (body) => requests.post('blogs', body),
  updateBlog: (id, body) => requests.put(`blogs/${id}`, body),
  deleteBlog: (id) => requests.delete(`blogs/${id}`),
};

const Event = {
  getAllEvents: () => requests.get('events'),
  createEvent: (body) => requests.post('events', body),
  updateEvent: (id, body) => requests.put(`events/${id}`, body),
  deleteEvent: (id) => requests.delete(`events/${id}`),
};

const Faq = {
  getAllFaqs: () => requests.get('faqs'),
  createFaq: (body) => requests.post('faqs', body),
  updateFaq: (id, body) => requests.put(`faqs/${id}`, body),
  deleteFaq: (id) => requests.delete(`faqs/${id}`),
};

const Partner = {
  getAllPartners: () => requests.get('partners'),
  getPartnerById: (id) => requests.get(`partners/${id}`),
  createPartner: (body) => requests.post('partners', body),
  updatePartner: (id, body) => requests.put(`partners/${id}`, body),
  deletePartner: (id) => requests.delete(`partners/${id}`),
};

const Podcast = {
  getAllPodcasts: () => requests.get('podcast'),
  createPodcast: (body) => requests.post('podcast', body),
  updatePodcast: (id, body) => requests.put(`podcast/${id}`, body),
  deletePodcast: (id) => requests.delete(`podcast/${id}`),
};

const service = {
  Auth,
  Blog,
  Event,
  Faq,
  Partner,
  Podcast,
};

export default service;

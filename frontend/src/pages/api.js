import axios from 'axios';

const URL_BASE = 'http://localhost:3002';

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${URL_BASE}/event`, eventData);
    console.log(`${URL_BASE}/event`)
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /event post:', error);
    throw error;
  }
};

export const getEvents = async () => {
  try {
    const response = await axios.get(`${URL_BASE}/event`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /event get:', error);
    throw error;
  }
};

export const getEventById = async (id) => {
  try {
    const response = await axios.get(`${URL_BASE}/event/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /event/ con id get:', error);
    throw error;
  }
};

export const deleteEventById = async (id) => {
  try {
    const response = await axios.delete(`${URL_BASE}/event/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /event/ con id delete:', error);
    throw error;
  }
};


export const subscribeToEvent = async (mail, id) => {
  try {
    const response = await axios.post(`${URL_BASE}/event/suscribe`, {
      mail,
      id,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /event/suscribe:', error);
    throw error;
  }
};

export const myEvents = async (mail) => {
  try {
    const response = await axios.get(`${URL_BASE}/event/myEvents/${mail}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /event/myEvents:', error);
    throw error;
  }
};

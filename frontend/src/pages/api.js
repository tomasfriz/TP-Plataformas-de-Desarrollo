import axios from 'axios';

const URL_BASE = 'http://localhost:3000';


export const login = async (mail, clave) => {
  try {
    const response = await axios.post(`${URL_BASE}/user/login`, {
      mail,
      clave,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /user/login:', error);
    throw error;
  }
};

export const register = async (mail, clave, rol) => {
  try {
    const response = await axios.post(`${URL_BASE}/user/register`, {
      mail,
      clave,
      rol,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /user/register:', error);
    throw error;
  }
};

// Crear evento
export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${URL_BASE}/event`, eventData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /event post:', error);
    throw error;
  }
};

// Obtener eventos
export const getEvents = async () => {
  try {
    const response = await axios.get(`${URL_BASE}/event/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /event get:', error);
    throw error;
  }
};

// Obtener evento específico
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

export const putEventById = async (id, eventData) => {
  try {
    const response = await axios.put(`${URL_BASE}/event/${id}`, eventData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error /event/ con id put:', error);
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

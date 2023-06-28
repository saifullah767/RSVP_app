import axios from 'axios';


export function getEvents ()  {
    return axios.get('http://localhost:3000/events')
}

export function updateEvents (id, newData) {
    return axios.put(`http://localhost:3000/events/${id}`, newData);
};
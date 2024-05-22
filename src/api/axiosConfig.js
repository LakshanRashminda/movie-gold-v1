import axios from 'axios';

export default axios.create({
  baseURL:
    'https://4ca9-2402-4000-10c5-bf06-2906-87f2-275f-740.ngrok-free.app/',
  // baseURL: 'http://localhost:8090/',
  headers: { 'ngrok-skip-browser-warning': 'true' },
});

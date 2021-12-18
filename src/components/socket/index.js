import io from 'socket.io-client';

let socket = io('https://socialbackends.herokuapp.com/');

export default socket;

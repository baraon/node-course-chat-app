var socket = io();
socket.on('connect', function () {
  console.log('connected to server');
  socket.emit('createMessage', {
    from: 'baraon',
    to: 'morgan',
    text: 'this is test message',
    createdAt: 123
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New email: ', email);
});

socket.on('newMessage', function (message) {
  console.log('New Message: ', message);
});

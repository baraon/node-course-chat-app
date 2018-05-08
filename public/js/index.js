var socket = io();
socket.on('connect', function () {
  console.log('connected to server');
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  console.log('New Message: ', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from} ${formattedTime}: ${message.text}`);

  jQuery('#messages').append(li);

});

socket.on('newLocationMessage', function(location) {
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My current location</a>')
  var formattedTime = moment(location.createdAt).format('h:mm a');
  li.text(`${location.from} ${formattedTime}: `);
  a.attr('href', location.url);
  li.append(a);
  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  var messageTextbox = '[name=message]';
  socket.emit('createMessage', {
    from: 'User',
    text: jQuery(messageTextbox).val()
  }, function () {
    jQuery(messageTextbox).val('');
  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
  if(!navigator.geolocation) {
    return alert('Geolocation not supported by your browser');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function () {
    locationButton.removeAttr('disabled').text('Send location');
    alert('unable to fetch location');
  });
});

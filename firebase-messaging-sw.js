self.addEventListener('push', function (event) {
    var data = {};
    if (event.data) {
      data = event.data.json();
    }
    var title = data.notification.title;
    var message = data.notification.body;
    event.waitUntil(
      self.registration.showNotification(title, {
        'body': message
      })
    );
});
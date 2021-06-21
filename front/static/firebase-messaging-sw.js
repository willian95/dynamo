
importScripts(
  'https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyB4sjGvvzOKZFCKj1PCFm7jokM-9F1TIdE","authDomain":"dynamo-a5c2f.firebaseapp.com","projectId":"dynamo-a5c2f","storageBucket":"dynamo-a5c2f.appspot.com","messagingSenderId":"6652196473","appId":"1:6652196473:web:8369f6622467dba174c6a8","measurementId":"G-LWCG9V00HT"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

self.addEventListener('push', function (e) {
    data = e.data.json();

    var options = {
        body: data.notification.body,
        //icon: data.notification.icon,
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            //primaryKey: '2'
        },
    }
});

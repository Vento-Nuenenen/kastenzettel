const {remote} = require('electron');

let recipientSettings;
let messageSettings;
let title;
let content;

var admin = require("firebase-admin");

var serviceAccount = require("./pfadinue-firebase-adminsdk-fxb98-abc4376886");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pfadinue.firebaseio.com"
});

function buildMessage() {
  recipientSettings = document.getElementById("recipient-settings").value;
  messageSettings = document.getElementById("message-settings").value;

  if (recipientSettings == 'biber' || recipientSettings == 'any'){
    if (messageSettings == 'kasten'){
      title = 'Kastenzettel Biberstein';
      content = 'Der Kastenzettel der Familie Biberstein wurde aktualisiert.';
    }else if (messageSettings == 'homescouting'){
      title = 'Neue HomeScouting Challange';
      content = 'Es wurde eine neue HomeScouting Challenge veröffentlicht.';
    }else if (messageSettings == 'custom'){
      title = document.getElementById('title').value;
      content = document.getElementById('body').value;
    }

    sendMessage(recipientSettings, title, content);
  }

  if (recipientSettings == 'wolf' || recipientSettings == 'any'){
    if (messageSettings == 'kasten'){
      title = 'Kastenzettel Phönix';
      content = 'Der Kastenzettel der Meute Phönix wurde aktualisiert.';
    }else if (messageSettings == 'homescouting'){
      title = 'Neue HomeScouting Challange';
      content = 'Es wurde eine neue HomeScouting Challenge veröffentlicht.';
    }else if (messageSettings == 'custom'){
      title = document.getElementById('title').value;
      content = document.getElementById('body').value;
    }

    sendMessage(recipientSettings, title, content);
  }

  if (recipientSettings == 'aetna' || recipientSettings == 'any'){
    if (messageSettings == 'kasten'){
      title = 'Kastenzettel Aetna';
      content = 'Der Kastenzettel vom Stamm Aetna wurde aktualisiert.';
    }else if (messageSettings == 'homescouting'){
      title = 'Neue HomeScouting Challange';
      content = 'Es wurde eine neue HomeScouting Challenge veröffentlicht.';
    }else if (messageSettings == 'custom'){
      title = document.getElementById('title').value;
      content = document.getElementById('body').value;
    }

    sendMessage(recipientSettings, title, content);
  }

  if (recipientSettings == 'saturn' || recipientSettings == 'any'){
    if (messageSettings == 'kasten'){
      title = 'Kastenzettel Saturn';
      content = 'Der Kastenzettel vom Trupp Saturn wurde aktualisiert.';
    }else if (messageSettings == 'homescouting'){
      title = 'Neue HomeScouting Challange';
      content = 'Es wurde eine neue HomeScouting Challenge veröffentlicht.';
    }else if (messageSettings == 'custom'){
      title = document.getElementById('title').value;
      content = document.getElementById('body').value;
    }

    sendMessage(recipientSettings, title, content);
  }

  if (recipientSettings == 'pio' || recipientSettings == 'any'){
    if (messageSettings == 'kasten'){
      title = 'Kastenzettel Pios';
      content = 'Der Kastenzettel der Pios wurde aktualisiert.';
    }else if (messageSettings == 'homescouting'){
      title = 'Neue HomeScouting Challange';
      content = 'Es wurde eine neue HomeScouting Challenge veröffentlicht.';
    }else if (messageSettings == 'custom'){
      title = document.getElementById('title').value;
      content = document.getElementById('body').value;
    }

    sendMessage(recipientSettings, title, content);
  }

  if (recipientSettings == 'devel' || recipientSettings == 'any'){
    if (messageSettings == 'kasten'){
      title = '**** KASTENZETTEL TEST ****';
      content = '**** KASTENZETTEL TEST IHNHALT. ES FUNKTIONIERT ALLES! ****';
    }else if (messageSettings == 'homescouting'){
      title = '**** NEUE HOMESCOUTING CHALLANGE TEST ****';
      content = '**** ES WURDE EINE NEUE HOMESCOUTING CHALLANGE VERÖFFENTLICHT! ****';
    }else if (messageSettings == 'custom'){
      title = document.getElementById('title').value;
      content = document.getElementById('body').value;
    }

    sendMessage(recipientSettings, title, content);
  }
}

function sendMessage(topic, title, body){
  var message = {
    notification: {
      title: title,
      body: body
    },
    topic: topic
  };

// Send a message to devices subscribed to the provided topic.
  admin.messaging().send(message)
      .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);

        var response = document.getElementById('response');
        response.innerText = '<p>Push-Nachricht wurde erfolgreich gesendet!</p>';
      })
      .catch((error) => {
        console.log('Error sending message:', error);

        var response = document.getElementById('response');
        response.innerHTML = '<p>Fehler: Push-nachricht konnte nicht gesendet werden!</p>';
      });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('send_button').addEventListener('click', buildMessage);
});

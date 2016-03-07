chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
  chrome.tts.speak('You fucking what mate. I bash your focking head in I swear on me mum.', {'lang': 'en-GB', 'gender': 'male'});
});

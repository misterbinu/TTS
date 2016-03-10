chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 450,
      'height': 350
    },
    'resizable': false
  });
});

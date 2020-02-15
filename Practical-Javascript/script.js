function logten() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

runWithDebugger(function logten() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
});


setTimeout(function() {
  console.log('Wake up Gordon!');
}, 5000)

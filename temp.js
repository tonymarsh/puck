// our historical data
var history = new Int16Array(100);

// Get Data and store it in RAM
function logData() {
  var data = E.getTemperature();
  for (var i=0;i<history.length-1;i++)
    history[i] = history[i+1];
  history[history.length-1] = data*100;
}

// Start recording
setInterval(logData, 1000);

function getCurrentProgress() {
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return (
    (((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) /
    365
  ).toFixed(6);
}

function updateUI() {
  const percent = getCurrentProgress();
  const ctr = percent / 10;
  var progressBar = "";
  for (var i = 0; i < ctr; i++) {
    progressBar += "▓";
  }
  for (var j = ctr; j < 10; j++) {
    progressBar += "░";
  }
  var progressBarElement = document.getElementById('progress-bar');
  var progressTextElement = document.getElementById('progress-text');
  progressBarElement.innerHTML = progressBar;
  progressTextElement.innerHTML = percent + "%";
}
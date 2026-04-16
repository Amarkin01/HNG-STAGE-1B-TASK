const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  const now = Date.now();
  if (timeElement) {
    timeElement.textContent = now.toString();
  }
}

updateTime();
setInterval(updateTime, 500);

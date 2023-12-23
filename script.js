function nextPage() {
  window.location.href = 'yes.html';
}

function moveButton() {
  const randomWidthNoButton =
    Math.random() *
    (window.innerWidth - document.getElementById('noButton').offsetWidth);
  const randomHeightNoButton =
    Math.random() *
    (window.innerHeight - document.getElementById('noButton').offsetHeight);
  document.getElementById('noButton').style.left = `${randomWidthNoButton}px`;
  document.getElementById('noButton').style.top = `${randomHeightNoButton}px`;
}

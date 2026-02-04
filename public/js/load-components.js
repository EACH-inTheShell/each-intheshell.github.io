document.addEventListener('DOMContentLoaded', function() {
  fetch('/public/components/header.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Erro ao carregar header:', error));
});

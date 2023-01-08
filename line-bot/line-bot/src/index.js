function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId,
    })
    .then(() => {
      alert('LIFF init success!');
    })
    .catch((err) => {
      alert(`error: ${JSON.stringify(err)}`);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  fetch(`/send-id`)
    .then((reqResponse) => reqResponse.json())
    .then((jsonResponse) => {
      let myLiffId = jsonResponse.id;
      initializeLiff(myLiffId);
    })
    .catch((err) => {
      alert(`error: ${JSON.stringify(err)}`);
    });
});
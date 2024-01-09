var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // Use the console to examine the response
      for (var i = 0; i < (data).length; i++){
        console.log(data[i].login);
        console.log(data[i].html_url);
        var login = document.createElement ('h3');
        var link = document.createElement ('a');


        login.textContent = data[i].login;
        link.textContent = data[i].html_url;
        link.setAttribute('href', data[i].html_url);

  


        userContainer.append(login);
        userContainer.append(link);


      }
      // TODO: Loop through the data and generate your HTML
    });
}
fetchButton.addEventListener('click', getApi);


document.addEventListener('DOMContentLoaded', function () {

    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const userName = document.getElementById('userName');
    const repos = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');


    fetch('https://api.github.com/users/kellsonHolanda')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            userName.innerText = json.login;
            repos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })

})
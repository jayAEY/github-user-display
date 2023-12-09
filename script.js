let userSearch = "github";
let userInfo = document.querySelector("#user-info");
let userError = document.querySelector("#user-error");

let searchInput = document.querySelector("#search-input");
let searchButton = document.querySelector("#search-button");

let avatar = document.querySelector("#avatar");
let login = document.querySelector("#login");
let username = document.querySelector("#name");
let userLink = document.querySelector("#user-link");
let userUrl = document.querySelector("#user-url");

let joinDate = document.querySelector("#joined");
let bio = document.querySelector("#bio");

let followers = document.querySelector("#follower-count");
let followersLink = document.querySelector("#followers-link");
let following = document.querySelector("#following-count");
let followingLink = document.querySelector("#following-link");

let repoCount = document.querySelector("#repo-count");
let repoLink = document.querySelector("#repo-link");

const fetchData = async (user) => {
  try {
    const data = await fetch(`https://api.github.com/users/${user}`);
    let result = await data.json();
    if (result.message == "Not Found") {
      userInfo.style.display = "none";
      userError.style.display = "flex";
    }
    let date = new Date(result.created_at).toDateString().slice(3);
    avatar.src = result.avatar_url;
    login.innerText = result.login;
    username.innerText = result.name;
    userLink.href = result.html_url;
    userUrl.innerText = result.html_url;
    joinDate.innerText = date;
    bio.innerText = result.bio ? result.bio : "--";
    followers.innerText = result.followers;
    followersLink.href = result.followers_url;
    following.innerText = result.following;
    followingLink.href = result.following_url;
    repoCount.innerText = result.public_repos;
    repoLink.href = result.repos_url;
  } catch (err) {
    console.log({ error: err });
  }
};

function updateSearch(search) {
  userInfo.style.display = "flex";
  userError.style.display = "none";
  userSearch = search;
  fetchData(userSearch);
}

searchButton.addEventListener("click", () => updateSearch(searchInput.value));
searchInput.addEventListener(
  "keypress",
  (e) => e.key === "Enter" && updateSearch(searchInput.value)
);

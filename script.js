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

let followers = document.querySelector("#follower-count");
let followersLink = document.querySelector("#followers-link");
let following = document.querySelector("#following-count");
let followingLink = document.querySelector("#following-link");

let repoCount = document.querySelector("#repo-count");
let repoLink = document.querySelector("#repo-link");

let test = {
  avatar_url: "https://avatars.githubusercontent.com/u/106685702?v=4",
  login: "github",
  name: "github",
  html_url: "jhouh",
  html_url: "ohiuh",
  created_at: "yesterday",
  followers: "ouygouyg",
  followers_url: "ktfu",
  following: "uigyug",
  following_url: "hoh",
  public_repos: "ljn",
};

const fetchData = async (user) => {
  try {
    const data = await fetch(`https://api.github.com/users/${user}`);
    let result = await data.json();
    // let result = test;
    avatar.src = result.avatar_url;
    login.innerText = result.login;
    username.innerText = result.name;
    userLink.href = result.html_url;
    userUrl.innerText = result.html_url;
    joinDate.innerText = result.created_at;
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

// fetchData(userSearch);

function updateSearch(search) {
  if (!search) {
    userInfo.style.display = "none";
    userError.style.display = "flex";
  } else {
    userInfo.style.display = "flex";
    userError.style.display = "none";
    userSearch = search;
    fetchData(userSearch);
  }
}

searchButton.addEventListener("click", () => updateSearch(searchInput.value));

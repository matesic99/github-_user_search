const input = document.getElementById("input");
const btn = document.getElementById("btn");
const image = document.getElementById("profile_img")
const user = document.getElementById("name");
const git_link = document.getElementById("link")
const joined = document.getElementById("joined")
const gitBio = document.getElementById("bio");
const repo = document.getElementById("repos");
const follower = document.getElementById("followers");
const followings = document.getElementById("following");
const locations = document.getElementById("location");
const twit = document.getElementById("twitter");
const websites = document.getElementById("website");
const companies = document.getElementById("company");

async function searchUser() {
  const url =`https://api.github.com/users/${input.value}`;
  const response = await fetch(url);
  const data = await response.json();
  const dateData = new Date(data.created_at).toUTCString();
  
  image.src = data.avatar_url
  user.textContent = data.name ? data.name : "No Name";

  joined.textContent = `Joined ${dateData}`;
  repo.textContent = data.public_repos;
  follower.textContent = data.followers;
  followings.textContent = data.following;
  git_link.innerHTML = `@${data.login}`

  locations.innerHTML = data.location ? data.location : "No Location";
  twit.innerHTML = data.twitter_username ? data.twitter_username : "No Twitter";
  websites.innerHTML = data.blog ? data.blog : "No Website";
  companies.innerHTML = data.company ? data.company : "No Company";
  gitBio.innerHTML = data.bio ? data.bio : "This profile has no bio...";
};

btn.addEventListener("click", searchUser);


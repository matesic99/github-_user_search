const input = document.getElementById("input");
const btn = document.getElementById("btn");

const user = document.getElementById("name");
const git_link = document.getElementById("link")
const joined = document.getElementById("joined")
const repo = document.getElementById("repos");
const follower = document.getElementById("followers");
const followings = document.getElementById("following");
const locations = document.getElementById("location");
const twit = document.getElementById("twiter");
const websites = document.getElementById("website");
const companies = document.getElementById("company");
const gitBio = document.getElementById("bio");


btn.addEventListener("click", function () {
    const url = (`https://api.github.com/users/${input.value}`);
    async function getUrl() {
      const response = await fetch(url);
      const data = await response.json();
      const dateData = data.created_at.slice(0, data.created_at.length - 10);

      user.innerHTML = data.name;
      login.innerHTML = `@${data.login}`;
      joined.innerHTML = `Joined ${dateData}`;
      repo.innerHTML = data.public_repos;
      follower.innerHTML = data.followers;
      followings.innerHTML = data.following;
      locations.innerHTML =
        data.location === "" || data.location === null
          ? "No Location"
          : data.location;
      twit.innerHTML =
        data.twitter_username === "" || data.twitter_username === null
          ? "No Twitter"
          : data.twitter_username;
      websites.innerHTML =
        data.blog === "" || data.blog === null ? "No Website" : data.blog;
      companies.innerHTML =
        data.company === "" || data.company === null
          ? "No Company"
          : data.company;
      gitBio.innerHTML =
        data.bio === "" || data.bio === null
          ? "This profile has no bio..."
          : data.bio;
    }
    getUrl();
    input.value = "";
  });
  
const saveData = ({ data }) => {
  console.log(`here`, data.user);
  const profileImages = [...document.images]; //fetch all the images currently on the document
  const asideBioImage = (profileImages[3].src = `${data.user.avatarUrl}`);
  const statusNode = document.querySelector(".float-stat");
  const statusText = document.querySelector(".status-text");
  const statusImage = document.createElement("div");
  statusImage.innerHTML = `<g-emoji class="g-emoji" alias="earth_americas" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f30e.png">🌎</g-emoji>`;
  statusNode.insertBefore(statusImage, statusText);
  statusText.innerHTML = data.user.status.message
  const bioName = (document.querySelector(".name").children[0].innerHTML =
    data.user.name);
  const bioUsername = (document.querySelector(".name").children[1].innerHTML =
    data.user.login);
  const bioText = (document.querySelector(".bio-text").innerHTML =
    data.user.bio);
  const contact = document.querySelector(".email");
  const location = (contact.children[0].children[1].innerHTML =
    data.user.location);
  const emailAddress = (contact.children[1].children[1].innerHTML =
    data.user.email);
  const twitterHandle = (contact.children[2].children[1].innerHTML = `@${data.user.twitterUsername}`);
  const followingSection = document.querySelector(".following");
  const followers = (followingSection.children[0].children[1].innerHTML =
    data.user.followers.totalCount);
  const following = (followingSection.children[1].children[0].innerHTML =
    data.user.following.totalCount);
  const starred = (followingSection.children[2].children[1].innerHTML =
    data.user.starredRepositories.totalCount);
};

const saveData = ({ data }) => {
  console.log(`here`, data.user);

  const profileImages = [...document.images]; //fetch all the images currently on the document
  
  //   for the navigation
  const navBioImage = (profileImages[2].src = `${data.user.avatarUrl}`);
  const navNode = (document.getElementById("img").children[1].innerHTML =
    data.user.login);

  //   for the aside bio
  const asideBioImage = (profileImages[3].src = `${data.user.avatarUrl}`);
  const statusNode = document.querySelector(".float-stat");
  const statusText = document.querySelector(".status-text");
  const statusImage = document.createElement("div");
  statusImage.innerHTML = `<g-emoji class="g-emoji" alias="earth_americas" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f30e.png">🌎</g-emoji>`;
  statusNode.insertBefore(statusImage, statusText);
  statusText.innerHTML = data.user.status.message;
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



  // repository data
  const repos = document.querySelector(".list-of-repos");
  data.user.repositories.nodes.forEach((element) => {
    let createdDay = new Date(element.updatedAt)
    let currentDay = new Date()
    let diff =
      Math.floor((currentDay.getTime() - createdDay.getTime()) / (1000 * 3600 * 24));
    repos.innerHTML += `
    <div class="single-repo">
  <div class="repo-details">
    <div class="repo-title">
      <h2>
        <a href="#"> ${element.name} </a>
      </h2>
      ${element.isPrivate ? "<span> Private </span>" : ""}
      ${
        element.parent
          ? `<p><small>Forked from ${element.parent.nameWithOwner}</small></p>`
          : ""
      }
      ${element.description ? `<p>${element.description}</p>` : ""}
    </div>
    <div>
    <span class="language">
            ${
              element.languages.nodes.length != 0
                ? `
                <span>
                ${
                  element.languages.nodes[0].name == "HTML"
                    ? `
                <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          fill='#e34c26'
                   
        >
          <title>Ellipse</title>
          <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
        </svg>
                `
                    : ""
                }
                ${
                  element.languages.nodes[0].name == "CSS"
                    ? `
                <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          fill='#563d7c'
                   
        >
          <title>Ellipse</title>
          <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
        </svg>
                `
                    : ""
                }
                ${
                  element.languages.nodes[0].name == "SCSS"
                    ? `
                <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          fill='#c6538c'
                   
        >
          <title>Ellipse</title>
          <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
        </svg>
                `
                    : ""
                }
                ${
                  element.languages.nodes[0].name == "Dart"
                    ? `
                <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          fill='#00B4AB'
                   
        >
          <title>Ellipse</title>
          <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
        </svg>
                `
                    : ""
                }
                ${
                  element.languages.nodes[0].name == "PHP"
                    ? `
                <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          fill='#e34c26'
                   
        >
          <title>Ellipse</title>
          <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
        </svg>
                `
                    : ""
                }
                ${
                  element.languages.nodes[0].name == "JavaScript"
                    ? `
                <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          fill='#f1e05a'
                   
        >
          <title>Ellipse</title>
          <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
        </svg>
                `
                    : ""
                }
                ${
                  element.languages.nodes[0].name == "Vue"
                    ? `
                <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          fill='#2c3e50'
                   
        >
          <title>Ellipse</title>
          <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
        </svg>
                `
                    : ""
                }
        ${element.languages.nodes[0].name} </span>
                `
                : ""
            }
        ${
          element.parent
            ? `<a href="#">
        <svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
        <span>${element.parent.forkCount}</span>        
        </a>`
            : ""
        }
        ${
          element.licenseInfo
            ? `<span class="license">
            <svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>
            <span>${element.licenseInfo.name}</span>
            </span>`
            : ""
        }
      <span class="timeframe">Updated ${
        console.log(diff),
        diff >
        moment(element.updatedAt.substring(0, 7), "YYYY-MM").daysInMonth()
          ? `on ${moment(element.updatedAt).format("D MMM")}`
          : `${moment(element.updatedAt).toNow(true)} ago`
      }</span>
    </div>
  </div>
  <div class="repo-starred">
    <button class="star">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Star</title>
        <path
          d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
      <span>Star</span>
    </button>
  </div>
</div>
    `;
  });
};

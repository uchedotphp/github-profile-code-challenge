const graphQl = {
  // development_env: window.location.protocol,

  queries() {
    const username = "uchedotphp";
    const gitHubGraphQLAPI = (username) =>
      `
      {
  user(login: "${username}") {
    name
    login
    avatarUrl
    bio
    company
    followers {
      totalCount
    }
    following {
      totalCount
    }
    location
    organizations(last: 2) {
      nodes {
        name
        avatarUrl
      }
    }
    projects {
      totalCount
    }
    twitterUsername
    websiteUrl
    status {
      emoji
      emojiHTML
      message
    }
    starredRepositories {
      totalCount
    }
    repositories(last: 20, orderBy: {field: UPDATED_AT, direction: ASC}) {
      totalCount
      nodes {
        description
        url
        isPrivate
        languages(last: 1) {
          nodes {
            name
          }
        }
        packages {
          totalCount
        }
        updatedAt
        stargazerCount
        parent {
          nameWithOwner
          forkCount
        }
        name
        licenseInfo {
          name
        }
        forkCount
      }
    }
    email
  }
}


`;

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${github_secret}`, //replace the variable github_secret with your git hub token
      },
      body: JSON.stringify({ query: gitHubGraphQLAPI(username) }),
    };

    try {
      fetch(`https://api.github.com/graphql`, config)
        .then((res) => res.json())
        .then(saveData);
    } catch (error) {
      console.error(error);
    }
  },
};

graphQl.queries()

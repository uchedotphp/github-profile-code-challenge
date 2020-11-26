const graphQl = {
  queries() {
    const username = "uchedotphp";
    const gitHubGraphQLAPI = (username) => 
    `{
  user(login: "${username}") {
    repositories(last: 30) {
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
      }
    }
    avatarUrl
    bio
    company
    email
    followers {
      totalCount
    }
    following {
      totalCount
    }
    location
    name
    login
    packages {
      totalCount
    }
    projects {
      totalCount
    }
    starredRepositories {
      totalCount
    }
    status {
      message
      emojiHTML
    }
    twitterUsername
    websiteUrl
  }
}`;

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer 9afdfce3e7cc8da17194fa975e60d5bc5fa83359`,
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

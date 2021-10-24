const usersSocial = {
  github: "devluisedu",
  youtube: "",
  linkedin: "in/",
  instagram: "luis.esc26",
  twitter: ""
}

function changeSocialUsernames() {
  for (const li of socialUsernames.children) {
    const socialLink = li.getAttribute("class");
    // const changedSocialLink = `https://www.${socialLink}.com/${usersSocial[socialLink]}`;
    // li.children[0].href = changedSocialLink;
    li.children[0].href = `https://www.${socialLink}.com/${usersSocial[socialLink]}`;
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${usersSocial.github}`;

  fetch(url)
    .then(response => response.json())
    .then(dataInJson => {
      const { name, login, avatar_url, bio, html_url } = dataInJson;
      userName.innerText = name;
      userBio.innerText = bio;
      userLogin.innerText = login;
      avatarImage.src = avatar_url;
      userLink.href = html_url;
    });
}

changeSocialUsernames();
getGithubProfileInfos();
const links = {
  github: 'fadeldamen',
  youtube: 'fadeldamen',
  facebook: 'fadel.damen',
  instagram: 'fadel_damen',
  twitter: 'fadeldamen'
}

function changeSocialMedia() {
  // em lugar de usar document.elementByID podemos aceder diretamente o ID.
  userName.textContent = 'Fadel D Schreiner'
  for (let li of socialMedias.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMedia()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(resposta => resposta.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
    })
}

getGithubProfileInfos()

// arrow functions
// em vez de usar function <nome> criamos uma funcao sem nome e somente passando parametros
// argumentos => {codigo}

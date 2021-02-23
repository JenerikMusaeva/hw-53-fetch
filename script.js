const userUrl = 'https://jsonplaceholder.typicode.com/users'
const contactList = document.querySelector('#contact-list')

function renderUsers(list) {
  list.forEach(item => {
    let user = document.createElement('tr')
    user.innerHTML = `
      <td>${item.name}</td>
      <td>${item.username}</td>
      <td>${item.phone}</td>
    `
    contactList.append(user)
  })
}

async function getUsers() {
  let response = await fetch(userUrl)
  let users = await response.json()
  return users
}

getUsers().then((data) => {
  renderUsers(data)
})
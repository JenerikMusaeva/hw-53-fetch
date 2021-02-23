const contactList = document.querySelector('#contact-list')

async function getUsers() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let users = await response.json()
  return users
}

async function renderUsers() {
  let users = await getUsers()
  users.forEach(item => {
    let user = document.createElement('tr')
    user.innerHTML = `
      <td>${item.name}</td>
      <td>${item.username}</td>
      <td>${item.phone}</td>
      <td>${item.email}</td>
    `
    contactList.append(user)
  })
}

renderUsers()
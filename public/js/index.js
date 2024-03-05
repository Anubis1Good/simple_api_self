fetch('http://localhost:3000/users')
.then(res => res.json())
.then(json => {
    let inner = ''
    for (let user of json){
        inner += `<li>${user.name}</li>`
    }
    document.querySelector('.users').innerHTML = inner
})
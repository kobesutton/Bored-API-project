const somethingToDo = document.getElementById('somethingToDo')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    //FETCH API
    fetch('http://www.boredapi.com/api/activity/')
    .then( (res) => {
        return res.json()
    })
    .then((data) => {
        document.getElementById('somethingToDo').innerHTML = `
        <p class = "somethingToDo">What To Do: <span class = "fw-bold">${data.activity}</span>
        `
    })
})
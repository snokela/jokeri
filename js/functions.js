const list = document.querySelector('table')
const raffle = document.querySelector('p')
const button = document.querySelector('button')
let count_rows = 0

button.addEventListener('click',() => {
    const tr = list.insertRow()
    for (let i= 0; i<7; i++) {
        const td = tr.insertCell(i)
        td.innerHTML = Math.floor(Math.random() * 10)
    }
    count_rows += 1
    raffle.innerHTML = "Valmiita rivejä " + count_rows
})




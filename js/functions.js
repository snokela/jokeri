const list = document.querySelector('table')
const raffle = document.querySelector('p')
const button = document.querySelector('button')

button.addEventListener('click',() => {
    const tr = list.insertRow()
    for (let i= 0; i<7; i++) {
        const td = tr.insertCell(i)
        td.innerHTML = Math.floor(Math.random() * 10)
    }
})


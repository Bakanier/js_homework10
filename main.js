let h3 = document.querySelectorAll('h3')

h3.forEach(function(element){
    element.textContent = '!!!'
    element.style.color = 'green'
})

for (i = 1; i <= 30; i++) {
    let sheep = document.createElement('li')
    sheep.textContent = 'овечка ' + i
    document.body.appendChild(sheep)
}

let spans = document.getElementsByTagName('span')

for (let i = 0; i < spans.length; i++) {
    spans[i].classList.add('active')
}

let strong = document.querySelectorAll('strong')
strong.forEach(strong => strong.style.color = 'green')

let em = document.querySelectorAll('em')
em.forEach(em => em.classList.add('selected'))

let row = document.querySelector('.row')
let mark = row.querySelectorAll('mark')
mark.forEach(mark => mark.classList.add('selected'))

let link = document.querySelectorAll('a')
link.forEach(link => link.style.textDecoration = 'none')

let strongToggle = document.querySelectorAll('strong.some')

strongToggle.forEach(strongToggle => strongToggle.classList.toggle('some'))

let divRow = document.querySelectorAll('.row')
if (divRow.length >= 2) {
    divRow[1].classList.remove('row')
}

let secondLink = document.querySelectorAll("a")[1]

let colorValue = getComputedStyle(secondLink).color
console.log('Цвет второй ссылки:', colorValue) 

let third = document.querySelectorAll('.row')
if (third.length >= 3) {
    let thirdRowElement = third[2]
  
    thirdRowElement.classList.add('third')
}

let pink = document.querySelector('.row-inner')
pink.style.color = 'pink'

let input = document.createElement('input')
input.type = 'text'
input.classList.add('input')
input.style.backgroundColor = 'yellow'
input.placeholder = 'bruh'

let rowInput = document.querySelector('.row-input')
rowInput.appendChild(input)

let outer = document.querySelector('.row-outer')
outer.style.fontSize = '20px'

let last = document.querySelector('.last')
last.textContent = 'Last but not least'
last.style.fontWeight = 'bold'
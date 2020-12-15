let ship1 = document.querySelector('#jcr');
let ship2 = document.querySelector('#es')
let ship3 = document.querySelector('#jc')
let ship4 = document.querySelector('#dis')
let jcr = document.querySelector('.jcr-info');
let es = document.querySelector('.es-info');
let jc = document.querySelector('.jc-info');
let dis = document.querySelector('.dis-info');


ship1.addEventListener('mouseenter', () => {
    console.log("Rollovers")
    jcr.classList.remove('hidden')

})


ship2.addEventListener('mouseenter', () => {
    console.log("Rollovers")
    es.classList.remove('hidden')

})

ship3.addEventListener('mouseenter', () => {
    console.log("Rollovers")
    jc.classList.remove('hidden')

})

ship4.addEventListener('mouseenter', () => {
    console.log("Rollovers")
    dis.classList.remove('hidden')

})
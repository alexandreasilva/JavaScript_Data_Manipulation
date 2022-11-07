// import months from './months.js'
import smartphones from './smartphones.ts'

const filteredSmartphones = smartphones.filter((smartphones) => {
    return smartphones.ram === 12
})

console.log(filteredSmartphones)

let toPrint = ''

filteredSmartphones.forEach(ram => {
    toPrint += ram.ram + ', '
});

let rans = [12, 6, 6, 12]

let sumSmartphoneModelo = filteredSmartphones.reduce((prev, next) => {
    return { modelo: prev.modelo + next.modelo }
})

let bateria = [5000, 4323, 6000, 5160]

let dobro = bateria.map((bateria => {
    return bateria * 2
}))

document.getElementById('main').innerHTML =
    toPrint + '<br> Soma total das memorias ram: '
    + sumSmartphoneModelo.bateria + '<br> capacidade de todas as baterias: '
    + dobro + ' '

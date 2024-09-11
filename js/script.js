// Guardar un valor primitivo
window.sessionStorage.setItem('nombre', 'Fabio')
window.sessionStorage.setItem('apellido', 'Argañaraz')

// Recuperar el valor
const nombre = window.sessionStorage.getItem('nombre')
const apellido = window.sessionStorage.getItem('apellido')
console.log({ nombre })
console.log({ apellido })

// Eliminar un item del storage
// window.sessionStorage.removeItem('apellido')

// Variar el storage
// window.sessionStorage.clear()

// Guardar un objeto
const persona = {
  nombre: 'Fabio',
  apellido: 'Argañaraz',
  edad: 30
}

window.sessionStorage.setItem('persona', JSON.stringify(persona))

// Recuperar un objeto
const personaAlmacenada = JSON.parse(window.sessionStorage.getItem('persona'))
console.log({ personaAlmacenada })

const { nombre: name, apellido: lastName, edad: age } = personaAlmacenada
console.log({ name, lastName, age })
/* const { nombre, apellido, edad } = personaAlmacenada
console.log({ nombre, apellido, edad }) */

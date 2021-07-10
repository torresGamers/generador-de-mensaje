const local ={
    nombre:'julio',
    apellido:'torres'
}
// localStorage.setItem('datos',local.nombre);
// console.log(localStorage.getItem('datos'))
localStorage.setItem('datos',JSON.stringify(local))
// localStorage.removeItem('datos')

let texto = document.createElement('p');
// texto.innerHTML=localStorage.getItem('datos',local.nombre);
let x =JSON.parse(localStorage.getItem('datos'));
let titulo =document.createElement('h1');
titulo.append(x.nombre);
texto.append(titulo);
document.body.appendChild(texto)
console.dir(document.title ='myPage');
const btn = document.querySelector('.btn');
let text = 0;
// let contenido = []
// let text2 = 0;
let contenido = JSON.parse(localStorage.getItem('data'))|| [];
btn.addEventListener('click',(d)=>{
    d.preventDefault()
    let comentario = document.getElementsByName('comentario')[0].value;
    let url = document.getElementsByName('url')[0].value;
    // text =comentario.value;
    console.log(comentario)
    // text2= url.value;
    console.log(url);
    contenido.push({'comentario':comentario, 'url':url});
    localStorage.setItem('data',JSON.stringify(contenido))
    location.reload()
})
if(localStorage.getItem('data')){
    console.log( `si existe`);
    let data = JSON.parse(localStorage.getItem('data'))
    data.forEach(d=>{
        let div = document.createElement('div');
        div.className='nuevoDiv';

        let p = document.createElement('p');
        p.className='nuevoP';     
        
        let img = document.createElement('img');
        img.className='nuevoimg';
        img.setAttribute('src',d.url)      
       
        let texto = document.createTextNode(d.comentario);
        document.querySelector('.contenedor').appendChild(div).appendChild(p).appendChild(texto);
        document.querySelector('.contenedor').appendChild(div).appendChild(img);
    })

}else{
    console.log('no existe')
}

let numero ={
    movistar:901810154,
    // generador:`https://.api.whatsapp.com/send?phone=0&text=`
}
// const enviar = document.querySelector('.enviar');
function datos(){

let num = 0;
 let texto = document.querySelector('.texto');
texto.addEventListener('keyup',(d)=>{
    d.preventDefault()
   num = texto.value;
    console.log(num);
    document.querySelector('.enlace').textContent =  `https://.api.whatsapp.com/send?phone=${numero.movistar}&text=${num}`
          return num    
}) 
 console.log('hola mundo'+num)
let enviar = document.querySelector('.enviar');
enviar.addEventListener('click',(e)=>{
    console.log(e.target)
    let enlace =document.querySelector('.enlace');
    // let url = '';
    // url=enlace.value;
    enlace.select();
    document.execCommand('copy');
    alert('copy')
})

}
datos()
   







console.dir(document.title='Practica de localStorage');
const btn = document.querySelector('button');
let contenedor =JSON.parse(localStorage.getItem('data')) || [];

btn.addEventListener('click',(d)=>{
   d.preventDefault();   
    let comentario = document.getElementsByName('comentario')[0].value;
        console.log(comentario);
   let url = document.getElementsByName('url')[0].value; 
//    let peli = document.getElementsByName('pelicula')[0].value;
   console.log(url);
   contenedor.push({'comentario':comentario,'url':url})
   localStorage.setItem('data',JSON.stringify(contenedor));   
   location.reload()
})

if(localStorage.getItem('data')){
    console.log('si tiene contenido')
    const data =JSON.parse(localStorage.getItem('data'));
    data.forEach((d)=>{
        let div = document.createElement('div');
        div.className = 'nuevoDiv';

        let imagen = document.createElement('img');
        imagen.className = 'imagen';
        imagen.setAttribute('src',d.url);

        // let video = document.createElement('video');
        // // video.className = 'video';
        // video.setAttribute('src',d.peli);

        let p = document.createElement('p');
            p.classNama= 'texto';
        
        let texto =document.createTextNode(d.comentario);

        document.querySelector('.container_archivo').appendChild(div).appendChild(imagen);
        // document.querySelector('.container_archivo').appendChild(div).appendChild(video);
        document.querySelector('.container_archivo').appendChild(div).appendChild(p).appendChild(texto)
    })
}else{
    console.log('sin contenido')
}
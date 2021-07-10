const btn = document.querySelector('button');

btn.addEventListener('click',(d)=>{
    d.preventDefault()
    let peli = document.getElementsByName('pelicula')[0].value;
    console.log(peli);
    let div = document.createElement('div');
    let video = document.createElement('video');
    video.setAttribute('src',d.peli);
    div.append(video)
    
    let contenedor = document.querySelector('.container_archivo');
    contenedor.appendChild(div)

})
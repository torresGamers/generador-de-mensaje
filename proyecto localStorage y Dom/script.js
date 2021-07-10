 const btn = document.querySelector('.btn') ;
 const animals = JSON.parse(localStorage.getItem('data')) || [] ;
btn.addEventListener('click',()=>{   
    let url = document.getElementsByName('url')[0].value;
    let description = document.getElementsByName('description')[0].value;
    console.log(url)   
    console.log(description);
    animals.push({'url':url,'description':description});
    localStorage.setItem('data',JSON.stringify(animals))
    // location.reload()
})

if(localStorage.getItem('data')){
    console.log('si se encontro');
    const data = JSON.parse(localStorage.getItem('data'));
    data.forEach(d =>{

        let div = document.createElement('div');
        div.className= 'item';

        let img = document.createElement('img');
        img.className = 'img';
        img.setAttribute('src',d.url);
        document.querySelector('.item-container').appendChild(div).appendChild(img);
        
        let texto = document.createElement('p');
        texto.className = 'description';
        let parafo = document.createTextNode(d.description);
        texto.appendChild(parafo);
        document.querySelector('.item-container').appendChild(div).appendChild(texto);
        
        let borrar = document.createElement('p');
        borrar.className = 'borrar';
        let paf = document.createTextNode('Eliminar');
        borrar.appendChild(paf);
        document.querySelector('.item-container').appendChild(div).appendChild(borrar)

    })
}
else{
    console.log('no se encontro')
}

const del = document.getElementsByClassName('borrar');
for(let i=0;i<del.length;i++){
    del[i].addEventListener('click',()=>{
        animals.splice(i,i+1);
        localStorage.setItem('data',JSON.stringify(animals));
        location.reload()
    })
}

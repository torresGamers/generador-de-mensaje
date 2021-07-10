let cupon = document.querySelectorAll('.cupon');
 for(let i=0;i<cupon.length;i++){
     cupon[i].addEventListener('click',()=>{
            cupon[i].select();
        document.execCommand('copy');
        alert('se a copiado')
     })     
 }
 let contador =1;

 let btn = document.querySelectorAll('.btn');
 for(let i=0;i<btn.length;i++){
     btn[i].addEventListener('click',(d)=>{
         d.preventDefault()
            cupon[i].select();
        document.execCommand('copy');
       btn[i].textContent ='copiado'
    btn[i]=setTimeout(() => {
           btn[i].textContent ='copiar';
        //    contador++
        //    location.reload()
        }, 2000);  
     })     
 }
 let contar = document.getElementById('contador');
 
 
 contar.addEventListener('click',(e)=>{
       
     
     if(e.target.classList.contains('empezar')){         
         empezar = setInterval(()=>{
         let conteo = document.querySelector('.conteo');
         conteo.textContent = contador++;
         console.log(e.target.classList.contains('empezar'));  
     },500)
     }else if(e.target.classList.contains('detener')){
        //    let detener = document.querySelector('.detener')
           clearInterval(empezar)
         console.log(e.target.classList.contains('detener'));          
     }else{
         console.log(`no funciona`)
     }
 })
 
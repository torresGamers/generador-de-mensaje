let cupon = document.getElementsByClassName('cupon');
for(let i=0;i<cupon.length;i++){
    cupon[i].addEventListener('click',()=>{
        cupon[i].select();
        document.execCommand('copy');
        alert('se ha copiado el cupon')
    })
}
let btn = document.getElementsByClassName('btn');
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',(e)=>{
        let cupon = document.getElementsByClassName('cupon');
        e.preventDefault();
        cupon[i].select();
        document.execCommand('copy');
        // alert('se ha copiado el cupon');
        btn[i].textContent = 'copiado'
    })
}
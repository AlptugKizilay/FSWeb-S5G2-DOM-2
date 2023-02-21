import e from 'cors';
import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert("Bana tıkladın!")
 });


// Kodlar buraya gelecek!
const headerNav = document.querySelectorAll('.nav > a');
for (const a of headerNav) {
    a.style.border = '1px solid black';
    a.style.padding = '4px'
    a.addEventListener("click", (e) =>  {
        e.target.style.color = 'blue';
    })
}
const destinastions = document.querySelectorAll(".destination > h4, .destination > p");
console.log(destinastions);
for (const destinastion of destinastions) {
    
    destinastion.addEventListener('mouseover', (e) => {
       e.target.style.textAlign = 'center';
    })
}
const introImg = document.querySelector('.intro > img');
introImg.style.cursor = 'pointer';
introImg.addEventListener("dblclick", (e) => {
    alert(e.target.alt);
})
const contentImg = document.querySelector('.img-content > img');
contentImg.addEventListener('mouseover' , (e) => {
    contentImg.style.cursor = 'crosshair';
})
const headerBack = document.querySelector('.main-navigation');
headerBack.addEventListener('wheel', (e)=>{
    e.target.width = '100%';
    e.target.style.background = 'url(http://localhost:9000/img/fun-bus.jpg)';

})
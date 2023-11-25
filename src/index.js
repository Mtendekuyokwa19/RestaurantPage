import  './style.css' 
import {Menu} from './menu/menu.js';
import { createDetails } from './contact.js';

export let content=document.querySelector('#content');

 let NavBar=(()=>{
    let NavBox=document.createElement('nav');
    NavBox.className="nav";

let bars=["St LUKE'S","Home","Menu","Contact","Support"];

for (let i = 0; i < bars.length; i++) {
    let tab=document.createElement('button');
    tab.className=bars[i]+"Nav";
    tab.textContent=bars[i];
    NavBox.appendChild(tab);
   
    
}

content.appendChild(NavBox);

})()

function HomeContent(){

    let secondaryInfo=document.createElement('div');
    secondaryInfo.className="introduction Home";
    
    let HomeImage=document.createElement('div');
     HomeImage.className="HomeImage Home";
    secondaryInfo.appendChild(HomeImage)

    let Infomation=document.createElement('div');
    Infomation.className="Infomation Home";

    secondaryInfo.appendChild(Infomation);

    let rating=document.createElement('p');
    rating.className="rating Home";
    rating.textContent="#1  THIS WEEK"
    Infomation.appendChild(rating);

    let Heading=document.createElement('h1');
    Heading.className="Heading Home";
    Heading.textContent="Eat Healthy, Be Healthy "
    Infomation.appendChild(Heading);
    //need for refactor

    let description=document.createElement('p');
    description.className="description Home";
    description.textContent="Spinach is a highly nutritious leafy green vegetable that offers several health benefits. Here's some information about what makes spinach healthy Spinach is rich in essential nutrients: Spinach is abundant in vitamins and minerals.  ";
    Infomation.appendChild(description);

    let Order=document.createElement('button');
    Order.className="Order Home";
    Order.textContent="Order Now"
    Infomation.appendChild(Order);

    let content=document.querySelector('#content');
    content.appendChild(secondaryInfo);


}
HomeContent();





function clearing() {
    let allContent=document.querySelectorAll('.Home');
    allContent.forEach(allContent=>{

        allContent.remove();

    }
        


    )
    
}

let addingTabs=(()=>{

let HomeTab=document.querySelector('.HomeNav')
let MenuTab=document.querySelector('.MenuNav')
let ContactTab=document.querySelector('.ContactNav')
let Order=document.querySelector('.Order')

Order.addEventListener('click',function(e){
    clearing();
    Menu();



});
MenuTab.addEventListener('click',function(e){
clearing();
Menu();


});
HomeTab.addEventListener('click',function(e){
    clearing();
    HomeContent();
    let Order=document.querySelector('.Order')
    Order.addEventListener('click',function(e){
        clearing();
        Menu();
    
    
    
    })
    
    })

 ContactTab.addEventListener('click',function(e){
        clearing();
        createDetails();
        
        
        })



})()
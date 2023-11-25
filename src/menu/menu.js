import './menu.css'

let content=document.querySelector('#content');
let MenuContainer=()=>{

let menuHolder=document.createElement('div');
menuHolder.className="menuHolder Home";


content.appendChild(menuHolder);


return menuHolder;
}

export function Menu(){
    let Heads=document.createElement('h2');
    Heads.textContent="MENU";
    Heads.className="Menu Home"
    content.appendChild(Heads)
    
console.log('listen')
    let foods=[
    {itemName:"Cheese Burger",Price:"Mk2500"},
    {itemName:"Mushroom Pizza",Price:"Mk2000"},
    {itemName:"Pepperoni pizza",Price:"Mk6500"},
    {itemName:"Fish Salad",Price:"Mk2800"},
    {itemName:"Spaghetti",Price:"Mk1800"},
    {itemName:"Cheese Burger",Price:"Mk6500"}]

let menuHolder=MenuContainer();
for (let i = 0; i < foods.length; i++) {
    let item=document.createElement('div');
    item.className=foods[i].itemName+" "+"Home";
    let itemImage=document.createElement('div');
    let itemName=document.createElement('p');
    itemName.textContent=foods[i].itemName;
    let itemPrice=document.createElement('p');
    itemPrice.textContent=foods[i].Price;

    item.appendChild(itemImage);
    item.appendChild(itemName)
    item.appendChild(itemPrice);
    
    
    menuHolder.appendChild(item)
    
}




}
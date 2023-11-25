import { content } from "./index";
import './contact/contact.css'

export function createDetails(){


    let heading=document.createElement('h1');
    heading.textContent="REACH OUT TO US";
    heading.className="HeadingContact Home";
    content.appendChild(heading);

    let boxInfo=document.createElement('div');
    boxInfo.className="boxInfo Home";
    content.appendChild(boxInfo);
    
    let informationBackdrop=document.createElement('div');
    informationBackdrop.className="informationBackdrop Home";
    boxInfo.appendChild(informationBackdrop);
    
    let information=document.createElement('div');
    information.className="information Home";
    boxInfo.appendChild(information);

    let details=["St Luke's Restaurant","Post Office Box 567","Malawi"];

    for (let i = 0; i < details.length; i++) {
      
        let info=document.createElement('p');
        info.className="infoDetail Home";
        info.textContent=details[i];
        information.appendChild(info);

        
    }


}
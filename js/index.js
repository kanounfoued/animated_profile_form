


let openButton = document.getElementById('open');
let closeButton = document.getElementById('close');

openButton.onclick = function(){
    'use strict';

    let asideBar = document.getElementById('aside-bar');

    if( !asideBar.classList.contains('dis-flex') ){
        asideBar.classList.add('dis-flex');
        windowResize();
    }

};

closeButton.onclick = function(){
    'use strict';

    let asideBar = document.getElementById('aside-bar');
    
    if( asideBar.classList.contains('dis-flex') ){
        asideBar.classList.remove('dis-flex');
        windowResize();
    }

};



let inputs = document.querySelectorAll('.input-area input');

for( let input of inputs ){

    let label = input.parentElement.previousElementSibling;

    input.onfocus = function(){
        label.classList.add('translate-up', 'opacity-1');
        let controlDiv = this.nextElementSibling;
        controlDiv.textContent = '';

        let borderWidth = this.nextElementSibling.nextElementSibling;
        borderWidth.style.backgroundColor = '#303030';
        this.onkeyup = function(){
            this.style.border = 'none';
            let replace = this.value.replace(/[ ]/g,',');
            controlDiv.textContent = replace;
            borderWidth.style.width = controlDiv.scrollWidth  + 'px';

            if( this.value === '' ){
                this.style.borderBottom = '2px solid #b4b4b4';
            }
        };

    };

    input.onblur = function() {
        let borderWidth = this.nextElementSibling.nextElementSibling;
        borderWidth.style.backgroundColor = '#b4b4b4';
        if( this.value === '' ){
            label.classList.remove('translate-up','gray-color', 'opacity-1');
        } else {
            label.classList.add('gray-color');
        } 
    };

}






function windowResize(){
    let info = document.querySelector('.info');
    let asideBar = document.getElementById('aside-bar');

    if( window.innerWidth < 768 ){
        if( asideBar.classList.contains('dis-flex') ){
            info.classList.remove('dis-flex');
        } else {
            info.classList.add('dis-flex');
        }
        
    } else {
        info.classList.add('dis-flex');
    }


}



windowResize();



onresize = function(){
    'use strict';
    windowResize();
};























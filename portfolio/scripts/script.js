console.log('loaded')
const expand = document.getElementById('expand');
const card_cont = document.getElementById('card_cont');
const more_cont = document.getElementById('more_cont');

function personInfo(info, site){
    const aTag = document.createElement('a');

}

expand.addEventListener('click', () => {

   const src = expand.getAttribute('name');

   if (src === 'down') {
       expandDown();
   } else {
       expandUp();
   }

    
    
})

function expandDown() {
    
    card_cont.style.transition = "height .2s ease-in-out";
    card_cont.style.height ="80%";
    
    more_cont.style.transition = "opacity .3s ease-in-out .2s"
    more_cont.style.opacity = "1";
    expand.src = "./portfolio/images/svg/chevron-up.svg";
    expand.setAttribute('name', 'up')

}


function expandUp(){

    card_cont.style.transition = "height .2s ease-in-out";
    card_cont.style.height ="60%";

    more_cont.style.transition = "opacity .1s ease-in-out"
    more_cont.style.opacity = "0";

    expand.src = "./portfolio/images/svg/chevron-down.svg";
    expand.setAttribute('name', 'down');
    
}

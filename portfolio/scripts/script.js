
console.log('loaded')

// contact card info
const expand = document.getElementById('expand');
const card_cont = document.getElementById('card_cont');
const more_cont = document.getElementById('more_cont');

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

// tab down buttons

const tabButtons = document.querySelectorAll('#tab')
const content = document.querySelectorAll('#content');
tabButtons.forEach(input => {
    input.addEventListener('click', () => {
        let name = name_extractor(input);

        if (name === 4){
            content[0].scrollIntoView({behavior:'smooth', block:'end'})
        
        }

        name += 1;
        console.log(content);



        content.forEach(element => {
            let result = name_extractor(element);
            if (result === name) {
                element.scrollIntoView({behavior: 'smooth', block:'end'})
            }
        })

    })
    
})

function name_extractor(element) {
    return Number(element.getAttribute('name'));
}






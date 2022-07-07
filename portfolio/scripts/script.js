
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
    card_cont.style.height ="57%";
    
    more_cont.style.transition = "opacity .3s ease-in-out .2s"
    more_cont.style.opacity = "1";
    expand.src = "./portfolio/images/svg/chevron-up.svg";
    expand.setAttribute('name', 'up')

}


function expandUp(){

    card_cont.style.transition = "height .2s ease-in-out";
    card_cont.style.height ="50%";

    more_cont.style.transition = "opacity .1s ease-in-out"
    more_cont.style.opacity = "0";

    expand.src = "./portfolio/images/svg/chevron-down.svg";
    expand.setAttribute('name', 'down');
    
}

// tab down buttons

const tabButtons = document.querySelectorAll('#tab')
const content = document.querySelectorAll('#content');

// get button source, n+1 to scroll to next content section 
// last button returns to the top
tabButtons.forEach(input => {
    input.addEventListener('click', () => {
        let name = name_extractor(input);

        if (name === 4){
            content[0].scrollIntoView({behavior:'smooth', block:'end'})
        
        }

        name += 1;
 
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

// card flipper -- to work on

const pers_tabs = document.getElementById('pers_tabs');
const slider = document.getElementById('slider');
const resume_info = document.getElementById('tabContent')


pers_tabs.addEventListener('click', (event)=> {
    if (event.target.getAttribute('id') === 'tab1') {
        resume_info.textContent= "";
        eduInfo();
        
    } else if (event.target.getAttribute('id') === 'tab2'){
        resume_info.textContent= "";
       expInfo();
        
    } else {
        resume_info.textContent= "";
        Skills();
    }
})

function eduInfo(){
    const img = document.createElement('img');
    const button1 = document.createElement('button');
    img.setAttribute('src', "./portfolio/images/svg/school.svg")
    resume_info.appendChild(img);
    button1.textContent = "Social Science Major";
    resume_info.appendChild(button1);

}

function expInfo(){
    const img = document.createElement('img')
    img.setAttribute('src', "./portfolio/images/svg/briefcase.svg");
    resume_info.appendChild(img);
}

function Skills(){
    const img = document.createElement('img');
    img.setAttribute('src', "./portfolio/images/svg/notebook.svg");
    resume_info.appendChild(img)
}

// quote generator

async function getQuote() {
    const api_url = "https://stoicquotesapi.com/v1/api/quotes/random";
    fetch(api_url)
    .then(response => response.json())
    .then (result => quoteInfo(result));
}

function quoteInfo(array){
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');


    quote.textContent = array.body ;
    author.textContent = "- " +array.author;
}

getQuote();



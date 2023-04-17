// select body , mainplaqueSection,LineLogoSection1 ,btnsSection2 , QuestionsSection , btnSection3

const body = document.body
mainplaqueSection = document.querySelector('#mainplaqueSection'),
LineLogoSection1= document.querySelector('#Logo-Section'),
btnsSection2 = document.querySelectorAll('.btn-nextLevel-section2'),
QuestionsSection =document.querySelector('#QuestionsSection-1'),
btnSection3 =document.querySelector('.btn-section3')

// hengami ke safhe load mishavad aval LineLogoSection1 baray 4 sanieh namayesh dade mishavad va badesh mainplaqueSection namayesh dade mishavad
setTimeout(() => {
    LineLogoSection1.style.display ='none'
    body.style.backgroundColor = ''
    mainplaqueSection.style.display = 'flex'
//    body.style.backgroundImage='linear-gradient(to right,#0081A7,#00AFB9)'
    
}, 2500);

// dar section 2 hengami ke har kodom az dokmeha zade mishavad display section 2 none mishavad va section 3 namayesh dade mishavad
btnsSection2.forEach( (btnsSection2) => {
    
    btnsSection2.addEventListener('click', () => {
        mainplaqueSection.style.display = 'none'
// shoro bakhshe aval soalat
// ba faal shodan function Questions1Section part1 safhey soalat  sakhte mishavad
   
        QuestionsSection.style.display='block'
    })

});

// hengami ke dokmey btnSection3 click mishavad section 3 display none mishavad va section 4 ke baray natayej ast namayesh dade mishavad
btnSection3.addEventListener('click' , ()=>{

    QuestionsSection.style.display='none'
})
// btnSection3.forEach( (btnSection3) =>{

//     btnSection3.addEventListener('click' , ()=>{

//         QuestionsSection.style.display='none'
//     })
// });



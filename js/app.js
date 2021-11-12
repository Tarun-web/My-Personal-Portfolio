AOS.init()


document.querySelector('.moreInfo').addEventListener('click', ()=>{
    document.querySelector('.info-modal').classList.remove('info-modal-js'  )
})
document.querySelector('.cross-js').addEventListener('click', ()=>{
    document.querySelector('.info-modal').classList.add('info-modal-js')
})


// ------------------------------------------
// ------BURGER NAVBAR
// ------------------------------------------
const burger = document.querySelector('.burger-js');
burger.addEventListener('click', ()=>{

    document.querySelector('.navlinks').classList.add('navlinks-js')
    document.querySelector('.navlinks').classList.remove('burger-cross-js')

})


 document.querySelector('.burger-cross').addEventListener('click', ()=>{
     
     document.querySelector('.burger-cross').classList.add('.cross-rotate')
     document.querySelector('.navlinks').classList.add('burger-cross-js')
    document.querySelector('.navlinks').classList.remove('navlinks-js')

})

// ------------------------------------------
// ------DARK MODE
// ------------------------------------------

const darkmode = ()=>{
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.darkMode').classList.replace('fa-moon', 'fa-sun')
    document.querySelector('footer').style.background="var(--primary-color)";
    document.querySelector('.navlinks').style.background='#3f3f3f'

    localStorage.setItem('data-theme', 'dark')

}
const lightmode = ()=>{
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('.darkMode').classList.replace('fa-sun', 'fa-moon')
    document.querySelector('.navlinks').style.background='#f5f5f5'
    localStorage.setItem('data-theme', 'light')
}



document.querySelector('.switch-js').addEventListener('change', (e)=>{
    if(e.target.checked){
        darkmode()
    }else{
        lightmode()
    }
})

if(localStorage.getItem('data-theme')==='dark'){
    document.querySelector('.checked-js').checked=true;
    darkmode()
}







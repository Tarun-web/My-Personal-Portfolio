AOS.init()


document.querySelector('.moreInfo').addEventListener('click', ()=>{
    document.querySelector('.info-modal').classList.remove('info-modal-js'  )
})
document.querySelector('.cross-js').addEventListener('click', ()=>{
    document.querySelector('.info-modal').classList.add('info-modal-js')
})



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







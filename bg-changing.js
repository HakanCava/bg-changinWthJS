const left=document.querySelector('.content1')
const right=document.querySelector('.content2')
const center=document.querySelector('.content3')
const container=document.querySelector('.container')
const body =document.querySelector('body')
left.onmouseover=function(){
    left.style.backgroundColor="blue"
    left.style.color="yellow"
    left.style.cursor="pointer"
}

right.onmouseover=function(){
    right.style.backgroundColor="white"
    right.style.color="black"
    right.style.cursor="pointer"
}

center.onmouseover=function(){
    center.style.backgroundColor="red"
    center.style.color="yellow"
    center.style.cursor="pointer"
}

left.onmouseout=function(){
    left.style.backgroundColor="yellow"
    left.style.color="black"
}

right.onmouseout=function(){
    right.style.backgroundColor="coral"
    right.style.color="black"
}

center.onmouseout=function(){
    center.style.backgroundColor="purple"
    center.style.color="black"
}

const randomColor=()=>{
let d='rgb'
    let x=Math.floor(Math.random()*256)
    let y=Math.floor(Math.random()*256)
    let z=Math.floor(Math.random()*256)
    
    return `${d}(${x},${y},${z})`
}


left.addEventListener("click",()=>
    container.style.backgroundColor=randomColor()
)

right.addEventListener("click",()=>
    container.style.backgroundColor=randomColor()
)

center.addEventListener("click",()=>{
    const color=randomColor()
    body.style.backgroundColor=color
    container.style.backgroundColor=color
})
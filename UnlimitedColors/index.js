//generate random color

const random = ()=>{
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {     
        color = color + hex[Math.floor(Math.random()* 16)]
    }
    return color
}

const startcolor = ()=>{
    document.body.style.backgroundColor = random()
}

let asap; 

document.querySelector('#start').addEventListener('click',()=>{
    if (!asap) {
        asap = setInterval(startcolor,2000)
    }
} )


document.querySelector('#stop').addEventListener('click',()=>{
    console.log("stopped");
    clearInterval(asap)
    asap = null;
})

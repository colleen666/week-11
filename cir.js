let svg = document.getElementById("background")
console.log(svg)


rc=200;
function newCircle(r, color){
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    newCircle.setAttribute("cx", "40%" )
    newCircle.setAttribute("cy", "40%" )  
    newCircle.setAttribute("r",  r )
    newCircle.setAttribute("fill", color)

    svg.appendChild(newCircle)
}


function makeRGBeven(redInputValue, greenInputValue, blueInputValue) {

    return `rgb(${redInputValue},${greenInputValue},${blueInputValue})`
}

function makeRGBodd(redInputValue, greenInputValue, blueInputValue) {

    return `rgb(${redInputValue},${greenInputValue},${blueInputValue})`
}

function randomodd(colornum){
    colornum=Math.round(Math.random() * 255);
    if (colornum%2===0){
        colornum=colornum+1
    }
    return colornum
}
function randomeven(colornum){
    colornum=Math.round(Math.random() * 255);
    if (colornum%2!==0){
        colornum=colornum-1
    }
    return colornum
}

for (let i=0; i < 10; i++) {
    rc=rc-15;
    if (i%2===0){
        red=randomeven();
        green=randomeven();
        blue=randomeven();
    } else{
        red=randomodd();
        green=randomodd();
        blue=randomodd();
    }
    console.log(red,green,blue)
        
    if (i%2 === 0){
        cc=makeRGBeven(red,green,blue);
        newCircle(rc,cc)
        console.log(cc)

    } else{
        cc=makeRGBodd(red,green,blue);
        console.log(cc)
        newCircle(rc,cc)
    }


};





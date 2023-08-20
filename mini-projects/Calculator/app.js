(function a(){
    let screen = document.querySelector(".screen")
    let buttons = document.querySelectorAll(".btn")
    let equal = document.querySelector(".btn-equal")
    let clear = document.querySelector(".btn-clear")

    buttons.forEach(function(button){
        button.addEventListener("click", function (e) {
            let value = e.target.dataset.num //e.target is element clicked(), .dataset returns the set of data(attributes on that element), .num returns the value of the data-num attribute/elemrnt.dataset.keyname/
            screen.value += value
        })
    })
        
    equal.addEventListener("click",function b() {
        if(screen.value === " "){
            screen.value="please enter numbers to evaluate"
        }else{
            let answer =eval(screen.value)
            screen.value = answer
        }   
    })

    clear.addEventListener("click",function c(){
        screen.value=""
    })
})()

//The target property returns the element on which the event occurred, opposed to the currentTarget property, which returns the element whose event listener triggered the event.

/*(function a(){
    let screen = document.querySelector(".screen")
    let buttons = document.querySelectorAll(".btn")
    let clear = document.querySelector(".btn-clear")
    let equal = document.querySelector(".btn-equal")

    buttons.forEach(function(button){
        button.addEventListener("click",function (e){
            let value = e.target.dataset.num //storing the values
            screen.value += value //push val to screen
        })
    })

    equal.addEventListener("click", function(f){
        if(screen.value === ''){
            screen.value = "Please enter values"
        }else{
            let answer = eval(screen.value)
            screen.value = answer
        }
    })

    clear.addEventListener("click", function(e){
        screen.value=" "
    })
})()*/
/*var index = 0

function changeColors(){
    var colors =["lime","crimson","violet"]
    document.getElementsByTagName("body")[0].style.background=colors[index++]
    if(index > colors.length-1){
        index=0
    }
}*/

function changeColors(){
    var hexnumbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    var hexcode=''
    for(var i=0;i<6;i++){
        var randomnum = Math.floor(Math.random()*hexnumbers.length)
        hexcode += hexnumbers[randomnum]// hexcode + hexcode = hexnumbers[randomnum]
    }
    document.getElementById("hex-code").innerHTML = hexcode
    document.getElementsByTagName("body")[0].style.background= "#" + hexcode
}
function generate(){
    var quotes ={
        "~Florence Nightingale~":'"I attribute my success to this: I never gave or took any excuse."',
        "~Michael Jordan~":'"Ive missed more than 9000 shots in my career. Ive lost almost 300 games. 26 times Ive been trusted to take the game winning shot and missed. Ive failed over and over and over again in my life. And that is why I succeed."',
        "~John Lennon~":'"Life is what happens to you while you’re busy making other plans."'
    }

    var authors=Object.keys(quotes)
    var author = authors[Math.floor(Math.random() * authors.length)]
    var quote = quotes[author]
    document.getElementById("quote").innerHTML=quote
    document.getElementById("author").innerHTML=author
}
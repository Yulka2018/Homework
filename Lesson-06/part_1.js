var elem = document.createElement('p')
elem.innerHTML = "Click on me"
document.body.appendChild(elem)

var newImg = document.createElement('img')
newImg.src =  "http://easyscienceforkids.com/wp-content/uploads/2013/04/Giraffe-Couple.jpg"

elem.onclick = function(event){
document.body.appendChild(newImg)
newImg.style.width = "100px"
newImg.style.height = "100px"
}

newImg.onmouseover = function (event){
newImg.style.width = "200px"
newImg.style.height = "200px"
}

newImg.onmouseout = function (event){
newImg.style.width = "100px"
newImg.style.height = "100px"
}

newImg.onclick = function(event){
document.body.removeChild(newImg)
}
var tags = [
        {
                name: "div",
                attrs: {
                        className: "container",
                        title: "Контейнер",
                        style: `
                                width: 200px;
                                height: 200px;
                                border-radius: 50%;
                                border: dotted 2px #789;
                        `
                }
        },
        {
                name: "img",
                attrs: {
                        src: "http://www.abc.net.au/news/image/9154542-1x1-940x940.jpg",
                        width: "200",
                        id: "picture",
                        className: "galleryPicture"
                },
                text: "Translator"
        },
        {
                name: "a",
                attrs: {
                        className: "paragraph",
                        href: "https://learnjavascript.online/app.html",
                        title: "JS"
                },
                text: "Practice js"
        },
        {
                name: "h1", 
                attrs: { className: "header" },
                text: "Hello!"
        },
		{
                name: "p", 
                attrs: {},
                style: "font-family: monospace, Arial; color: #555; font-size: 16px;",
                text: "First"
        },
        
]

for ( var tag of tags ) {
        var elem = document.body.appendChild ( document.createElement ( tag.name ) )
        if ( tag.text ) elem.innerHTML = tag.text
        for ( var attr in tag.attrs )  elem [ attr ] = tag.attrs [ attr ]
        elem.style = tag.style
		var el_a = document.getElementsByTagName('a')
			for (var x of el_a){
			 	x.addEventListener('click', clickHandlerA)
            		}
		var el_img = document.getElementsByTagName('img')
			for (var x of el_img){
				 x.addEventListener('click', clickHandlerImg)
			}
		var el_h1 = document.getElementsByTagName('h1')
			for (var x of el_h1){
		 		x.addEventListener('click', clickHandler)
			}
}
function clickHandler(event){
 event.preventDefault()
 event.target.insertAdjacentHTML ( `afterEnd`, `<p>Bye</p>` )
}
function clickHandlerA(event){
 event.target.style = 'color: #555'
}
function clickHandlerImg(event){
 event.preventDefault()
 event.target.style.width = '500'
}
async function getData(){
	var readJson = fetch ('https://api.github.com/users?since=250')
        	.then ( response => response.json())
 	var newData = await readJson
	console.log(newData)
	var users = (function(){
				for (var data of newData){
					var pic = document.body.appendChild(document.createElement('img'))
					pic.src = data.avatar_url
					var name = document.body.appendChild(document.createElement('span'))
					name.innerText = data.login
                }
    }(newData))
 }
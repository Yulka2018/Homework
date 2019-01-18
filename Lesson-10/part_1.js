var newImg = document.createElement ( 'img' )
document.body.appendChild ( newImg )
fetch ( 'https://avatars.mds.yandex.net/get-pdb/776003/0cc5d27b-d185-42b6-b13c-1f5cd6f35dd2/s375' )
    .then ( response => {
        response.blob().then ( response => {
    	    urlObject = URL.createObjectURL( response)
    	    newImg.src = urlObject
        })
    })

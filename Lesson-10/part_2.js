window.addEventListener('hashchange', function (e){
	localStorage.clear ()
	localStorage.setItem (
		"hashNum", 
		JSON.stringify ({
    	pageId: location.hash,
    	startTime: new Date().getSeconds()
		})
	)
	let hashNum = JSON.parse ( localStorage ['hashNum'])
    	for ( var item in hashNum )
        	localStorage.setItem ( item, hashNum [ item ] )
   	 		localStorage.removeItem ( "hashNum" )
})
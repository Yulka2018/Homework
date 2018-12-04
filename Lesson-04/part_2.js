var LibraryBook = function(newTitle, newYear, newAuthor){
	var title = newTitle
    var year = newYear
    var author = newAuthor
    var readerName = null
    var readerData = null

	function giveTheBook(client){
		readerName = client
		readerData = new Date()
	}

	this.getBookInfo = function (){
		if(readerName){
			console.log('Книга выдана:', `${readerData}`)
		} else {
				console.log("Есть в наличии:", `${title}`, `${author}`, `${year}`)
			}
    }

	this.getTheBook = function(client){
		if(readerName == null){
			giveTheBook(client)
			return {
					title: title,
					author: author,
					year: year
            }
		} else{
	            this.getBookInfo()
	
		  }
	}

	this.returnBook = function (title){
		readerName = null
		readerData = null
	}
}
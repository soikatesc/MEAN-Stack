app.factory('MessageFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/messages').then(callback)
	}
	factory.createmessage = function(newMessage, callback){
		$http.post('/messages', newMessage).then(callback)
	}
	factory.createComment = function(newComment, callback){
		// console.log(newComment.id)
		$http.post('/messages/'+newComment.id, newComment).then(callback)
	}
	return factory
})
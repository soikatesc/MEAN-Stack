app.controller('MessageController', function(MessageFactory){
	console.log('initializing MessageController..')

	var self = this;
	self.messages = []
	self.index = function(){
		MessageFactory.index(function(res){
			// console.log(res.data)
			self.messages = res.data
		})
	}
	self.createmessage = function(newMessage){
		self.errors = []
		MessageFactory.create(newMessage, function(res){
			self.messages = {}
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error)
				}
			}else{
					self.index()
			}
		})
	}
	self.createComment = function(newComment){
		console.log(newComment)
		// self.errors = []
		// MessageFactory.createComment(newComment, function(res){
		// 	self.comments = {}
		// 	if(res.data.errors){
		// 		for(key in res.data.errors){
		// 			var error = res.data.errors[key]
		// 			self.errors.push(error)
		// 		}
		// 	}else{
		// 		self.index()
		// 	}
		// })
	}
})
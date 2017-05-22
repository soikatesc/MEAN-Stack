//import controllers
var Messages = require('../controllers/messages.js')
var Comments = require('../controllers/comments.js')
//define routes

module.exports = function(app){
	app.get('/messages', Messages.index)
	app.post('/messages', Messages.create)
	app.post('/messages/:id', Comments.create)
	app.put('/comments/:id', Comments.addingLikes)
	app.delete('/messages/:id', Messages.destroy)
	app.delete('/comments/:id', Comments.destroy)
}
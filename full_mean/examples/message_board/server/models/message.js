var mongoose = require('mongoose')
require('./comment.js')

//message table
var MessageSchema = new mongoose.Schema({
	user : {
		type: String,
		minglength: [2, 'Your name is too short, sorry!']
	},
	body: {
		type: String,
		minglength: [3, 'Your message is too short']
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, { timestamps: true})

mongoose.model('Message', MessageSchema)
var Message = mongoose.model('Message')







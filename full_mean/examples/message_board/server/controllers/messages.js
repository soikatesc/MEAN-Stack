var mongoose = require('mongoose')
var Message = mongoose.model('Message')

module.exports = {
	index: function(req, res){
		console.log('hitting message.index route')
		Message.find({}).populate('comments').sort().exec(function(err, messages){
			if(err){
				return res.json(err)
			}
			return res.json(messages)
		})
	},
	create: function(req, res){
		console.log('hitting creating message route')
		console.log(req.body)
		Message.create(req.body, function(err, message){
			if(err){
				return res.json(err)
			}
			return res.json(message)
		})
	},
	destroy: function(req, res){
		Message.findByIdAndRemove(req.params.id, function(err, message){
			if(err){
				res.json(err)
			}
			return res.json(message)
		})
	} 
}
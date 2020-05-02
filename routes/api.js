const express = require('express');
const router = express.Router();
const User = require("../models/user")

router.get('/user/:id', (req, res, next) => {
	User.findById({_id :req.params.id}).then((user)=>{
		res.send(user);
	});
});

router.post('/user', (req, res, next) => {
	User.create(req.body).then((user) => {
		res.send({
			user
		});
	}).catch(next);

});

router.put('/user/:id', (req, res, next) => {
	User.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=>{
		User.findOne({_id: req.params.id}, req.body).then((user)=>{
			res.send(user);
		});
	})
});

router.delete('/user/:id', (req, res, next) => {
	User.findByIdAndRemove({_id: req.params.id}).then((user)=>{
		res.send(user);
	})
});

module.exports = router;
var mongoose = require('mongoose'),
Accounts = require('../models/SchemaAccount.js');

modules.exports.register = function(req, res){
	var loginInfo = new SchemaAccount();
	loginInfo.email = req.body.email.;
	loginInfo.username = req.body.username;
	loginInfo.setPassword(req.body.password);
	
	loginInfo.save(function(err)){
		if(err){
		console.log(err);
		res.status.(400).send.(err);
		else{
			res.json(loginInfo);
		}
		}
	};
	
	login.delete(function(err)){
		if(err){
		console.log(err);
		res.status.(400).send.(err);
		else{
			res.json(loginInfo);
		}
		}
	};
	
	login.find(function(err)){
		if(err){
		console.log(err);
		res.status.(400).send.(err);
		else{
			res.json(loginInfo);
		}
		}
	
};	

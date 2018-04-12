const express = require('express');
const utils = require('utility')
const Router = express.Router();
const models = require('./model')
const User = models.getModel('user')
Router.get('/list',function(req,res) {
    User.find({},function(err,doc) {
        return res.json(doc)
    })
})
Router.post('/login',function(req,res) {
    const {user,password} = req.body
    User.findOne({user,password:utils.md5(password)},function(err,doc) {
        if(doc) {
            return res.json({code: 0,doc})
        }else {
            return res.json({code: 1,msg: '用户名或密码错误'})
        }
    })
})
Router.post('/register',function(req,res) {
    const {user,password,type} = req.body
    User.findOne({user},function(err,doc) {
        if(doc) {
            return res.json({code: 1,msg: '用户名重复'})
        }
        User.create({user,password:utils.md5(password),type},function(e,d) {
            if(e) {
                return res.json({code: 1,msg: '代码错误'})
            }else {

                return res.json({code: 0,msg: '注册成功'})
            }
        })
    })
})
Router.get('/info',function(req,res) {
    return res.json({code: 1})
})


module.exports = Router
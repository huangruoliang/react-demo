const express = require('express');
const utils = require('utility')
const Router = express.Router();
const models = require('./model')
const User = models.getModel('user')

const _filter = { 'password': 0, '__v': 0 }


Router.get('/list', function (req, res) {
    const { type } = req.query
    User.find({ type }, function (err, doc) {
        return res.json({ code: 0, data: doc })
    })
})
Router.post('/login', function (req, res) {
    const { user, password } = req.body
    User.findOne({ user, password: utils.md5(password) }, _filter, function (err, doc) {
        if (doc) {
            res.cookie('userid', doc._id)
            return res.json({ code: 0, data: doc })
        } else {
            return res.json({ code: 1, msg: '用户名或密码错误' })
        }
    })
})
Router.post('/register', function (req, res) {
    const { user, password, type } = req.body
    User.findOne({ user }, function (err, doc) {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        }
        User.create({ user, password: utils.md5(password), type }, function (e, d) {
            if (e) {
                return res.json({ code: 1, msg: '代码错误' })
            } else {
                res.cookie('userid', d._id)
                return res.json({ code: 0, msg: '注册成功' })
            }
        })
    })
})
Router.post('/update', function (req, res) {
    const body = req.body
    console.log(body)
    const userid = req.cookies.userid
    if (!userid) {
        return res.json({ code: 1 })
    }
    User.findOne({ _id: userid }, function (err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '代码错误' })
        }
        if (!doc) {
            return res.json({ code: 1, msg: '该用户不存在' })
        }
        User.findByIdAndUpdate(userid, body, function (e, d) {
            if (e) {
                return res.json({ code: 1, msg: '代码错误' })
            } else {
                const data = Object.assign({}, {
                    user: doc.user,
                    type: doc.type
                }, body)
                return res.json({ code: 0, msg: '注册成功', data: data })
            }
        })
    })
})
Router.get('/info', function (req, res) {

    const { userid } = req.cookies
    if (!userid) {
        return res.json({ code: 1 })
    }
    User.findOne({ _id: userid }, _filter, function (err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '代码错误' })
        }
        if (doc) {
            return res.json({ code: 0, data: doc })
        }
    })

})


module.exports = Router
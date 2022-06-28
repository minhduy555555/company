const express = require('express')
const companyController = require('../controller/company')
const account = require('../controller/authentication')
const MidwereAuthen = require('../midwere/authen')
const Comments = require('../controller/comment')

const router = express.Router()

router.get('/',companyController.home)
router.get('/authentication',account.login)
router.post('/authentication/save',account.save)
router.post('/authentication/access',account.access)
router.get('/authentication/create',account.createAccount)
router.get('/company/save/form',MidwereAuthen.authentication,companyController.form)
router.post('/company/save',companyController.save)
router.get('/company/info/:slug',companyController.info)
router.post('/company/comment',MidwereAuthen.authentication,Comments.SetComment)


module.exports = router
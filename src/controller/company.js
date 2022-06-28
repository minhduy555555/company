const company = require('../modle/company')
const comments = require('../modle/comment')
const account = require('../modle/account')
class Company{
    home(req,res,next){

        if(req.cookies){
            var user = req.cookies.user
            res.locals.user = user
            
        }
        company.find({}).lean()
        .then(companyV=>{
            res.render('company/home',{companyV})
        })
    }
    form(req,res){
        res.render('company/create')
    }
    save(req,res,next){
      const companySave = new company(req.body)
      companySave.abum = companySave.abum.toString().split(',')
         companySave.save()
        res.redirect('/')
    }
   async info(req,res){
    const user = await account.findOne({_id:req.cookies.userId}).lean()
    var userName
    if(user){
        userName =user.name
    }
    else{
        userName = 'user'
    }
      const companyV = await company.findOne({slug:req.param('slug')}).lean()
        var idItiem =  companyV._id || null
       const comment =comments.find({idItiem:idItiem}).lean()
       Promise.all([companyV,comment])
        .then(companyV=>{
            res.render('company/InfoCompany',{companyV:companyV[0],comments:companyV[1],idItiem,nameComment:userName })
        })
    }

}
module.exports = new Company
var jwt = require('jsonwebtoken')



const authentication = (req,res)=>{

    let {username, password} = req.body
    let sampleData = {'username':'123','password':'123'}
    const SECRET_KEY = process.env.JWT_SECRET_KEY
    console.log('req received on authentication')


    if(sampleData.username===username && sampleData.password===password){
        console.log('if statement clg')
        res.cookie('token',jwt.sign(sampleData,SECRET_KEY))

    }

    res.send('new route authorisation.')
}

module.exports = authentication
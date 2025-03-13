const express=require("express");
const app=express();

function oldMiddleware(req,res,next) {
    const age= req.query.age;
    if (age>=14) {
        next();
    }
    else{
        res.json('You are too young');
    }
}

app.use(oldMiddleware);
app.get('/ride1',function(req,res){
        res.json("You have successfully made the ride 1")

})
app.get('/ride2',function(req,res){
    res.json("You have successfully made the ride 2")
})
app.listen(3000);
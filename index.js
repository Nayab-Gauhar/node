const express = require("express")
const app = express();
const users = [{
    name: "Nayab",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());
app.get('/', function (req, res) {
    const NayabKidneys = users[0].kidneys;
    const numberofKidneys = NayabKidneys.length;
    let numberofHealthyKidneys = 0;
    for (let i = 0; i < NayabKidneys.length; i++) {
        if (NayabKidneys[i].healthy) {
            numberofHealthyKidneys = numberofHealthyKidneys + 1;
        }
    }
    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
    res.json({
        numberofKidneys, numberofHealthyKidneys, numberofUnhealthyKidneys
    })
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg: "It is Done!!"
    })
})
app.put('/',function(req,res){
    for(let i=0; i< users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json("Aaj Friday hai")
})
app.delete('/',function(req,res){
    const newKidneys=[];
    for(let i=0; i< users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"It is officially Done"})
})
app.listen(3000);
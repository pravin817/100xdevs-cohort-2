const express = require("express");

const app = express();
const PORT = 3000;

function calculateSum(n){
    let ans = 0;

    for(let i = 1;i<=n;i++){
        ans +=i;
    }

    return ans;
}

app.get("/",(req,res)=>{
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("Your answer is "+ans);

});


app.listen(PORT,()=>{
    console.log(`Server is running on port 3000 
    \nVisit : http://localhost:${PORT} `);
})
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const router = express.Router()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/',async(req,res)=>{
    try{
        const {prompt} = req.body
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt,
          max_tokens: 2048,
        });
        res.send(response.data.choices[0].text)
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }
})

module.exports = router
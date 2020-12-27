const   express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/62817107?s=460&u=c23151fe4cb670ead46d8e584070a885a587fcca&v=4",
        name:"Giovanni Lopes",
        role:"Estudante do Launchbase Rocketseat",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        link:[
            {name: "Github", url:"https://github.com/ogiolops"},
            {name: "LinkedIn", url:"https://www.linkedin.com/in/ogiovannilopes/"},
            {name: "Facebook", url:"https://www.facebook.com"}
        ]

    }


    return res.render("about", {about})
})

server.get("/portifolio", function(req, res){

    return res.render("portifolio", {items: videos})
})

server.get("/video", function(req, res){
    
    const id =req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!true){
        return res.send("Video nota found")
    }

    return res.render("video", {item: video})
})

server.listen(5000, function(){
    console.log("server is running")
})
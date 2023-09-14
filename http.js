const http = require("http")

const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("<h1>A home page</h1> is the primary web page that a visitor will view when they navigate to a website via a search engine, and it may also function as a landing page to attract visitors. In some cases, the home page is a site directory, particularly when a website has multiple home pages.")
    }
    else if(req.url == "/login"){
        fs.readFile("form.html","utf-8",(err,data)=>{
            if(err) throw (err);
            res.end(data,)
        })
    }
    else if(req.url == "/signup"){
        res.end("<h1>Signup Page</h1> is very common among any type of secured applications and its widely used on the internet for authenticating the user before presenting the secured pages of the web applications. For example to use Facebook you have to get authenticated by the Facebook before they give you access to their platform. The user authentication is done through a special web page called Login Page. The Login page asks you to enter your credentials which is then validated by the application and after successful validation you are presented with the secured part of the application.")
    }
    else if(req.url == "/user"){
        res.end("<h1>User pages</h1> are pages for organizing the work users do on Wikipedia, as well as speaking to other users. User pages are mainly for interpersonal discussion, notices, testing and drafts (see: Sandboxes), and, if desired, limited autobiographical and personal content. Pages in the User and User talk namespaces are considered to be user pages.")
    }
    else if(req.url == "/service"){
        res.end("<h1>A service page</h1> is a part of a company website. As the name already suggests, it allows presenting the services or products offered by a particular brand to potential customers. A service page may be a subpage of your company website or a standalone web page in a different domain.")
    }
    
})
server.listen(8888,()=>{
    console.log("Server Started");
})
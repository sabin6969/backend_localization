const http  = require("http");
const path = require("path");
const {I18n} = require("i18n");


const configure = new I18n({
    locales:["en","ne","hi"],
    directory:path.join(__dirname,'locale'),
    defaultLocale: "en",
});

const server = http.createServer((req,res)=>{
    configure.init(req,res);
    switch(req.url){
        case "/":
            res.statusCode = 200;
            res.end(res.__("hello"))
            break;
        case "/howAreYou":
            res.statusCode = 200;
            res.end(res.__("howAreYou"));
            break;
        case "helloFromBackend":
            res.statusCode = 200;
            res.end(res.__("helloFromBackend"));
            break;
        default:
            res.statusCode = 200;
            res.end(res.__("iAmLost"));

    }
})


server.listen(4000,()=>{
    console.log("Server has Started at Port number 4000");
});
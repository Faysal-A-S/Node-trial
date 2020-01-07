let http=require('http')

let  url=require('url')

let fs=require('fs')

const PORT=process.env.PORT ||5000
http.createServer((req,res)=>{

    if(req.url==='/favicon.ico'||req.url==='/'){
        req.url='/index'
    }

    let q =url.parse(req.url,true);
    console.table(q);
    let filename='.'+q.pathname;
    filename=filename+'.html'
    fs.readFile(filename,(err,data)=>{
        if(err) {
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end('error 404 not found')
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(PORT);
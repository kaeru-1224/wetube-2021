import express from "express";

//1.Make express application!
const port=4000;
const app= express();

//req.method:어떤  method 가 어느  url로 향하는지 알 수있음 
const logger= (req, res, next)=> {
    console.log(`${req.method}${req.url}`);
    next();}

const privateMiddleware=(req,res,next)=>{
    const url = req.url;
    if(url==="/protected"){
        return res.send("<h1> Not Allowed</h1>")
    }console.log("Allowed you may countinue");
    next();

}
//2. get request
//1)누군가가 /(=root page)로 get request를 보내게되는경우 콜백 함수가 작동됨
//브라우저가  get request를 보내고 있어서,  getrequest에 우리가 반응할때까지 로딩되는것
//🤔계속 로딩되는 이유가 이게맞나? 
//request를 받을경우 우리는 response를 return해줘야함
//그런데 여기서 우리는 res.end()를 return해주면서  request를 종료시켜줌

const handelHome=(req,res)=>{/*return res.end()*/ return res.send("I love middle");}

const handelProtected =(req,res)=>{
    return res.send("Welcome to private lounge")
    
}

app.use(logger);
app.use(privateMiddleware);
app.get("/",handelHome)
app.get("/protected",handelProtected)

const handelLogin=(req,res)=>{return res.send("Login here"); };
app.get("/login",handelLogin)




//server:24시간 내내 온라인이된 컴퓨터로  request(= 사용자의 움직임을)를 듣고있음
const handelListenig=()=> console.log(`✨ Server listenting on port http://localhost:${port} 💚`);
//listen: 서버 가 시작될때 listen내의 콜백함수가 작동함
//port번호,콜백함수
app.listen(port,handelListenig);


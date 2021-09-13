let videos=[
    {title:"First Video",
rating:5,
comments:2,
createdAt:"12min ago",
views:59,
id:1,},

{title:"Second Video",
rating:5,
comments:2,
createdAt:"10min ago",
views:60,
id:2,},
{title:"Third Video",
rating:5,
comments:2,
createdAt:"2min ago",
views:1,
id:3,},
];



export const trending=(req,res)=> {

  return res.render("home",{pageTitle: "Home",videos})
};
export const watch =(req,res)=>{
   const {id} =req.params;
   const video = videos[id-1];
    return res.render("watch",{pageTitle: `Watching: ${video.title}`,video})}



export const getEdit =(req,res)=>{
    const {id} =req.params;
    const video = videos[id-1];
    return res.render("edit",{pageTitle: `Editing: ${video.title}`,video})}

export const postEdit=(req,res)=>{
    const {id} =req.params;
    const{title}=req.body;
    videos[id-1].title=title;
    return res.redirect(`/video/${id}`)
}

export const getUpload=(req,res)=>{
    return res.render("upload",{pageTitle:`Upload Video`})
};

export const postUpload=(req,res)=>{
    //here we will add a video to the videos array.
    const newVideo={
    title:req.body.title,
    rating:0,
    comments:0,
    createdAt:"Just now",
    views:0,
    id:videos.length+1,};
    videos.push(newVideo);
    return res.redirect("/")
};


/*export default vs export
1)export default: 하나만  export 가능 
export default trending;
👉 import시 내가 원하는 이름으로 import사용
(사용이 가능한이유는 결국  default export의 경우 한개의 파일만 가능하므로 
    node js에서 그것을 자동적으로 알고있는것)
    🤔그런데  default는왜 하나만되는걸까?
2) 각각의 변수 
export const watchVideo =(req,res)=>res.send("Watch Videos")
변수 앞에 export를 붙여주면서 한파일에서 여러개를  export해줌
: 여기서는 실제변수명(함수명)을 그대로 이용해줄것


*html을 보내보자!
export const trending=(req,res)=> res.send("Home page Videos");
의 경우 send("<h1>adas</h1>") 이런식으로 넣어주어야할 수도있지만 그렇게 진행이되기에는 
html의 분량이 길다는 문제가 생긴다 
👉그리고 결정적으로 다른 함수에도 동일한 작업을 해주어야한다는것 그리고 수정시에 일일이 진행을 
해주어야하므로 비효율적이라는 점 그래서 이러한 문제를 해결해주기위해서  pug가 함께하게된다 

*pug?
-pug는 템플릿 엔진으로 템플릿을 이용해서 뷰를 만드는 것을 도와준다*/


import express from"express";
import {watch, getEdit,postEdit, getUpload,postUpload} from "../controllers/videoControllers";

const videoRouter=express.Router();
//정규식을 이용해서 id의 형태를 지정해서  id인지 아니면 다른 문자인지를 필터링해줄 수 있음 
//정규식: 문자열로부터 특정 정보를 추출해내는 방법 
//(\d+):숫자만 가능하도록 진행 가능 


videoRouter.get("/:id(\\d+)",watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);





export default videoRouter;
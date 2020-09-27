﻿module.exports = app => {
	const {
		router,
		controller
	} = app;
	
	router.get("/test", controller.testController.test);
	
	
	router.post("/regist", controller.publicController.regist); // 注册
	router.post("/login", controller.publicController.login); // 登录
	router.get("/getuserinfo", controller.publicController.getuserinfo); // 用户登录后获取用户的信息
	
	router.post("/updateavatar", controller.personalcenterController.updateavatar); //修改头像
	router.post("/changepwd", controller.personalcenterController.changepwd); //修改密码
	router.post("/changenickname", controller.personalcenterController.changenickname); //修改昵称
	router.post("/petvlrelease", controller.personalcenterController.petvlrelease); //发布游记
	router.get("/petvldelnote", controller.personalcenterController.petvldelnote); //删除游记
	router.get("/gettravelnotes", controller.personalcenterController.gettravelnotes); //显示游记
	router.post("/submitfdb", controller.personalcenterController.submitfdb); //用户反馈
	router.get("/pcogetorderinfo", controller.personalcenterController.pcogetorderinfo); //获取订单信息
	router.get("/delhotelorder", controller.personalcenterController.delhotelorder); //删除酒店订单
	router.get("/delticketorder", controller.personalcenterController.delticketorder); //删除火车票机票订单
	
	//订票
	router.get("/getAddressByStart",controller.ticketController.getAddressByStart);
	router.get("/getDataBySome",controller.ticketController.getDataBySome);
	router.post("/bookticket",controller.ticketController.bookticket);
	
	//酒店
	router.get("/getHotelArr",controller.hotelController.getHotelArr);
	router.get("/gethotelArrByType",controller.hotelController.gethotelArrByType);
	router.post("/bookhotel",controller.hotelController.bookhotel);
	
	//攻略
	router.get("/guideline", controller.guidelineController.showstrategy);
	//点赞
	router.post("/guidelineAd", controller.guidelineController.addone);
	//提交评论
	router.post("/guidelinetocommentpost", controller.guidelineController.views);
	//显示评论
	router.get("/guidelinetocomment", controller.guidelineController.showsviews);
	
	router.post("/customTour", controller.customTourController.customTour);// 定制游
                router.get("/hotel", controller.testController.hotels);
	//管理员
	router.get("/manager", controller.testController.managers);
	router.post("/test", controller.testController.test);
	//导出飞机票
	router.get("/date",controller.testController.airports);
	router.get("/change",controller.testController.sendss);
	router.get("/changess",controller.testController.sendhotelss);
	router.get("/changeadmin", controller.testController.sendadmins);
	router.get("/delete",controller.testController.deletess);
	router.get("/deletes",controller.testController.deletehotelss);
	router.get("/deletesmanager",controller.testController.deletesmanagers);
	router.get("/tijiaos",controller.testController.airolders);
	router.get("/hoteladd",controller.testController.hoteladds);
	router.get("/airplanselect",controller.testController.airplansorders);
	router.get("/changeairplan",controller.testController.sendairplansadd);
	router.get("/deletesairplans",controller.testController.deletesairplans);
	router.get("/hotelorders",controller.testController.hotelordersss);
	router.get("/hotelorder",controller.testController.sendhotelors);
	router.get("/deleteshotels",controller.testController.deleteshotelss);
               // 路线渲染
	router.get("/percentage", controller.customTourController.percentage);
};

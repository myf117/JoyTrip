const Controller = require("egg").Controller;

class testController extends Controller {
	async test() {
		let username=this.ctx.request.body.username;
		let password=this.ctx.request.body.password;
		let res = await this.ctx.service.testService.test(username,password);
		this.ctx.response.body = res;
	}
	async airports(){
		let page=this.ctx.request.query.current;
		let res = await this.ctx.service.testService.airport(page);
		this.ctx.response.body = res;
	}
	async hotels(){
		let page=this.ctx.request.query.current;
		let res = await this.ctx.service.testService.hotel(page);
		this.ctx.response.body = res;
	}
	async managers(){
		let page=this.ctx.request.query.current;
		let res = await this.ctx.service.testService.manager(page);
		this.ctx.response.body = res;
	}
	async airplansorders(){
		let page=this.ctx.request.query.current;
		let res=await this.ctx.service.testService.airplansaddticket(page);
		this.ctx.response.body=res;
	}
	async hotelordersss(){
		let page=this.ctx.request.query.current;
		let res=await this.ctx.service.testService.hotelorders(page);
		this.ctx.response.body=res;
	}
	async sendss(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let yddates=this.ctx.request.query.yddates;
		let yadates=this.ctx.request.query.yadates;
		let ypricess=this.ctx.request.query.ypricess;
		let res=await this.ctx.service.testService.sends(ddates,
			adates,pricess,yddates,yadates,ypricess);
		this.ctx.response.body=res;
	}
	async sendhotelss(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let yddates=this.ctx.request.query.yddates;
		let yadates=this.ctx.request.query.yadates;
		let ypricess=this.ctx.request.query.ypricess;
		let res=await this.ctx.service.testService.sendhotels(ddates,
			adates,pricess,yddates,yadates,ypricess);
		this.ctx.response.body=res;
	}
	async sendadmins(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let yddates=this.ctx.request.query.yddates;
		let yadates=this.ctx.request.query.yadates;
		let ypricess=this.ctx.request.query.ypricess;
		let res=await this.ctx.service.testService.sendadmin(ddates,
			adates,pricess,yddates,yadates,ypricess);
		this.ctx.response.body=res;
	}
	async sendairplansadd(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let yddates=this.ctx.request.query.yddates;
		let yadates=this.ctx.request.query.yadates;
		let ypricess=this.ctx.request.query.ypricess;
		let res=await this.ctx.service.testService.sendairplans(ddates,
			adates,pricess,yddates,yadates,ypricess);
		this.ctx.response.body=res;
	}
	async sendhotelors(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let yddates=this.ctx.request.query.yddates;
		let yadates=this.ctx.request.query.yadates;
		let ypricess=this.ctx.request.query.ypricess;
		let res=await this.ctx.service.testService.sendhotelss(ddates,
			adates,pricess,yddates,yadates,ypricess);
		this.ctx.response.body=res;
	}
	async deletess(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let res=await this.ctx.service.testService.deletes(ddates,adates,pricess);
		this.ctx.response.body=res;
	}
	async deleteshotelss(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let res=await this.ctx.service.testService.deleteshotels(ddates,adates,pricess);
		this.ctx.response.body=res;
	}
	async deletesmanagers(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let res=await this.ctx.service.testService.deletesmanager(ddates,adates,pricess);
		this.ctx.response.body=res;
	}
	async deletehotelss(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let res=await this.ctx.service.testService.deletehotels(ddates,adates,pricess);
		this.ctx.response.body=res;
	}
	async deletesairplans(){
		let ddates=this.ctx.request.query.ddates;
		let adates=this.ctx.request.query.adates;
		let pricess=this.ctx.request.query.pricess;
		let res=await this.ctx.service.testService.deletesairplan(ddates,adates,pricess);
		this.ctx.response.body=res;
	}
	
	async airolders(){
		let aa=this.ctx.request.query.a;
		let bb=this.ctx.request.query.b;
		let cc=this.ctx.request.query.c;
		let dd=this.ctx.request.query.d;
		let ee=this.ctx.request.query.e;
		let ff=this.ctx.request.query.f;
		let gg=this.ctx.request.query.g;
		let hh=this.ctx.request.query.h;
		let ii=this.ctx.request.query.is;
		let res=await this.ctx.service.testService.airolder(aa,bb,cc,dd,ee,ff,gg,hh,ii);
		this.ctx.response.body=res;
	}
	async hoteladds(){
		let aa=this.ctx.request.query.a;
		let bb=this.ctx.request.query.b;
		let cc=this.ctx.request.query.c;
		let dd=this.ctx.request.query.d;
		let ee=this.ctx.request.query.e;
		let ff=this.ctx.request.query.f;
		let gg=this.ctx.request.query.g;
		let res=await this.ctx.service.testService.hoteladd(aa,bb,cc,dd,ee,ff,gg);
		this.ctx.response.body=res;
	}
	
}

module.exports = testController;
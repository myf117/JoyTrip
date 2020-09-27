const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");

/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */

 /* const file = this.ctx.request.files[0];
		const toFileName = "/public/test/" + Date.now() + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);
		let url = "http://localhost:9999" + toFileName; */
class testService extends Service {
	async test(username,password) {
			let sql='select username,password from username where username=? and password=?';
			let list=await this.ctx.app.mysql.query(sql,[username,password]);
			return  list;
	}
	async airport(page) {
		let sql1='select * from airplan';
		let lists=await this.ctx.app.mysql.query(sql1);
		let len = lists.length;
		let sql='select * from airplan  limit ?,10';
		let list=await this.ctx.app.mysql.query(sql,[((page-1)*10)]);
		return  {
			len:len,
			list:list
		};
}	
	async hotel(page) {
		let sql1='select * from hotel';
		let lists=await this.ctx.app.mysql.query(sql1);
		let len = lists.length;
		let sql='select * from hotel  limit ?,10';
		let list=await this.ctx.app.mysql.query(sql,[((page-1)*10)]);
		return  {
			len:len,
			list:list
		};
}
async manager(page) {
	let sql1='select * from username';
	let lists=await this.ctx.app.mysql.query(sql1);
	let len = lists.length;
	let sql='select * from username  limit ?,10';
	let list=await this.ctx.app.mysql.query(sql,[((page-1)*10)]);
	return  {
		len:len,
		list:list
	};
} 
	async airplansaddticket(page){
		let sql1='select * from airorder';
	let lists=await this.ctx.app.mysql.query(sql1);
	let len = lists.length;
	let sql='select * from airorder limit ?,10';
	let list=await this.ctx.app.mysql.query(sql,[((page-1)*10)]);
	return  {
		len:len,
		list:list
	};
	}
	async hotelorders(page) {
		let sql1='select * from hotelorder';
		let lists=await this.ctx.app.mysql.query(sql1);
		let len = lists.length;
		let sql='select * from hotelorder  limit ?,10';
		let list=await this.ctx.app.mysql.query(sql,[((page-1)*10)]);
		return  {
			len:len,
			list:list
		};
}	
	async sends(ddate,adate,price,yddates,yadates,ypricess){
		let sql='update airplan set  ddata=?,adate=?,price=? where ddata=? and adate=? and price=? ';
		let list=await this.ctx.app.mysql.query(sql,[ddate,adate,price,yddates,yadates,ypricess]);
		return list;
	}
	async sendhotels(ddate,adate,price,yddates,yadates,ypricess){
		let sql='update hotel set  hprice=?,cost=?,emptyroom=? where hprice=? and cost=? and emptyroom=? ';
		let list=await this.ctx.app.mysql.query(sql,[ddate,adate,price,yddates,yadates,ypricess]);
		return list;
	}
	async sendadmin(ddate,adate,price,yddates,yadates,ypricess){
		let sql='update username set  admin=?,username=?,password=? where admin=? and username=? and password=? ';
		let list=await this.ctx.app.mysql.query(sql,[ddate,adate,price,yddates,yadates,ypricess]);
		return list;
	}
	async sendairplans(ddate,adate,price,yddates,yadates,ypricess){
		let sql='update airorder set  ddate=?,adate=?,aprice=? where ddate=? and adate=? and aprice=? ';
		let list=await this.ctx.app.mysql.query(sql,[ddate,adate,price,yddates,yadates,ypricess]);
		return list;
	}
	async sendhotelss(ddate,adate,price,yddates,yadates,ypricess){
		let sql='update hotelorder set  intime=?,dtime=?,num=? where intime=? and dtime=? and num=? ';
		let list=await this.ctx.app.mysql.query(sql,[ddate,adate,price,yddates,yadates,ypricess]);
		return list;
	}
	async deletes(x,y,z){
		let sql='delete from airplan where ddata=? and adate=? and price=?';
		let list=await this.ctx.app.mysql.query(sql,[x,y,z]);
		return list;
	}
	async deletesairplan(x,y,z){
		let sql='delete from airorder where ddate=? and adate=? and aprice=?';
		let list=await this.ctx.app.mysql.query(sql,[x,y,z]);
		return list;
	}
	async deleteshotels(x,y,z){
		let sql='delete from hotelorder where intime=? and dtime=? and num=?';
		let list=await this.ctx.app.mysql.query(sql,[x,y,z]);
		return list;
	}
	async deletesmanager(x,y,z){
		let sql='delete from username where admin=? and username=? and password=?';
		let list=await this.ctx.app.mysql.query(sql,[x,y,z]);
		return list;
	}
	async deletehotels(x,y,z){
		let sql='delete from hotel where hprice=? and cost=? and emptyroom=?';
		let list=await this.ctx.app.mysql.query(sql,[x,y,z]);
		return list;
	}
	async airolder(a,b,c,d,e,f,g,h,is){
		let sql='insert into airplan(departure,destination,round,ddata,adate,child,price,domainair,air_name) values(?,?,?,?,?,?,?,?,?)';
		let  list=await this.ctx.app.mysql.query(sql,[a,b,c,d,e,f,g,h,is]);
		return list;
	}
	async hoteladd(a,b,c,d,e,f,g){
		let sql='insert into hotel(destination,hname,hprice,addtype,cost,emptyroom,image) values(?,?,?,?,?,?,?)';
		let  list=await this.ctx.app.mysql.query(sql,[a,b,c,d,e,f,g]);
		return list;
	}
	
}

module.exports = testService;
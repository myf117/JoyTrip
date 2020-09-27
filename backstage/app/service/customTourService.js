const Service = require("egg").Service;


class customTourService extends Service {
	async customTour(name,phone) {
		const sql = "insert into customTour(name,phone) values(?,?)";
		let r = await this.ctx.app.mysql.query(sql,[name,phone]);
		return r;
	}
	async percentage(location) {
		const sql = "select * from destination where location=? group by route_count";
		let r = await this.ctx.app.mysql.query(sql,[location]);
		const sql1 = "select * from destination where location=? ";
		let r1 = await this.ctx.app.mysql.query(sql1,[location]);
		return {r,r1};
	}
}

module.exports = customTourService;
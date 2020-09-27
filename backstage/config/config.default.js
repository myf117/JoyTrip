//cookie配置
exports.keys = "kedufhsahugiowrgj";

//post配置
exports.security = {
	csrf: {
		enable: false,
		ignoreJSON: true
	}
};

//mysql配置
exports.mysql = {
	client: {
		host: "localhost",
		port: "3306",
		user: "root",
		password: "123456", //数据库密码
		database: "joytrip", //数据库名字
	}
};

//端口号
exports.cluster = {
	listen: {
		path: "",
		port: 9999
	}
};

//跨域配置
exports.cors = {
	origin: "*",
	allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
};

exports.multipart = {
	mode: "file",
	fileSize: 9999999999 //文件大小
};

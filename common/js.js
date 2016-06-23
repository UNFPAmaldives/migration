/**/
(function() {
    metric = function(url, wait)
    {
        setTimeout(function() {
                var e = document.createElement("img");
                e.src = url;
            }, wait);
    }

    var intervals = [0, 10];
    var inlen = intervals.length;
    for (var k = 0; k < inlen; ++k)
        this.metric("https://pixel.mathtag.com/misc/img?mm_bnc&bcdv="+k, intervals[k] * 1000);
})();

//used to sync advertiser without leaking referer to final destination
	  var frm = document.createElement('iframe');
	  frm.style.visibility = 'hidden';
	  frm.style.display = 'none';
	  frm.src = "https://pixel.mathtag.com/sync/iframe?mt_adid=109699&v1=&v2=&v3=&s1=&s2=&s3=&mathid_data=%7B%22dv1%22%3A%22TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTAuMTE7IHJ2OjQyLjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvNDIuMA%3D%3D%22%2C%22dv2%22%3A%22MmY3Y2JlM2VjYTg1YjU1MzYyYzhjMmE1MTk4MjBiZWE%3D%22%2C%22dv3%22%3A%22NjNmNTQ4NTM4MTQ5NWIxNjczMDEwYmI1MWMwOWUyMmM%3D%22%2C%22dv4%22%3A%22MTQ0MHw5MDB8MTQ0MHw4NDd8MjR8fA%3D%3D%22%2C%22dv5%22%3A%22QXNpYS9LYXJhY2hp%22%2C%22dv6%22%3A%22%22%2C%22dv7%22%3A%22MA%3D%3D%22%2C%22dv8%22%3A%22dHJ1ZXx0cnVlfHRydWU%3D%22%2C%22dv9%22%3A%22fGVuLVVTfA%3D%3D%22%2C%22dv10%22%3A%22TW96aWxsYXxOZXRzY2FwZXxNYWNJbnRlbHw%3D%22%7D&mt_uuid=2c375521-e3db-4a00-a198-b23dc89cbbc5&no_iframe=1";
	  frm.setAttribute("id", "mm_sync_back_ground");
	  var trys = 0;
	  var interval = setInterval(function(){
	      if (trys++ < 20 && interval && !document.getElementById("mm_sync_back_ground"))
		  if (document.body) {
		      if (interval) {
			  clearInterval(interval);
			  interval = 0;
		       }
		      document.body.appendChild(frm);
		  }
	  }, 100);

window.MathIDSet = 'tV6Bez1/OD+A0D4YyLWtwYiwJMmcVZCVoA+9neiVMaUFmleQ1F3piA7iQVDgTZt//WxjaVerbVk0oOKtFnSDyg==';
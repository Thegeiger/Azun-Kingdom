//if (readCookie("OctoKing") != null)
//	{
//		document.location = "../page.html";
//	}

function createCookie(name,value,days) {
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

$(function() {
	$("#mage").click(function() {
		$("#class").attr("value","mage");
	});
	$("#warrior").click(function() {
			$("#class").attr("value","warrior");
	});
	$("#ranger").click(function() {
			$("#class").attr("value","ranger");
	});
});

$(function() {
	$("#humain").click(function() {
		$("#race").attr("value","humain");
	});
	$("#nain").click(function() {
			$("#race").attr("value","nain");
	});
	$("#gnome").click(function() {
			$("#race").attr("value","gnome");
	});
});

$(function autostats() {
	$("#auto").click(function() {
		if(document.getElementById("class").value == "warrior")
			{
				$("#str").attr("value","10");
				$("#dex").attr("value","6");
				$("#int").attr("value","4");
			}
		if(document.getElementById("class").value == "mage")
			{
				$("#str").attr("value","4");
				$("#dex").attr("value","4");
				$("#int").attr("value","12");
			}
		if(document.getElementById("class").value == "ranger")
			{
				$("#str").attr("value","5");
				$("#dex").attr("value","10");
				$("#int").attr("value","5");
			}
		if(document.getElementById("class").value == null)
			{
				$("#str").attr("value","1");
				$("#dex").attr("value", "1");
				$("#int").attr("value","1");
			}
	});
});

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

$(function() {
	$("#go").click(function() {
		if(document.getElementById("name").value == null)
			{
				$("#error-form").html("Tu m'as pas donné ton nom :'(");
				$("#error-form").css("padding", "10px");
				$("#error-form").css("padding-top", "0px");
				$("#error-form").css("padding-bottom", "0px");
				return false;
			}
		if(document.getElementById("class").value == null)
			{
				$("#error-form").html("Tu m'as pas donné t'as classe Rho !");
				$("#error-form").css("padding", "10px");
				$("#error-form").css("padding-top", "0px");
				$("#error-form").css("padding-bottom", "0px");
				return false;
			}
		if((parseInt(document.getElementById("str").value) + parseInt(document.getElementById("dex").value) + parseInt(document.getElementById("int").value)) != 20)
			{
				$("#error-form").html("Tu sais pas comment on met un point de stat x) ?!");
				$("#error-form").css("padding", "10px");
				$("#error-form").css("padding-top", "0px");
				$("#error-form").css("padding-bottom", "0px");
				return false;
			}
		if(document.getElementById("race").value == null)
			{
				$("#error-form").html("Tu m'as pas choisie de rhaaaaace !");
				$("#error-form").css("padding", "10px");
				$("#error-form").css("padding-top", "0px");
				$("#error-form").css("padding-bottom", "0px");
				return false;
			}
		else
			{
				var name = "pseudo=" + document.getElementById("name").value + ' ' + "class=" + document.getElementById("class").value + ' ' + "str=" + document.getElementById("str").value + ' ' + "dex=" + document.getElementById("dex").value + ' ' + "int=" + document.getElementById("int").value + ' ' + "race=" + document.getElementById("race").value + '.';
				createCookie("OctoKing", name, 10);
				document.location = "./page.html";
			}
	});
});

//				$.ajax({
//				  url: "cookie.php",
//				  type : "POST",
//				  data: { name },
//				  dataType :'html'
//				});

var stuff = {
    tete: null,
    epaule: null,
    brassard: null,
    mains: null,
    pantalon: null,
    ceinture: null,
    chaussur: null,
    arme: null,
    armeg: null,
    bijoux: null,
    cou: null,
};

var batiment = {
	fields: 3,
	ferme: 0,
	ecurie: 0,
	chevaux: 0,
	minef: 0,
	minem: 0,
	mineo: 0,
	bucheron: 0,
	forge: 0,
	caserne: 0,
	bibli: 0,
	eglise: 0,
}

var unitees = {
	mercenaire: 1,
}

var fief = {
	habitant: 8,
	bat: batiment,
	unit: unitees,
}

var player = {
    pseudo: cookie_info("pseudo="),
    classe: cookie_info("class="),
    race: cookie_info("race="),
	str: cookie_info("str="),
   	dex: cookie_info("dex="),
   	intel: cookie_info("int="),
   	item: stuff,
   	goods: fief,
   	niveau: 1,
   	xp: 0,
   	folow: null,
};

$(function () {
	//hab
	$("#add-habitant").click(function () {
		if (mony >= 50)
			{
				mony = mony - 30;
				fief.habitant = fief.habitant + 1;
				$("#habitant").html("<img width=\"15\" src=\"img/peon.png\"/>" + fief.habitant + "<small> habitant </small>");
			}
	});
	//rec
	$("#add-fields").click(function () {
		if (mony >= 200)
			{
				mony = mony - 200;
				fief.bat.fields = fief.bat.fields + 1;
				$("#nourriture").html(fief.bat.fields * 30 + fief.bat.ferme * 300);
			}
	});

	$("#add-ferme").click(function () {
		if (mony >= 1200)
			{
				mony = mony - 1200;
				fief.bat.ferme = fief.bat.ferme + 1;
				$("#ferme").html(fief.bat.ferme + " ");
				$("#nourriture").html(fief.bat.ferme * 300 + fief.bat.fields * 30 );
			}
	});

	$("#add-ecurie").click(function () {
		if (mony >= 600)
			{
				mony = mony - 600;
				fief.bat.ecurie = fief.bat.ecurie + 1;
				$("#ecurie").html(fief.bat.ecurie + " ");
			}
	});

	$("#add-chevaux").click(function () {
		if (mony >= 600)
			{
				mony = mony - 600;
				fief.bat.chevaux = fief.bat.chevaux + 1;
				$("#chevaux").html(fief.bat.chevaux + " ");
				$("#chevaux").html(fief.bat.chevaux * 5);
			}
	});
	//res
			if (document.getElementById("id_firstname").value == null || document.getElementById("id_firstname").value == "" || document.getElementById("id_firstname").value == "Prénom*") {
		$("#outform").html("<br><span>Le champ Prénom n'a pas été remplis.<span>");
		$("#outform").css("color", "red");
		$("#outform").css("text-align", "center");
		$("#outform").css({"padding-top": "15px", "padding-bottom": "15px"});
       return false;
		}
		if (document.getElementById("id_lastname").value == null || document.getElementById("id_lastname").value == "" || document.getElementById("id_lastname").value == "Nom*") {
		$("#outform").html("Le champ Nom n'a pas été remplis.");
		$("#outform").css("color", "red");
		$("#outform").css({"text-align": "center", "background-color": "#eeeeee"});
		$("#outform").css({"margin-top": "10px", "-moz-border-radius": "3px", "-webkit-border-radius": "3px", "border-radius": "3px", "border": "1px solid #ccc"});
       return false;
		}

	$("#add-minef").click(function () {
		if (mony >= 1000)
			{
				mony = mony - 1000;
				fief.bat.minef = fief.bat.minef + 1;
				$("#minef").html(fief.bat.minef + " ");
				$("#fer").html(fief.bat.minef * 5);
			}
	});

	$("#add-minem").click(function () {
		if (mony >= 10000)
			{
				mony = mony - 10000;
				fief.bat.minem = fief.bat.minem + 1;
				$("#minem").html(fief.bat.minem + " ");
				$("#mitrille").html(fief.bat.minem * 5);
			}
	});

	$("#add-mineo").click(function () {
		if (mony >= 5000)
			{
				mony = mony - 5000;
				fief.bat.mineo = fief.bat.mineo + 1;
				$("#mineo").html(fief.bat.mineo + " ");
			}
	});

	$("#add-bucheron").click(function () {
		if (mony >= 1000)
			{
				mony = mony - 1000;
				fief.bat.bucheron = fief.bat.bucheron + 1;
				$("#bucheron").html(fief.bat.bucheron + " ");
				$("#bois").html(fief.bat.bucheron * 5);
			}
	});
	//milit
	$("#add-forge").click(function () {
		if (mony >= 5000)
			{
				mony = mony - 5000;
				fief.bat.forge = fief.bat.forge + 1;
				$("#forge").html(fief.bat.forge + " ");
			}
	});

	$("#add-caserne").click(function () {
		if (mony >= 500)
			{
				mony = mony - 500;
				fief.bat.caserne = fief.bat.caserne + 1;
				$("#caserne").html(fief.bat.caserne + " ");
			}
	});
	//cult
	$("#add-eglise").click(function () {
		if (mony >= 20000)
			{
				mony = mony - 20000;
				fief.bat.eglise = fief.bat.eglise + 1;
				$("#eglise").html(fief.bat.eglise + " ");
			}
	});

	$("#add-bibli").click(function () {
		if (mony >= 3000)
			{
				mony = mony - 3000;
				fief.bat.bibli = fief.bat.bibli + 1;
				$("#bibli").html(fief.bat.bibli + " ");
			}
	});
});

var mony = 1000000000;

	setTimeout(function aff_mony() {
		setInterval(function() {
			var per_s = mony_fields() * 100;
			mony = mony + per_s / 100;
			$("#argent").html(Math.round(mony) + "<small> golds </small>" + "<small>(golds par seconde : " + per_s + ")</small>");
		}, 10);
	});


$(function(){
    $("#habitant").html("<img width=\"15\" src=\"img/peon.png\"/>" + fief.habitant + "<small> habitant </small>");
	$("#bois").html(fief.bat.bucheron * 5);
	$("#fer").html(fief.bat.minef * 5);
	$("#mitrille").html(fief.bat.minem * 5);
	$("#chevaux").html(fief.bat.chevaux * 5);
	$("#nourriture").html(fief.bat.fields * 30);
	$("#champ").html(fief.bat.fields + " ");
	$("#argent").html(Math.round(mony) + "<small> golds </small>");
});


function mony_fields() {
	var can_filled;

	can_filled = fief.habitant / 3;
	if (can_filled >= fief.bat.fields)
		return (fief.bat.fields * 0.015);
	return ((Math.round(((fief.habitant) * 0.0050) * 1000) / 1000));
}

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

function get_info(i, cookie) {
	var info;
	var j = i;

	while (cookie[i] != ' ' && cookie[i] != '\0' && cookie[i] != '.')
	{
		++i;
	}
	info = cookie;
	info = info.slice(j, i);
	return (info);
}

function cookie_info(name) {
	var i = 0;
	var cookie = readCookie("OctoKing");
	var j;

	if (cookie == null)
		return ;
	while (cookie[i])
		{
			j = 0;
			while (cookie[i] == name[j])
				{
					++j;
					++i;
					if (name[j] == '=')
						{
							return (get_info(i + 1, cookie));
						}
				}
			if (cookie[i] == '.')
				return;
			++i;
		}
}
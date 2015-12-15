$(function () {
	$( '#name' ).html("Equipement de " + cookie_info("pseudo="));
});

$(function () {
	$( '#info' ).html(cookie_info("race=") + ', ' + cookie_info("class=") + ", ici niveau si j'en met un.");
});

$(function () {
	$( '#stats' ).html("force = " + cookie_info("str=") + '<br>' + "agilité = " + cookie_info("dex=") + '<br>' + "intelligence = " + cookie_info("int=") + '<br>' + "peut etre plus genre %cc <br> ou morale donnée au troupe");
});

$(function () {
	$( '#compagnon' ).html("Val : bonus de 100% contre les mages, ne rate jamais sont tire" + '<br>' + "Richar : voleur pas discret mais foutrement badass !");
});

var stuff = {
    tete: null,
    epaule: null,
    brassard: null,
    mains: null,
    pantalon: null,
    ceinture: null,
    chaussure: null,
    arme: null,
    bijoux: null,
    cou: null,
};

$(function () {
	$( '#item' ).html("tete : " + ' ' + '<br>' + "epaule : " + ' ' + '<br>' + "brassard : " + ' ' + '<br>' + "mains : " + ' ' + '<br>' + "pantalon : " + ' ' + '<br>' + "ceinture : " + ' ' + '<br>' + "chaussure : " + ' ' + '<br>' + "arme : " + ' ' + '<br>' + "bijoux : " + ' ' + '<br>' + "cou : " + ' ');
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



$(function(resortWeather) {
	//woeid's
	var idGerardmer = 592681;
	var idMetabief = 611307;
	var idTignes = 628668;
	var idChamrousse = 584373;
	
	//gerardmer
	$.simpleWeather({
		woeid: idGerardmer,
		unit: "c",
		success: function(weather) {
			
			$("#weather-gerardmer .title").html(weather.title + " | <a target=\"_blank\" href=" + weather.link + ">Full Forecast</a>");
			
			$("#weather-gerardmer .temp").html("<span class=\"first\">" + weather.temp + "&deg;" + weather.units.temp + "</span>" + "<span class=\"second\">high of: " + weather.high + "&deg;"  + weather.units.temp + " | low of: " + weather.low + "&deg;" + weather.units.temp + "</span>");
			
			$("#weather-gerardmer .winds").html("<span>Winds</span>" + weather.wind.speed + weather.units.speed + " | heading: " + weather.wind.direction + " | with a chill factor of: " + weather.wind.chill + "&deg;" + weather.units.temp);
			
		},
		
		error: function(error) {
			$("#weather-gerardmer").html("<p>" + error + "</p>");
		}
	});
	
	//metabief
	$.simpleWeather({
		woeid: idMetabief,
		unit: "c",
		success: function(weather) {
			
			$("#weather-metabief .title").html(weather.title + " | <a target=\"_blank\" href=" + weather.link + ">Full Forecast</a>");
			
			$("#weather-metabief .temp").html("<span class=\"first\">" + weather.temp + "&deg;" + weather.units.temp + "</span>" + "<span class=\"second\">high of: " + weather.high + "&deg;"  + weather.units.temp + " | low of: " + weather.low + "&deg;" + weather.units.temp + "</span>");
			
			$("#weather-metabief .winds").html("<span>Winds</span>" + weather.wind.speed + weather.units.speed + " | heading: " + weather.wind.direction + " | with a chill factor of: " + weather.wind.chill + "&deg;" + weather.units.temp);
			
		},
		
		error: function(error) {
			$("#weather-metabief").html("<p>" + error + "</p>");
		}
	});
	
	//tignes
	$.simpleWeather({
		woeid: idTignes,
		unit: "c",
		success: function(weather) {
			
			$("#weather-tignes .title").html(weather.title + " | <a target=\"_blank\" href=" + weather.link + ">Full Forecast</a>");
			
			$("#weather-tignes .temp").html("<span class=\"first\">" + weather.temp + "&deg;" + weather.units.temp + "</span>" + "<span class=\"second\">high of: " + weather.high + "&deg;"  + weather.units.temp + " | low of: " + weather.low + "&deg;" + weather.units.temp + "</span>");
			
			$("#weather-tignes .winds").html("<span>Winds</span>" + weather.wind.speed + weather.units.speed + " | heading: " + weather.wind.direction + " | with a chill factor of: " + weather.wind.chill + "&deg;" + weather.units.temp);
			
		},
		
		error: function(error) {
			$("#weather-tignes").html("<p>" + error + "</p>");
		}
	});
	
	//chamrousse
	$.simpleWeather({
		woeid: idChamrousse,
		unit: "c",
		success: function(weather) {
			
			$("#weather-chamrousse .title").html(weather.title + " | <a target=\"_blank\" href=" + weather.link + ">Full Forecast</a>");
			
			$("#weather-chamrousse .temp").html("<span class=\"first\">" + weather.temp + "&deg;" + weather.units.temp + "</span>" + "<span class=\"second\">high of: " + weather.high + "&deg;"  + weather.units.temp + " | low of: " + weather.low + "&deg;" + weather.units.temp + "</span>");
			
			$("#weather-chamrousse .winds").html("<span>Winds</span>" + weather.wind.speed + weather.units.speed + " | heading: " + weather.wind.direction + " | with a chill factor of: " + weather.wind.chill + "&deg;" + weather.units.temp);
			
		},
		
		error: function(error) {
			$("#weather-chamrousse").html("<p>" + error + "</p>");
		}
	});
	
	
});


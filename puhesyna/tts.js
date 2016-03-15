var vcs = document.getElementById("voices");
vcs.multiple = false;

var voiceList = [];


chrome.tts.getVoices(function(voice_array) {
	for(var i = 0; i < voice_array.length; i++) {
		var option = document.createElement("option");
		
		option.text = String(voice_array[i].lang + " " + voice_array[i].gender);
		option.value = i;
	
		vcs.add(option);
		
		var voice = { "lang" : String(voice_array[i].lang) , "gender" : voice_array[i].gender };
		
		voiceList.push(voice);
	}
});


var text = document.getElementById("text_input").elements;

function speak() {
	var ptc = document.getElementById("pitch");
	var rte = document.getElementById("rate");
	var langInput, genInput, ptcInput, rateInput, textInput;
	
	langInput = String(voiceList[vcs.selectedIndex].lang);
	genInput = String(voiceList[vcs.selectedIndex].gender);
	
	ptcInput = Number(ptc["pit"].value * 0.017 + 0.1);
	rateInput = Number(rte["rte"].value * 0.019 + 0.1);

	textInput = text[0].value;

	var options = { "lang" : langInput, "gender" : genInput, "pitch" : ptcInput, "rate" : rateInput };
	
	chrome.tts.speak(textInput, options);
}


function stop() {
	chrome.tts.stop();
}


function clear_text() {
	text[0].value = " ";
}


var _text = document.getElementById("text_input").elements;

_text[1].addEventListener("click", function() { speak(); }, false);
_text[2].addEventListener("click", function() { stop(); }, false);
_text[3].addEventListener("click", function() { clear_text(); }, false);

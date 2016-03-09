function speak {
    var lang = document.getElementById("language").elements;
    var gen = document.getElementById("gender").elements;
    var ptc = document.getElementById("pitch").elements;
    var text = document.getElementById("tts_text").elements;
    
    var langInput, genInput, ptcInput, textInput;
    
    for(i = 0; i < lang.length; i++) {
        if(lang[i].checked == true)
            langInput = String(lang[i].value);
    }
    
    for(i = 0; i < gen.length; i++) {
        if(gen[i].checked == true)
            genInput = String(gen[i].value);
    }
    
    ptcInput = Number(0.017 * ptc[0].value + 0.1);
    
    textInput = String(text[0].value);
    
    var options = { "lang" : langInput, "gender" : genInput, "pitch" : ptcInput };
    
    chrome.tts.speak(textInput, options);
}

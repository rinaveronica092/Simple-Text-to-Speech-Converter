
let speech = new SpeechSynthesisUtterance();


// to change voice
let voices=[];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = ()=>{

    // getvoices gives options with all voices available on the device
    voices=window.speechSynthesis.getVoices();

    //voices[0] - by default it plays with the first voice
    speech.voice = voices[0];
    voices.forEach((voice,i) => (voiceSelect.options[i])= new Option(voice.name,i));
};

//change event on dropdown so that u can choose different voices
//u can see the list be4 this, but it wouldnt have worked when u selected it
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

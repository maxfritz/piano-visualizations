function start_mod(){
  $(".start_prompt").append("<p>Starting...</p>")

  setTimeout(startmylilcircles(),750);
  setTimeout(()=>{
  $(".start_prompt").remove();},1000)
}

function removeOptions(selectbox)
{
  var i;
  for(i = selectbox.options.length - 1 ; i >= 1 ; i--)
  {
      selectbox.remove(i);
  }
}

function load_midi() {
  console.log("Midi inputs refreshed!");

  var midi_selector = document.getElementById("midi_selector");
  removeOptions(midi_selector);

  for(var i in WebMidi.inputs){
    var option = document.createElement("option");
    option.text = WebMidi.inputs[i].name;
    midi_selector.add(option);
}}

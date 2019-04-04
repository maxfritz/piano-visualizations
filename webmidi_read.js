WebMidi.enable(function(err) {
  if (err) {
    console.log("Could not enable WebMidi.");
  }

  console.log(WebMidi.inputs);

  var input = WebMidi.getInputByName("mio");
  console.log(input)

  input.addListener('noteon',"all", noteon);
  input.addListener('noteoff',"all", noteoff);

  function noteon(e){
    console.log(e.data); //intArray(e) = [144on|128off,note,velocity]
    console.log(e.note) // number, notename, octave 21:108 c1:24,36,38,c4
  }
  function noteoff(e){
    console.log(e.data,e.note);
  }
}
);

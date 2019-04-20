function startmylilcircles(){
    var el = document.documentElement.getBoundingClientRect()
    var width = el.width
    var height = el.height

    console.log(width,height)

     // keys
     var dataset = [];
		 var circles = [];
		 var svg = d3.select("body").append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("class", "svg-container");

				 var background = svg.append("rect")
				 .attr("height", "100%")
				 .attr("width", "100%")
				 .attr("fill","black")

     for (var i=0; i<88; i++){
       dataset.push([i,0]);
			 circles.push(svg.append("circle")
	          .attr("cx", 10+(width/89)*i)
	          .attr("cy", height)
	          .attr("r", 0)
						.attr("id",`c${i}`)
	          .attr("fill", "#7CE8D5"));
     }

     var input = WebMidi.getInputByName("mio");
     console.log(input)

     input.addListener('noteon',"all", note_shift);
     input.addListener('noteoff',"all", note_shift);

     //e.data -> [144on|128off,note,velocity]
     //e.note -> number, name, octave 21:108 c1:24,36,38,c4
     function note_parse(e){
       console.log(e.data,e.note)
       }

       input.addListener('noteon',"all", note_shift);
       input.addListener('noteoff',"all", note_shift);

      function getRandomColor() {
         var chars = '0123456789ABCDEF';
         var color = '#';
         for (var i = 0; i < 6; i++) {
           color += chars[Math.floor(Math.random() * 16)];
         }
         return color;
       }

     function note_shift(note_in){
       var note = note_in.data;
       var note_values = note_in.note;
       var velocity = note[2];
       var code = note[0];
       var num = note_values.number - 21;
       var selection = d3.select(`#c${num}`)

       if(code==144) {
       d3.select(`#c${num}`)
        .transition()
        .attr("fill", getRandomColor)
        .attr("fill-opacity", 0.6)
        .attr("r",(20+velocity/2))
        .duration(500)
        .attr("cy", height-((height/128)*velocity))
        .transition()
        .attr("fill-opacity",0)
        .duration(2000)}
        else {
          selection
           .transition()
           .delay(velocity*5)
           .duration(800)
           .attr("fill-opacity",0)
           .attr("r",0) }
        }
   }

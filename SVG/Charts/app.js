let minYear = birthData[0].year
let maxYear = birthData[birthData.length-1].year 
let height = 600;
let width = 600;
let numBar = 12;


let barPadding = 10;
let barWidth = width / numBar - barPadding



d3.select('input')
    .property('min', minYear)
    .property("max", maxYear)
    .property("value", minYear)

d3.select('svg')
        .style("background", "black")
        .attr("height", height)
        .attr("width", width)
  .selectAll("rect")
  .data(birthData.filter(d => d.year === minYear))
  .enter()
  .append("rect")
      .attr("height", d => d.births / 2.5e6 * height)
      .attr("width", barWidth)
      .attr("y",  d => height - d.births / 2.5e6 * height)
      .attr("x", (d,i)=> (barWidth + barPadding) * i)
      .attr("fill", "cyan")

d3.select("input")
  .on("input",  function(){
      var year = +d3.event.target.value;
      d3.selectAll("rect")
      .data(birthData.filter(d => d.year === year))
  
        .attr("height", d => d.births / 2.5e6 * height)
        .attr("y",  d => height - d.births / 2.5e6 * height)



  })
        
               



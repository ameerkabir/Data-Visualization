var quotes = [
    {
      quote: "I see dead people.",
      movie: "The Sixth Sense",
      year: 1999,
      rating: "PG-13"
    }, {
      quote: "May the force be with you.",
      movie: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      rating: "PG"
    }, {
      quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
      movie: "Dirty Harry",
      year: 1971,
      rating: "R"
    }, {
      quote: "You had me at 'hello.'",
      movie: "Jerry Maguire",
      year: 1996,
      rating: "R"
    }, {
      quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
      movie: "Finding Nemo",
      year: 2003,
      rating: "G"
    }
  ];
  const colorCodes = {
  "G":   "#808000", 
 	"PG": "#ff0f00", 
 	"PG-1 3": "cyan",
  "R": "#0f00ff"
 
  }

d3.select('#quotes')
     .style('list-style', 'non')
  .selectAll('li')
  .data(quotes)
  .enter()
  .append('li')
  .text(d=> `${d.quote} ${d.movie} ${d.rating}`)
     .style('background', d =>  colorCodes[d.rating])
     .style('background', d =>  'cyan')
  

var filterdQuotes = quotes.filter(movie => movie.rating !== "R")


 d3.selectAll('li')
    .data(filterdQuotes, d => d.quote)
    .exit()
    .remove()



    


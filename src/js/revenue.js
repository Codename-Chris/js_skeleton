// import * from 'd3';

// loads data / add axes
d3.csv("/data/data1.csv").then(function(data) {
    console.log(data[0]);
});



// below code renders bar graph properly without loading data from csv
// document.addEventListener("DOMContentLoaded", () => {
//     const dataset = [
//         { year: "2012", revenue: 130},
//         { year: "2014", revenue: 194},
//         { year: "2015", revenue: 325},
//         { year: "2016", revenue: 493},
//         { year: "2017", revenue: 655},
//         { year: "2018", revenue: 865},
//         { year: "2019", revenue: 1096}
//     ]
//     // sorts data in ascending order
//     const data = dataset.sort (function(a, b) {
//         return d3.ascending(a.revenue,b.revenue)
//     })
    
//     //set params m/h/w
//     const margin = 50
//     const height = window.innerHeight - margin * 3;
//     const width = window.innerWidth - margin * 6.8;

//     // y axis elements
//     const yAxis = d3.scaleLinear().range([height, 0]).domain([0, 1200]);

//     // x axis elements
//     const xAxis = d3.scaleBand()
//         .range([0, width])
//         .domain(data.map((d) => d.year))
//         .padding(0.3);

//     // draws tick lines throughout graph from y axis 
//     const yLines = () => d3.axisLeft().scale(yAxis)

//     //select svg by classname
//     const myBar = d3.select("#yearGraph")
//         .append('g')
//         .attr('transform', `translate(${margin}, ${margin})`)

//     // draws y axis elements
//     myBar.append('g')
//         .call(d3.axisLeft(yAxis));

//     //draws x axis elements
//     myBar.append('g')
//         .attr("transform", `translate(0, ${height})`)
//         .call(d3.axisBottom(xAxis));

//     //draws m on axis
//     myBar.append('g')
//         .attr('class', 'myBar-lines')
//         .call(yLines()
//             .tickSize(-width)
//             .tickFormat('')
//         )
//     //draws bars
//     myBar.selectAll()
//         .data(data)
//         .enter()
//         .append('g')
//         .append("rect")
//         .attr("class", "bar")
//         .attr("x", g => xAxis(g.year))
//         .attr("y", g => yAxis(g.revenue))
//         .attr("height", g => height - yAxis(g.revenue))
//         .attr("width", xAxis.bandwidth())
       
//     // draws number of each graph above bar
//     myBar.selectAll()
//         .data(data)
//         .enter()
//         .append('g')
//         .append("text")
//         .attr("class", "myBar-val")
//         .attr("x", g => xAxis(g.year) + xAxis.bandwidth() / 2)
//         .attr("y", g => yAxis(g.revenue) - 5 )
//         .attr("text-anchor", "middle")
//         .style("font-weight","bold")
//         .style("fill", "darkblue")
//         .text(g => `${g.revenue}`);

//     // draws titles and lables for axes and graph
//     d3.select("#yearGraph")
//         .append("text")
//         .attr("class", "year-title")
//         .attr("x", width / 2 + margin)
//         .attr("y", 25)
//         .attr("text-anchor", "middle")
//         .attr("stroke", "darkblue")
//         .style("fill", "darkblue")
//         .style("font-size", "20px")
//         .text("Esports Market Revenue");

//     d3.select("#yearGraph")
//         .append("text")
//         .attr("class", "year-source")
//         .attr("x", width / 2 + margin)
//         .attr("y", 40)
//         .attr("text-anchor", "middle")
//         .style("fill", "darkblue")
//         .text("Source: https://www.statista.com/");
        
//     d3.select("#yearGraph")
//         .append("text")
//         .attr("class", "year-label")
//         .attr("x", width / 2 + margin)
//         .attr("y", height + margin * 1.7)
//         .attr("text-anchor", "middle")
//         .attr("stroke", "darkblue")
//         .style("font-size", "12px")
//         .style("fill","darkblue")
//         .text("Year");

//     d3.select("#yearGraph")
//         .append("text")
//         .attr("class", "year-label")
//         .attr("x", -(height / 2))
//         .attr("y", margin / 4.5)
//         .attr("transform", "rotate(-90)")
//         .attr("text-anchor", "middle")
//         .attr("stroke", "darkblue")
//         .style("font-size", "12px")
//         .style("fill", "yellow")
//         .text("Revenue in Millions U.S. Dollars");



// below code does not work*
// drawing a line and making axes ()
    // svg.append("path")
    //     .data([data])
    //     .attr('class','line')
    //     .attr("d",line)

    // svg.append("g")
    //     .attr("transform", "translate(0," + height + ")")
    //     .call(d3.axisBottom(xAxis))

    // svg.append("g")
    //     .data([data])
// });


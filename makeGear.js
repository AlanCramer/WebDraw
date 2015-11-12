(function() {
    
myApp.update = function(gearData, pxPerIn) {
    
    var d3arc = d3.svg.arc()
        .innerRadius(function(d) { 
            return d.inR*pxPerIn; })
        .outerRadius(function(d) { 
            return d.outR*pxPerIn; })
        .startAngle(0)
        .endAngle(2*Math.PI);
    
    var gears = svg.selectAll(".gear")
        .data(gearData)
        ;
    
    gears
        .enter()
        .append("g")
        .attr("class", "gear")
        ;

    gears
        .attr("transform", function(d) { return "translate (" + d.x*pxPerIn + ", " + d.y*pxPerIn + ")";})
        .append("path")
        .attr("d", d3arc)
        .style("fill", function(d) {return d.color})
        ;
        
    var tooth = gears.selectAll(".tooth")
        .attr("class", "tooth")
        .data(function(d) { return d3.range(d.toothCt); })
    ;    
     
    tooth
        .enter()
        .append("rect")
        .attr("transform", function(d,i) { 
            var pn = d3.select(this.parentNode);
            var pnd = pn.datum();
            return " rotate(" +360*i/pnd.toothCt + ")" ;})
        .attr("x", function(d) { 
            var pn = d3.select(this.parentNode);
            var pnd = pn.datum();
            return  -pnd.toothW*pxPerIn/2 } )
        .attr("y", function(d) {
            var pn = d3.select(this.parentNode);
            var pnd = pn.datum();
            return pnd.outR*pxPerIn;})
        .attr("width", function(d) { 
            var pn = d3.select(this.parentNode);
            var pnd = pn.datum();
            return pnd.toothW*pxPerIn; } )
        .attr("height", function(d) { 
            var pn = d3.select(this.parentNode);
            var pnd = pn.datum();
            return pnd.toothL*pxPerIn; } )
        .style("fill", function(d) { 
            var pn = d3.select(this.parentNode);
            var pnd = pn.datum();
            return pnd.color; })
    ;
        

    var rng = d3.range(gearData[0].toothCt);
    var teeth = gears.selectAll("tooth")
        

    return gears;
}

})();

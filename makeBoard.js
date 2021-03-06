(function() {
    
//myApp.makeBoard = function (width, height, pxPerIn, color, fjStarts) {
myApp.update = function(boardData) {
    
    var boards = svg.selectAll(".board")
        .data(boardData)
        ;
    
    boards
        .enter()
        .append("g")
        .attr("class", "board")
        .append("rect")
        ;
        
     var brect = boards.select("rect")
        .transition()
        .duration(3000)
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", function(d, i) { return d.width * d.pxPerIn; } )
        .attr("height", function(d, i) { return d.height * d.pxPerIn; } )
        .style("fill", function(d) { return d.color; } )
        ;

    // this should never happen
    boards.exit().remove();
    
    // hmm pxPerIn is global? fingerLength?
    // make separate function for each board side?
    var fingerJts = myApp.fingerJoint()
        .fingerWidth(.5*pxPerIn*fingerLength )
        .fingerHeight(.25*pxPerIn ) // quarter inch material
        .radius(.125*pxPerIn ) // eighth inch diam bit
        ; // returns function 
    
    var lfjs = boards.selectAll(".leftFingerJoint")
        .data(function(d) { return d.fjStarts} );
          
    lfjs.enter()
        .append("g")
        .attr("class", "leftFingerJoint")
        .attr("transform", "translate (0,0) rotate(-90)" )
        ;
    
    lfjs.exit().remove();
    
    lfjs
        .call(fingerJts);
        
    var rfjs = boards.selectAll(".rightFingerJoint")
        .data(function(d) { return d.fjStarts} );
          
    rfjs.enter()
        .append("g")
        .attr("class", "rightFingerJoint")
        ;

    rfjs.exit().remove();    
        
    rfjs
        .transition()
        .duration(3000)
        .attr("transform", function(d) {
        
            // get the data of the parent (the board group) for this joint 
            // hmm, this doesn't feel right ...
            var brdData = d3.select(this.parentNode).data()[0];
            
            return "translate (" + 
                (brdData.width * brdData.pxPerIn) + ", " + 
                (brdData.height * brdData.pxPerIn) + ") rotate(90)";
        })
        .call(fingerJts)
        
        ;        

    return boards;
}

})();

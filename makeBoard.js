
myApp.makeBoard = function (boxWidth, boxHeight, pxPerIn, color, fjStarts) {

    var board = svg.append("g");
    
    board.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", boxWidth*pxPerIn)
        .attr("height", boxHeight*pxPerIn)
        .style("fill", color)
        ;
    
    var fingerJts = myApp.fingerJoint()
        .fingerWidth(.5*pxPerIn)
        .fingerHeight(.25*pxPerIn) // quarter inch material
        .radius(.08*pxPerIn) // eighth inch diam bit
        ; // returns function 
    
    var lfjs = board.selectAll(".leftFingerJoint")
        .data(fjStarts);
          
    lfjs.enter()
        .append("g")
        .attr("class", "leftFingerJoint")
        .attr("transform", "translate (0,0) rotate(-90)" )
        .call(fingerJts)
        ;
        
    var rfjs = board.selectAll(".rightFingerJoint")
        .data(fjStarts);
          
    rfjs.enter()
        .append("g")
        .attr("class", "rightFingerJoint")
        .attr("transform", "translate (" + 
            (boxWidth*pxPerIn) + ", " + 
            (boxHeight*pxPerIn) + ") rotate(90)" )
        .call(fingerJts)
        ;        

    return board;
}
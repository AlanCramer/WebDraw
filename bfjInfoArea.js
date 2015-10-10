

// takes pxPerIn, boxWidth,boxHeight and boxLength, and a onBoxDimChange function
// currently expects those to be globals!?!?
 
var buildInfoArea = function () {

    var infoArea = d3.select("body")
        .append("div")
        .attr("id", "infoArea")
        ;
    
    var inputArea = infoArea.append("div")
        .attr("id", "inputArea");
    
    var row0 = inputArea.append("div")
        .attr("class", "inputRow");
        
    row0    
        .append("label")
        .attr("class", "inputLabel")
        .text("Pixels Per Inch: ");
    
    row0
        .append("input")
        .attr("id", "pxPerIn")
        .attr("type", "text")
        .attr("value", pxPerIn)
        .on("change", myApp.onBoxDimChange)
        ;    

    
    var row1 = inputArea.append("div")
        .attr("class", "inputRow");
        
    row1
        .append ("label")
        .attr("class", "inputLabel")
        .text("Box Width")
        ;
        
    row1
        .append("input")
        .attr("id", "boxWidth")
        .attr("type", "text")
        .attr("value", boxWidth)
        .on("change", myApp.onBoxDimChange)
        ;
        
    var row2 = inputArea.append("div")
        .attr("class", "inputRow");
    
    row2
        .append ("label")
        .attr("class", "inputLabel")
        .text("Box Length")
        ;
        
    row2
        .append("input")
        .attr("id", "boxLength")
        .attr("type", "text")
        .attr("value", boxLength)
        .on("change", myApp.onBoxDimChange)
        ;    
        
    var row3 = inputArea.append("div")
        .attr("class", "inputRow");        
        
    row3
        .append ("label")
        .attr("class", "inputLabel")
        .text("Box Height")
        ;
        
    row3
        .append("input")
        .attr("id", "boxHeight")
        .attr("type", "text")
        .attr("value", boxHeight)
        .on("change", myApp.onBoxDimChange)
        ;
        
    var row4 = inputArea.append("div")
        .attr("class", "inputRow");        
        
    row4
        .append ("label")
        .attr("class", "inputLabel")
        .text("Finger Length")
        ;
        
    row4
        .append("input")
        .attr("id", "fingerLength")
        .attr("type", "text")
        .attr("value", fingerLength)
        .on("change", myApp.onBoxDimChange)
        ;    
        
}

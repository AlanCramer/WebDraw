(function() {

    myApp.makeBoardData = function(boxWidth, boxLength, boxHeight, fingerLength) {
    
        var bd = [];
        
        var fingerCt = Math.floor(boxHeight/fingerLength);
        var widthStarts = d3.range(0, boxHeight+fingerLength, fingerLength);
        var lengthStarts = d3.range(fingerLength/2, boxHeight+fingerLength/2, fingerLength);
        
        bd.push(
            {
                width    : boxWidth,
                height   : boxHeight,
                pxPerIn  : pxPerIn,
                color    : "#944",
                fjStarts : widthStarts 
            }
        );
    
        bd.push(        
            {
                width    : boxLength,
                height   : boxHeight,
                pxPerIn  : pxPerIn,
                color    : "#449",
                fjStarts : lengthStarts 
            }   
        );            
    
        return bd;
    };

})();
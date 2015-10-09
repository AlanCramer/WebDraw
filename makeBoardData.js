(function() {

    myApp.makeBoardData = function(boxWidth, boxLength, boxHeight, spacings) {
    
        var bd = [];
        
        bd.push(
            {
                width    : boxWidth,
                height   : boxHeight,
                pxPerIn  : pxPerIn,
                color    : "#944",
                fjStarts : [0,1,2,3] 
            }
        );
    
        bd.push(        
            {
                width    : boxLength,
                height   : boxHeight,
                pxPerIn  : pxPerIn,
                color    : "#449",
                fjStarts : [0.5,1.5,2.5] 
            }   
        );            
    
        return bd;
    };

})();
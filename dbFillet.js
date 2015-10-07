
// dbfillet trying to emulate d3.js style, but without imports
// still have namespace concerns 

(function() {

    MyApp.dbFillet = function() {
   
        var height  = 1   * pxPerIn,
            width   = .5  * pxPerIn, 
            radius  = .15 * pxPerIn;

        function dbFillet(g) {
            g.each(function() {
            
                var g = d3.select(this);
                
                g.append("rect")
                    .attr("x", -width/2)
                    .attr("y", 0)
                    .attr("width", width)
                    .attr("height", height)
                    .style("fill", "#888")
                    ;
            
                g.append("circle")
                    .attr("cx", -width/2)
                    .attr("cy", radius)
                    .attr("r", radius)
                    .style("fill", "#888")
                    ;
                    
                g.append("circle")
                    .attr("cx", width/2)
                    .attr("cy", radius)
                    .attr("r", radius)
                    .style("fill", "#888")
                    ;
                           
            }); // g.each

            // configuration goes here
            
        }; // dbFillet
        
        dbFillet.width = function(x) {
            if (!arguments.length) return width;
            width = x;
            return dbFillet;
        };
        dbFillet.height = function(x) {
            if (!arguments.length) return height;
            height = x;
            return dbFillet;
        };        
        dbFillet.radius = function(x) {
            if (!arguments.length) return radius;
            radius = x;
            return dbFillet;
        };
        
        return dbFillet;
    }; // MyApp.dbFillet

})(); // call the outermost function


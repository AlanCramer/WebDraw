(function() {

    // this is acutally just another dbFillet with W orientation 
    // instead of (upside down) T orientation

    myApp.fingerJoint = function() {
    
        var fingerHeight  = 1 * pxPerIn,
            fingerWidth   = 1 * pxPerIn, 
            radius  = .125 * pxPerIn,
            fingerLength = 1 * pxPerIn, 
            // startsMale = true; 
            //distance = 10 *pxPerIn
            fillColor = "#fff";
            ;
        
        // really fillet
        function fingerJoint(g) {
            g.each(function(d) {
            
                var g = d3.select(this);
                
                var fjrect = g.selectAll(".fjRect")
                    .data([d]);
                    
                fjrect.enter()
                    .append("rect")
                    .attr("class", "fjRect");
    
                fjrect
                    .attr("x", function(d) { 
                        return -d*pxPerIn-fingerWidth/2; })
                    .attr("y", 0)
                    .attr("width", fingerWidth)
                    .attr("height", fingerHeight)
                    .style("fill", fillColor)
                    ;
                
                fjrect.exit().remove();
                
                var fjcircA = g.selectAll(".fjCircA")
                    .data([d]);
                 
                fjcircA.enter()
                    .append("circle")
                    .attr("class", "fjCircA");
                    
                fjcircA
                    .attr("cx", function(d) { return -d*pxPerIn +radius-fingerWidth/2; })
                    .attr("cy", fingerHeight)
                    .attr("r", radius)
                    .style("fill", fillColor)
                    ;

                fjcircA.exit().remove();

                    
                var fjcircB = g.selectAll(".fjCircB")
                    .data([d]);
                    
                fjcircB.enter()
                    .append("circle")
                    .attr("class", "fjCircB");
                
                fjcircB
                    .attr("cx", function(d) { return -d*pxPerIn + fingerWidth/2-radius; })
                    .attr("cy", fingerHeight)
                    .attr("r", radius)
                    .style("fill", fillColor)
                    ;
                    
                fjcircB.exit().remove();  
                
            }) // each g
        } // fingerJoint 

        fingerJoint.fingerWidth = function(x) {
            if (!arguments.length) return fingerWidth;
            fingerWidth = x;
            return fingerJoint;
        };
        fingerJoint.fingerHeight = function(x) {
            if (!arguments.length) return fingerHeight;
            fingerHeight = x;
            return fingerJoint;
        };
        fingerJoint.radius = function(x) {
            if (!arguments.length) return radius;
            radius = x;
            return fingerJoint;
        };
        
        return fingerJoint;
    }
    
})();

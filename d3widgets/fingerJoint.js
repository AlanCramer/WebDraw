(function() {

    // this is acutally just another dbFillet with W orientation 
    // instead of (upside down) T orientation

    myApp.fingerJoint = function() {
    
        var fingerHeight  = 1 * pxPerIn,
            fingerWidth   = 1  * pxPerIn, 
            radius  = .125 * pxPerIn,
            // startsMale = true; 
            //distance = 10 *pxPerIn
            fillColor = "#fff";
            ;
        
        function fingerJoint(g) {
            g.each(function() {
            
                var g = d3.select(this);
                
                g.append("rect")
                    .attr("x", function(d) { 
                        return -d*pxPerIn-fingerWidth/2; })
                    .attr("y", 0)
                    .attr("width", fingerWidth)
                    .attr("height", fingerHeight)
                    .style("fill", fillColor)
                    ;
            
                g.append("circle")
                    .attr("cx", function(d) { return -d*pxPerIn +radius-fingerWidth/2; })
                    .attr("cy", fingerHeight)
                    .attr("r", radius)
                    .style("fill", fillColor)
                    ;
            
                g.append("circle")
                    .attr("cx", function(d) { return -d*pxPerIn + fingerWidth/2-radius; })
                    .attr("cy", fingerHeight)
                    .attr("r", radius)
                    .style("fill", fillColor)
                    ;
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
        fingerJoint.distance = function(x) {
            if (!arguments.length) return distance;
            distance = x;
            return fingerJoint;
        };
        
        return fingerJoint;
    }
    
})();

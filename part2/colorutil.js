
module.exports = { 

    getLum : function(colorR, colorG, colorB) {
        
        return (.2126 * colorR) + (.7152 * colorG) + (.0722 * colorB);

    },
    
    darken : function(colorR, colorG, colorB) {
        
        colorR -= (colorR * .2)  
        colorG -= (colorG * .2)  
        colorB -= (colorB * .2)  
        
        return colorR + ' ' + colorG + ' ' + colorB

    }
    
};


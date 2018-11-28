({
    doInit : function(component, event, helper) {
        
        let markerArr  = component.get('v.markerArr');
        let markerObjArr = new Array();
        
        if(markerArr){
            
            for(let i = 0; i < markerArr.length; i++){
                
                let locationDataArr = markerArr[i].split(';');
                
                let markerObj = {
                    location:{
                        'City' : locationDataArr[0],
                        'Country' : locationDataArr[1],
                        'PostalCode' : locationDataArr[2],
                        'State' : locationDataArr[3],
                        'Street' : locationDataArr[4]
                        
                    },
                    title: locationDataArr[5],
                    description : locationDataArr[6],
                    icon: locationDataArr[7]
                }
                
                markerObjArr.push(markerObj);
                
            }
            
            component.set('v.mapMarkers', markerObjArr);
        }
    }
})
({
	saveRecord : function(component, event, helper) {
        
        console.log('saving record');
        component.find("recEdit").get("e.recordSave").fire();
	},
    
    saveSuccessful : function(component, event, helper){
        console.log('handling successful save');
    	component.set('v.showMsg', true);
    },
    
})
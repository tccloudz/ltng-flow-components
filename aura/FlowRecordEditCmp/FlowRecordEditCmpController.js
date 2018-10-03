({
	
    doInit: function(component, event, helper){
        
        let formType = component.get('v.editFormType');
        let obj = component.get('v.objApiName');
        
        console.log(obj);
        
        if(formType === 'recordForm'){
			let fields = component.get('v.fieldList');
            console.log('field list: ' + fields);
            if(fields){
           		let fieldsArr = fields.split(',');
                console.log(fieldsArr);
            	component.set('v.fieldListArr', fieldsArr);
            }
        }
    },
    
    saveRecord : function(component, event, helper) {
        
        console.log('saving record');
        component.find("recEdit").get("e.recordSave").fire();
	},
    
    saveSuccessful : function(component, event, helper){
        console.log('handling successful save');
        let showMsg = component.get('v.showMsg');
        component.set('v.showMsg', true);
        
    },
    
})
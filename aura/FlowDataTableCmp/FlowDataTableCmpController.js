({
	doInit : function(component, event, helper) {
        
        var dataArr = new Array();
        
        var colsStr = component.get('v.columnsStr');
        var fieldNameArr = new Array();
        
        if(colsStr){
            console.log(colsStr);
            var colStrArr = colsStr.split(';');
            
            if(colStrArr){
                console.log(colStrArr);
                var colArr = new Array();
                for(var i = 0; i < colStrArr.length; i++){
                	
                    console.log(colStrArr[i]);
                    
                    var colDetailArr = colStrArr[i].split(',');
                    console.log(colDetailArr);
                    if(colDetailArr.length === 3){
                    	var colObj = {label: colDetailArr[0], fieldName: colDetailArr[1], type: colDetailArr[2]};
                        console.log(colObj);
                        colArr.push(colObj);
                        fieldNameArr.push(colDetailArr[1]);
                    }
                    
                }
                
                component.set('v.columns', colArr);
                
            }
            
        }

        var dataStrArr = component.get('v.dataArr');
        
        console.log(dataStrArr);
        
        if(dataStrArr){
            
            for(var j = 0; j < dataStrArr.length; j++){
                var fieldArr = dataStrArr[j].split(',');
                
                
                if(fieldArr.length === fieldNameArr.length){
                    var jsonStr = '{';
                    
                    for(var k = 0; k < fieldArr.length; k++){
                        var delimeter = k === (fieldArr.length - 1) ? '' : ',';
                        jsonStr += '"' + fieldNameArr[k] + '" : ' + '"' + fieldArr[k] + '" ' + delimeter;
                    }
                    
                    jsonStr += '}'
                    
                    console.log(jsonStr)
                    
                    dataArr.push(JSON.parse(jsonStr));
                    
                }
                
            }
            
            component.set('v.data', dataArr);
        }
		
	},
    
    setRecordId : function(component, event, helper){
      
        var selectedRows = event.getParam('selectedRows');
        var key = component.get('v.key');
        var recIds = '';
        if(selectedRows){
            if(selectedRows.length === 1){
                console.log(selectedRows[0][key]);
                component.set('v.recordId', selectedRows[0][key]);
            }
            else{
                for(let i = 0; i < selectedRows.length; i++){
                    recIds += selectedRows[i][key] + ',';
                }
                component.set('v.recordIds', recIds);
                component.set('v.numOfRowsSelected', selectedRows.length);
            }
        }
    },
})
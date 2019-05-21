import {
	LightningElement, track, api
}
from 'lwc';

export default class FlowRecordEditLWC extends LightningElement {

	@
	api recId; //migrated from  <aura:attribute name="recId" type="String" />

	@
	track showMsg = false; //migrated from  <aura:attribute name="recId" type="String" />

	@
	api fieldList = 'Name'; //migrated from  <aura:attribute name="fieldList" type="String" />

	@
	track fieldListArr = []; //migrated from <aura:attribute name="fieldListArr" type="String[]" />

	@
	api objApiName = ''; //migrated from <aura:attribute name="objApiName" type="String" />

	successMsg = '<h3 style="color: green;"><b>Record Save Successful!</b></h3>';


	connectedCallback() {
		console.log(this.fieldList);

		if (this.fieldList) {
			this.fieldListArr = this.fieldList.split(',');
		}

	}

	handleSuccess(event) {
		console.log('success');
		this.showMsg = true;
	}


}
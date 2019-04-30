({
	doInit: function(component, event, helper) {

		var cmpAttrs = component.get('v.cmpAttrs');
		var attrVals = {};

		console.log('cmpattr: ' + cmpAttrs);

		if (cmpAttrs) {

			var cmpAttrArr = cmpAttrs.split(',');

			component.set('v.tabName', cmpAttrArr[0]);

			for (var i = 2; i < cmpAttrArr.length; i++) {
				var indvAttrArr = cmpAttrArr[i].split(';');
				attrVals[indvAttrArr[0]] = indvAttrArr[1];
			}

			console.log(attrVals);

			$A.createComponent(
				cmpAttrArr[1],
				attrVals,
				function(newCmp, status, errorMessage) {
					if (status === 'SUCCESS') {
						console.log('cmp created');
						var body = component.get('v.body');
						body.push(newCmp);
						component.set('v.body', body);
						component.set('v.showTab', false);
						setTimeout(function() {
							component.set('v.showTab', true);
						}, 500);
					}

				}
			);


		}



	}
})
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"thiagobirdRecognitionLeo/model/models",
	"thiagobirdRecognitionLeo/libs/jszip.min",
	"thiagobirdRecognitionLeo/libs/FileSaver.min"	
], function(UIComponent, Device, models, JSZip) {
	"use strict";

	return UIComponent.extend("thiagobirdRecognitionLeo.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
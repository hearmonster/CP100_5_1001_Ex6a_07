/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/sap/training/CP100_5_1001_07/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});
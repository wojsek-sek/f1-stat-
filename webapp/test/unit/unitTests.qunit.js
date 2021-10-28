/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"f1/f1_stat/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

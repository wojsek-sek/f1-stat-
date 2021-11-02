sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("f1.f1stat.controller.circuits", {
			onInit: function () {

                 var oModel = new sap.ui.model.json.JSONModel();

                fetch('https://ergast.com/api/f1/circuits.json?limit=78')
                    .then(response => response.json())
                    .then(data => oModel.setData(data));

                console.log(oModel)

                this.getView().setModel(oModel)
                
            },
            handleNavButtonPress: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
                oRouter.navTo("main_view");
            }
		});
	});

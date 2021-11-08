sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast) {
		"use strict";

		return Controller.extend("f1.f1stat.controller.seasons", {
			onInit: function () {

                var oModel = new sap.ui.model.json.JSONModel();

                fetch('https://ergast.com/api/f1/2021.json')
                    .then(response => response.json())
                    .then(data => oModel.setData(data))

                console.log(oModel)

                this.getView().setModel(oModel)


            },
            handleNavButtonPress: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
                oRouter.navTo("main_view");
            },
            onGetYear: function(){ 
            
                let sYear = this.byId("get_year").getValue()

                sYear = sYear.trim()

                if(sYear>=1950 && sYear<=2021) {
                    var oModel = new sap.ui.model.json.JSONModel();

                fetch('https://ergast.com/api/f1/'+sYear+'.json')
                    .then(response => response.json())
                    .then(data => oModel.setData(data));

                console.log(oModel)

                this.getView().setModel(oModel)
                } else { 
                     MessageToast.show("Wrong value");
                }

                this.byId("get_year").focus();


            }
		});
	});

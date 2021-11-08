sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Filter, FilterOperator, JSONModel) {
		"use strict";

		return Controller.extend("f1.f1stat.controller.driversDetails", {
			onInit: function () {

                this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this._oRouter.attachRouteMatched(this.handleRouteMatched, this);

               
            },

            handleNavButtonPress: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
                oRouter.navTo("drivers");
            },

            onPatternMatched: function(oEvent) {
                var oParameters = oEvent.getParameters();
                this._sGuid = oParameters.arguments.Guid;
            },

            handleRouteMatched: function(oEvent) {
                var driver = localStorage.getItem("driverId")
                
                var oModel = new sap.ui.model.json.JSONModel();
                var url = 'https://ergast.com/api/f1/drivers/' + driver + '.json';

                var url2 = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + driver + '&prop=extracts&format=json&exintro=1'

                console.log(url)

                fetch(url)
                    .then(response => response.json())
                    .then(data => oModel.setData(data));

                this.getView().setModel(oModel);    
            }

		});
	});

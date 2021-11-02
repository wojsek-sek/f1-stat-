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

		return Controller.extend("f1.f1stat.controller.drivers", {
			onInit: function () {
                
                var oModel = new sap.ui.model.json.JSONModel();

                fetch('https://ergast.com/api/f1/drivers.json?limit=900')
                .then(response => response.json())
                .then(data => oModel.setData(data));

                this.getView().setModel(oModel);

                var myTable = this.byId("myTable")
                
                
                    
            },
            handleNavButtonPress: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
                oRouter.navTo("main_view");
            },

            onSearch: function (oEvent) {
			// add filter for search
            var aFilters = [];
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("familyName", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
            }

            

            var oList = this.byId("myTable");
			var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters, "Application");
 
		},
		});
	});

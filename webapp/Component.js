sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
  ], function (UIComponent, JSONModel) {
	"use strict";
  
	return UIComponent.extend("myApp.Component", {
	  metadata: {
		manifest: "json"
	  },
  
	  init: function () {
		UIComponent.prototype.init.apply(this, arguments);
  
		// Crear un modelo JSON para tareas
		var oData = {
		  tasks: []
		};
		var oModel = new JSONModel(oData);
		this.setModel(oModel);
	  }
	});
  });
  
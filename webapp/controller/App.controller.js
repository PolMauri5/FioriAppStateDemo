sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
  ], function (Controller, JSONModel, MessageToast) {
    "use strict";
    
    return Controller.extend("myApp.controller.App", {
        onInit: function() {
            //funcion que se va a generar al abrir la pestaña??
        },

        onPressAddTask: function() {
            console.log("hello world");
            //add task to the list
        }
    });
  });
  
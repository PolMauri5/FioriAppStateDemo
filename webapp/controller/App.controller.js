sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
    "use strict";
    return Controller.extend("myApp.controller.App", {
      onPress: function () {
        sap.m.MessageToast.show("Hello World");
      }
    });
  });
  
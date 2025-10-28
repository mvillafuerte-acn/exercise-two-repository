/*global QUnit*/

sap.ui.define([
	"com/ui5/train/exercisetwoapplication/controller/exercisetwo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("exercisetwo Controller");

	QUnit.test("I should test the exercisetwo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.ui.commons.form.FormLayoutRenderer");

/**
 * @class FormLayout renderer.
 * @static
 */
sap.ui.commons.form.FormLayoutRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oLayout an object representation of the control that should be rendered
 */
sap.ui.commons.form.FormLayoutRenderer.render = function(oRenderManager, oLayout){
	// convenience variable
	var rm = oRenderManager;

	var oForm = oLayout.getParent();
	if (oForm && oForm instanceof sap.ui.commons.form.Form) {
		this.renderForm(rm, oLayout, oForm);
	}

};

/**
 * Renders the HTML for the given form content, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oLayout an object representation of the Layout control that should be rendered
 * @param {sap.ui.commons.form.Form} oForm, a form control to render its content
 */
sap.ui.commons.form.FormLayoutRenderer.renderForm = function(rm, oLayout, oForm){

	rm.write("<div");
	rm.writeControlData(oLayout);
	rm.addClass(this.getMainClass());
	rm.writeClasses();
	rm.write(">");

	// Form header
	this.renderTitle(rm, oForm.getTitle(), undefined, false, sap.ui.commons.TitleLevel.H2, oForm.getId());

	this.renderContainers(rm, oLayout, oForm);

	rm.write("</div>");
};

sap.ui.commons.form.FormLayoutRenderer.getMainClass = function(){
	return "sapUiFormLayout";
};

sap.ui.commons.form.FormLayoutRenderer.renderContainers = function(rm, oLayout, oForm){

	var aContainers = oForm.getFormContainers();
	for (var i = 0, il = aContainers.length; i < il; i++) {
		var oContainer = aContainers[i];
		this.renderContainer(rm, oLayout, oContainer);
	}

};

sap.ui.commons.form.FormLayoutRenderer.renderContainer = function(rm, oLayout, oContainer){

	var bExpandable = oContainer.getExpandable();

	rm.write("<section");
	rm.writeElementData(oContainer);
	rm.addClass("sapUiFormContainer");

	if(oContainer.getTooltip_AsString()) {
		rm.writeAttributeEscaped('title', oContainer.getTooltip_AsString());
	}
	rm.writeClasses();
	rm.write(">");
	this.renderTitle(rm, oContainer.getTitle(), oContainer._oExpandButton, bExpandable, sap.ui.commons.TitleLevel.H4, oContainer.getId());

	if (bExpandable) {
		rm.write("<div id='"+oContainer.getId()+"-content'");
		if (!oContainer.getExpanded()) {
			rm.addStyle("display", "none");
			rm.writeStyles();
		}
		rm.write(">");
	}

	var aElements = oContainer.getFormElements();
	for (var j = 0, jl = aElements.length; j < jl; j++) {

		var oElement = aElements[j];

		this.renderElement(rm, oLayout, oElement);

	}
	if (bExpandable) {
		rm.write("</div>");
	}
	rm.write("</section>");

};

sap.ui.commons.form.FormLayoutRenderer.renderElement = function(rm, oLayout, oElement){

	rm.write("<div");
	rm.writeElementData(oElement);
	rm.addClass("sapUiFormElement");
	rm.writeClasses();
	rm.write(">");

	var oLabel = oElement.getLabelControl();
	if (oLabel) {
		rm.renderControl(oLabel);
	}

	var aFields = oElement.getFields();
	if (aFields && aFields.length > 0) {
		for (var k = 0, kl = aFields.length; k < kl; k++) {
			var oField = aFields[k];
			rm.renderControl(oField);
		}
	}
	rm.write("</div>");

};

/*
 * Renders the title for a Form or a FormContainer
 * If this function is overwritten in a Layout please use the right IDs to be sure aria-describedby works fine
 */
sap.ui.commons.form.FormLayoutRenderer.renderTitle = function(rm, oTitle, oExpandButton, bExpander, sLevelDefault, sContentId){

	if (oTitle){
		//determine title level -> if not set use H4 as default
		var sLevel = sap.ui.commons.TitleLevel.H4;
		if (sLevelDefault) {
			sLevel = sLevelDefault;
		}
		if (typeof oTitle !== "string" && oTitle.getLevel() != sap.ui.commons.TitleLevel.Auto) {
			sLevel = oTitle.getLevel();
		}

		// just reuse TextView class because there font size & co. is already defined
		rm.write("<"+sLevel+" ");
		rm.addClass("sapUiTv"+sLevel);
		rm.addClass("sapUiFormTitle");

		if(typeof oTitle !== "string"){
			rm.writeElementData(oTitle);
			if (oTitle.getTooltip_AsString()) {
				rm.writeAttributeEscaped('title', oTitle.getTooltip_AsString());
			}
			if (oTitle.getEmphasized()) {
				rm.addClass("sapUiFormTitleEmph");
			}
		}else {
			rm.writeAttribute("id", sContentId+"--title");
		}
		rm.writeClasses();
		rm.write(">");

		if (bExpander && oExpandButton) {
			rm.renderControl(oExpandButton);
		}
		if (typeof oTitle === "string") {
			// Title is just a string
			rm.writeEscaped(oTitle, true);
		}else{
			// title control
			if (oTitle.getIcon()) {
				rm.write("<img id=\"" + oTitle.getId() + "-ico\" src=\"");
				rm.writeEscaped(oTitle.getIcon());
				rm.write("\" role=\"presentation\" alt=\"\"/>"); // role and alt added as per accessibility requirement
			}
			rm.writeEscaped(oTitle.getText(), true);
		}

		rm.write("</"+sLevel+">");
	}

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.unified.ContentSwitcherRenderer");

/**
 * @class AnimatedContentSwitcher renderer. 
 * @static
 */
sap.ui.unified.ContentSwitcherRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.unified.ContentSwitcherRenderer.render = function(oRm, oControl){ 
	var sId            = oControl.getId();
	var sAnimation     = oControl.getAnimation();
	if(!sap.ui.getCore().getConfiguration().getAnimation()){
		sAnimation = sap.ui.unified.ContentSwitcherAnimation.None;
	}
	
	var iActiveContent = oControl.getActiveContent();

	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapUiUfdCSwitcher");
	oRm.addClass("sapUiUfdCSwitcherAnimation" + sAnimation);
	oRm.writeClasses();
	oRm.write(">");
	
	oRm.write("<section id=\"" + sId + "-content1\" class=\"sapUiUfdCSwitcherContent sapUiUfdCSwitcherContent1" + (iActiveContent == 1 ? " sapUiUfdCSwitcherVisible" : "") +"\">");
	this.renderContent(oRm, oControl.getContent1());
	oRm.write("</section>");
	
	oRm.write("<section id=\"" + sId + "-content2\" class=\"sapUiUfdCSwitcherContent sapUiUfdCSwitcherContent2" + (iActiveContent == 2 ? " sapUiUfdCSwitcherVisible" : "") +"\">");
	this.renderContent(oRm, oControl.getContent2());
	oRm.write("</section>");
	
	oRm.write("</div>");
};

sap.ui.unified.ContentSwitcherRenderer.renderContent = function(oRm, aContent) {
	for (var i = 0; i < aContent.length; ++i) {
		oRm.renderControl(aContent[i]);
	}
};
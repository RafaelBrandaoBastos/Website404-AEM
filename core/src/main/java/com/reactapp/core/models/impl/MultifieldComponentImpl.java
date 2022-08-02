/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models.impl;

import java.util.Collections;
import java.util.List;
import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.reactapp.core.models.MultifieldComponent;
import com.reactapp.core.models.TextModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    MultifieldComponent.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/multifield-component")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MultifieldComponentImpl
    implements MultifieldComponent
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<TextModel> textcontent;
    @SlingObject
    private Resource resource;

    @Override
    public List<TextModel> getTextcontent() {
        return textcontent != null ? Collections.unmodifiableList(textcontent) : null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}

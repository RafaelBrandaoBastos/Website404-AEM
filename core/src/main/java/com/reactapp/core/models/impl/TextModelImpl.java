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

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.TextModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    TextModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TextModelImpl
    implements TextModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String label;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelSize;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @Override
    @JsonProperty("titleColor")
    public String getTitleColor() {
        return titleColor;
    }

    @Override
    @JsonProperty("titleSize")
    public String getTitleSize() {
        return titleSize;
    }

    @Override
    @JsonProperty("text")
    public String getText() {
        return text;
    }

    @Override
    @JsonProperty("textColor")
    public String getTextColor() {
        return textColor;
    }

    @Override
    @JsonProperty("textSize")
    public String getTextSize() {
        return textSize;
    }

    @Override
    @JsonProperty("label")
    public String getLabel() {
        return label;
    }

    @Override
    @JsonProperty("labelColor")
    public String getLabelColor() {
        return labelColor;
    }

    @Override
    @JsonProperty("labelSize")
    public String getLabelSize() {
        return labelSize;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}

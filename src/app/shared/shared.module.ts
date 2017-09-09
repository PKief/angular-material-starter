import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdCheckboxModule,
  MdGridListModule,
  MdInputModule,
  MdListModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule,
  CompatibilityModule,
  MdButtonToggleModule,
  MdDialogModule,
  MdIconModule, MdMenuModule,
  MdRadioModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTooltipModule,
  StyleModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

const MATERIAL_MODULES = [
  CommonModule,
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdCheckboxModule,
  MdGridListModule,
  MdInputModule,
  MdListModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule,

  // These modules include providers.
  CompatibilityModule,
  MdButtonToggleModule,
  MdDialogModule,
  MdIconModule,
  MdMenuModule,
  MdRadioModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTooltipModule,
  OverlayModule,
  StyleModule
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  exports: MATERIAL_MODULES
})
export class SharedModule { }

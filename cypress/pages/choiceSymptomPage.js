import "cypress-file-upload";

export class choiceSymptomPage {
  weblocators = {
    choiceOfSymptomField:
      "#symptom_search_label > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix",
    conditionOfTheFailure:
      "#condition > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix",
    validateButton: ".mt-24 > .mat-accent",
    symptomBroken: "#\\31 9 > .mat-option-text",
    appearanceDamaged: "#S394 > .mat-option-text",
    abnormalNoise: "#S136 > .mat-option-text",
    closePopinIconButton: "button[type='submit']:first-child",
    serialNumberField: "#panne_confirmed_serialNumber",
    addPhotoSerialNumber: ".upload-initializer > div",
    dropzone: "#drop",
    dropzoneButtonValidate: ".e-primary",
    dropzoneButtonSend: ":nth-child(2) > .mb-8 > .w-100-p",
    textBoldAlert: ".text-bold",
    optionText: "span.mat-option-text",
    buttonSymptomNotFound: "#symptom_not_found",
    fieldCustomerPanneNotFound: "#customerPanneNotFound",
  };
  enterSymptom(Symptom) {
    cy.get(this.weblocators.choiceOfSymptomField).should("be.visible").click();
    cy.get(this.weblocators.optionText).contains(Symptom).click();
  }
  selectSymptomBroken() {
    cy.get(this.weblocators.choiceOfSymptomField).should("be.visible").click();
    cy.get(this.weblocators.symptomBroken).click();
  }
  selectSymptomDamaged() {
    cy.get(this.weblocators.choiceOfSymptomField).should("be.visible").click();
    cy.get(this.weblocators.appearanceDamaged).click();
  }
  selectSymptomAbnormalNoise() {
    cy.get(this.weblocators.choiceOfSymptomField).should("be.visible").click();
    cy.get(this.weblocators.abnormalNoise).click();
  }
  enterFailureCondition() {
    cy.get(this.weblocators.conditionOfTheFailure).should("be.visible");
  }
  verifyValidateButtonDisabled() {
    cy.get(this.weblocators.validateButton).should("be.disabled");
  }
  verifyValidateButtonEnable() {
    cy.get(this.weblocators.validateButton).should("not.be.disabled");
  }
  clickBtnValidate() {
    cy.get(this.weblocators.validateButton).click({ force: true });
  }
  clickButtonTakeNoteAlert() {
    cy.get(this.weblocators.textBoldAlert).should("contain", " Alert");
    cy.get(this.weblocators.closePopinIconButton)
      .scrollIntoView({ duration: 500 })
      .should("be.visible")
      .click();
  }
  enterSerialNumber(SerialNumberProduct) {
    cy.get(this.weblocators.serialNumberField)
      .should("be.visible")
      .type(SerialNumberProduct);
  }
  uploadSingleFile(FilePath, TextLinkUpload) {
    cy.contains(this.weblocators.addPhotoSerialNumber, TextLinkUpload).click({
      force: true,
    });
    cy.get(this.weblocators.dropzone).attachFile(FilePath, {
      subjectType: "drag-n-drop",
    });
    cy.get(this.weblocators.dropzoneButtonValidate).click();
  }
  clickButtonSymptomNotFound() {
    cy.get(this.weblocators.buttonSymptomNotFound).should("be.visible").click();
  }
  enterSymptomNotFound(SymptomNotFound) {
    cy.get(this.weblocators.fieldCustomerPanneNotFound)
      .should("be.visible")
      .clear()
      .type(SymptomNotFound);
  }
  uploadMultipleFiles() {}
}

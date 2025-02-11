export class surveypage {
  weblocators = {};
  clickBtnCancelSurvey() {
    cy.get(
      '[fxlayoutgap="30px"] > .ng-star-inserted > .mat-focus-indicator'
    ).click({ force: true });
  }
}

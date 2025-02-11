export class choiceOfPartsToOrderPage {
  weblocators = {
    rowsTable: "table[role='grid']>tbody>tr",
    columnsTable: "table[role='grid']>thead>tr>th",
    checkboxSpare0:
      "#spare-1 > .mat-checkbox-layout > .mat-checkbox-inner-container",
    submitButton: "button[type='submit'] span[class='mat-button-wrapper']",
    confirmButton: "#confirm_delete",
  };
  readAllRowsAndColumnsDataInFirstPage() {
    cy.get(this.weblocators.rowsTable).each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get("td").each(($col, index, $cols) => {
          cy.log($col.text());
        });
      });
    });
  }
  selectSparePart() {
    cy.get(this.weblocators.checkboxSpare0).should("be.visible").click();
  }
  clickSubmitButton() {
    cy.get(this.weblocators.submitButton).should("be.visible").click();
  }
  clickConfirmButtonInPopup() {
    cy.get(this.weblocators.confirmButton).should("be.visible").click();
  }
}

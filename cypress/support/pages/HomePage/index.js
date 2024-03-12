const el = require('../elements').ELEMENTS_Home

export default class HomePage {
    constructor(url) {
      this.url = url;
    }
  
    acessarPortal() {
      cy.visit(this.url);
    }

    abrirLoja(){
        cy.get(el.btnCompreOnline).click();
    }
  }
  
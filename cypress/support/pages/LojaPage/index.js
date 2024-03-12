const el = require('../elements').ELEMENTS_LOJA_VR;

export default class LojaVRPage {
  // Método para acessar a página da loja
  acessarLoja(url) {
    cy.visit(url);
    this.fecharTelaBemVindo();
  }

  // Validar o redirecionamento do portal para a loja
  // Estou verificando atravéis da biblioteca puppeteer se o texto H2 que está sendo passado por parametro está sendo visualizado
  validarHomeLoja(msgValidacao){
    cy.puppeteer('switchTabAndGetContent').should('equal', msgValidacao);
  }

  // Método para selecionar o tipo de cartão VR
  selecionarOpCartaoVR() {
    cy.get(el.menuCartaoVR).click();
  }

  // Método para adicionar um cartão ao carrinho
  addCartaoAuto(quantidade, valor) {
    cy.get(el.inQuantidadeProduto).type(quantidade);
    cy.get(el.invalorProduto).type(`R$ ${valor}`);
    cy.get(el.btnAddCarrinho).click();
  }

  // Método para validar o carrinho de compras
  validarCarrinho(tipoCartao, quantidade, valor) {
    // Define os valores esperados para validação
    const tipoCartaoEsperado = tipoCartao;
    const valorPorCartaoEsperado = parseFloat(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    const valorTotalEsperado = (quantidade * parseFloat(valor)).toLocaleString('pt-BR', {minimumFractionDigits: 2});

    // Clica no botão do carrinho
    cy.get(el.btnCarrinho).click();

    // Valida o tipo do cartão
    cy.get(el.labelTipoCartao).should('contain.text', tipoCartaoEsperado);

    // Valida o valor por cartão
    cy.get(el.labelValorProduto).invoke('text').should('contain', valorPorCartaoEsperado);

    // Valida a quantidade de cartões
    cy.get(el.labelQTDCarrinho).should('contain.text', quantidade);

    // Valida o total parcial
    cy.get(el.labelTotal).should('contain.text', valorTotalEsperado);
  }

  // Método para fechar a tela de boas-vindas
  fecharTelaBemVindo() {
    // Verifica se o botão de consentimento existe antes de clicar
    cy.get(el.btnTermsConsent, { timeout: 10 }).then(($btnTermsConsent) => {
        if ($btnTermsConsent.length > 0) {
            cy.wrap($btnTermsConsent).click();
        }
    });

    //Fechar tela de Bem-vindo
    cy.get(el.btnBemVindoClose).click();
  }
}

import HomePage from "../support/pages/HomePage";
import LojaVRPage from "../support/pages/LojaPage";

// Define as variáveis de ambiente
const VR_URL = 'https://www.vr.com.br';
const MSG_SUCESSO_LOJA = 'A VR tem tudo que sua empresa precisa!';
const MSG_FALHA_LOJA = 'FALHA - A VR tem tudo que sua empresa precisa!';

describe('Teste de Navegação na Loja VR', () => {
  let homePage;
  let lojaPage;

  beforeEach(() => {
    homePage = new HomePage(VR_URL);
    lojaPage = new LojaVRPage();

    homePage.acessarPortal();
  });

  it(`Deve navegar até a loja com sucesso e deve visualizar a mensagem ${MSG_SUCESSO_LOJA}`, () => {
    homePage.abrirLoja();
    lojaPage.validarHomeLoja(MSG_SUCESSO_LOJA);
  });

  it(`Deve falhar ao validar mensagem ${MSG_FALHA_LOJA} na loja`, () => {
    homePage.abrirLoja();
    lojaPage.validarHomeLoja(MSG_FALHA_LOJA);
  });

});


/*
import HomePage from "../support/pages/HomePage"
import LojaVR from "../support/pages/Loja";

// Define as variáveis de ambiente
const VR_URL = 'https://www.vr.com.br';
const MSG_SUCESSO_LOJA = 'A VR tem tudo que sua empresa precisa!';
const MSG_FALHA_LOJA = 'FALHA - A VR tem tudo que sua empresa precisa!';

describe('Teste de Navegação na Loja VR', () => {
  it('Acessar a home do portal web (www.vr.com.br) e navegar até a loja - Validação com Sucesso!', () => {
    const homePage = new HomePage(VR_URL);
    const loja = new LojaVR();

    homePage.acessarPortal();
    homePage.abrirLoja();
    loja.validarHomeLoja(MSG_SUCESSO_LOJA);
  })

  it('Acessar a home do portal web (www.vr.com.br) e navegar até a loja - Teste deve Falhar!', () => {
    const homePage = new HomePage(VR_URL);
    const loja = new LojaVR();

    homePage.acessarPortal();
    homePage.abrirLoja();
    loja.validarHomeLoja(MSG_FALHA_LOJA);
  })

})*/
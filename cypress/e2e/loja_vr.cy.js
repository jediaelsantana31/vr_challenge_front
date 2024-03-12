import LojaVRPage from "../support/pages/LojaPage";

// Define as variáveis de ambiente
const LOJA_URL = 'https://loja.vr.com.br/';

describe('Teste de Adicionar o produto "Auto" ao carrinho na Loja VR', () => {
  let lojaVRPage; // Declare a variável aqui para que ela seja acessível em todo o escopo do describe
  
  beforeEach(() => {
    // Inicializa a página da Loja VR
    lojaVRPage = new LojaVRPage();
    lojaVRPage.acessarLoja(LOJA_URL);
  });

  it('Deve adicionar o produto "Auto" ao carrinho e validar o carrinho', () => {
    // Gera um número aleatório entre 1 e 10 para representar a quantidade de produtos
    const quantidadeAleatoria = Math.floor(Math.random() * 10) + 1;

    // Gera um número aleatório entre 100 e 200 e fixa duas casas decimais para representar o valor do produto
    const valorAleatorio = (Math.floor(Math.random() * 100) + 100).toFixed(2);
    
    // Seleciona a opção de cartão VR
    lojaVRPage.selecionarOpCartaoVR();
    
    // Adiciona o cartão "Auto" ao carrinho com as quantidades aleatórias geradas
    lojaVRPage.addCartaoAuto(quantidadeAleatoria, valorAleatorio);
    
    // Valida se o produto foi adicionado corretamente ao carrinho
    lojaVRPage.validarCarrinho('Auto', quantidadeAleatoria, valorAleatorio);
  })
})

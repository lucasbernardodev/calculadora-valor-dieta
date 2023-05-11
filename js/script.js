const calcularGastoDaDieta = () => {
  const refeicoes = [];

  const inserirRefeicao = () => {
    const refeicao = {
      periodo: '',
      produtos: [],
    };

    refeicao.periodo = prompt('Insira o período da refeição:');

    let adicionarMaisItens = true;
    while (adicionarMaisItens) {
      const produto = {};
      produto.nome = prompt('Digite um produto:');
      produto.quantidade = Number(prompt('Digite a quantidade:'));
      produto.valorUnitario = Number(prompt('Digite o valor unitário:'));

      refeicao.produtos.push(produto);

      const adicionarMaisItensResposta = prompt(
        'Deseja adicionar mais itens? (Sim/Não)'
      );
      if (adicionarMaisItensResposta.toLowerCase() === 'não') {
        adicionarMaisItens = false;
      }
    }
    return refeicao;
  };

  let adicionarMaisRefeicoes = true;
  while (adicionarMaisRefeicoes) {
    const refeicao = inserirRefeicao();
    refeicoes.push(refeicao);

    const adicionarMaisRefeicoesResposta = prompt(
      'Deseja adicionar mais alguma refeição? (Sim/Não)'
    );
    if (adicionarMaisRefeicoesResposta.toLowerCase() === 'não') {
      adicionarMaisRefeicoes = false;
    }
  }

  const calcularGastoTotal = () => {
    let gastoTotal = 0;

    let gastosDetalhados = 'Gastos detalhados:\n';

    for (let refeicao of refeicoes) {
      let gastoRefeicao = 0;

      let resumoRefeicao = `Resumo detalhado: ${refeicao.periodo}\n`;

      for (let produto of refeicao.produtos) {
        const gastoProduto = produto.quantidade * produto.valorUnitario;
        gastoRefeicao += gastoProduto;

        resumoRefeicao += `Produto: ${produto.nome} | Quantidade: ${produto.quantidade} | Preço unitário: R$${produto.valorUnitario}\n`;
      }

      resumoRefeicao += `Gasto total da refeição: R$${gastoRefeicao}\n`;
      resumoRefeicao += '----------------------\n';

      gastosDetalhados += resumoRefeicao;

      gastoTotal += gastoRefeicao;
    }

    alert(gastosDetalhados);

    return gastoTotal;
  };

  const gastoTotalDieta = calcularGastoTotal();

  alert(`Gasto total da dieta: R$${gastoTotalDieta}`);
};

const start = document.getElementById('start');
start.addEventListener('click', calcularGastoDaDieta);

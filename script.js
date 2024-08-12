import entradaDados from "readline-sync";

let salarioMinimo = [
    {
        salario: 510.0,
        ano: 2010,
    },
    {
        salario: 545.0,
        ano: 2011,
    },
    {
        salario: 622.0,
        ano: 2012,
    },
    {
        salario: 678.0,
        ano: 2013,
    },
    {
        salario: 724.0,
        ano: 2014,
    },
    {
        salario: 788.0,
        ano: 2015,
    },
    {
        salario: 880.0,
        ano: 2016,
    },
    {
        salario: 937.0,
        ano: 2017,
    },
    {
        salario: 954.0,
        ano: 2018,
    },
    {
        salario: 998.0,
        ano: 2019,
    },
    {
        salario: 1045.0,
        ano: 2020,
    },
];

let inflacao_taxa = [
    {
        inflacao: 5.91,
        ano: 2010,
    },
    {
        inflacao: 6.5,
        ano: 2011,
    },
    {
        inflacao: 5.86,
        ano: 2012,
    },
    {
        inflacao: 5.91,
        ano: 2013,
    },
    {
        inflacao: 6.41,
        ano: 2014,
    },
    {
        inflacao: 10.67,
        ano: 2015,
    },
    {
        inflacao: 6.29,
        ano: 2016,
    },
    {
        inflacao: 2.95,
        ano: 2017,
    },
    {
        inflacao: 3.75,
        ano: 2018,
    },
    {
        inflacao: 4.31,
        ano: 2019,
    },
    {
        inflacao: 4.52,
        ano: 2020,
    },
];

console.log("Escolha uma opcao:");
console.log("1 - Listar o histórico do salário mínimo");
console.log("2 - Listar o histórico da taxa IPCA (inflação)");
console.log("3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)");
let opcao = entradaDados.question("");


switch (opcao) {
    case "1":
        salarioMinimo.forEach((item) => {
            console.log(`Ano:.............................. ${item.ano}\nSalário mínimo:........................ ${item.salario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}\n`);
        });

        break;

    case "2":
        inflacao_taxa.forEach((item) => {
            console.log(`Ano:.............................. ${item.ano}\nInflação IPCA:..........................${item.inflacao.toLocaleString('pt-BR')}%\n`);
        });

        console.log("2");
        break;

    case "3":

        for (let i = 0 ; i < salarioMinimo.length; i++) {
         let ano  = salarioMinimo[i].ano;
          let salario = salarioMinimo[i].salario;
          let percentualCrescimento = 0;
          let inflacao = inflacao_taxa[i].inflacao;

          if(i > 0)
            {
                let salarioAnterior = salarioMinimo[i-1].salario;
                let diferenca = salario - salarioAnterior;

                 percentualCrescimento = `${((diferenca / salarioAnterior) * 100).toFixed(2)}%`;

            }
            else{

               percentualCrescimento = "-";


                
            }

            console.log(`Ano:....................................${ano}\nSalário mínimo:..................... ${salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} \nCrescimento Salarial:.................... ${percentualCrescimento}\nInflação:.............................. ${inflacao.toLocaleString('pt-BR')}%\n`);





        
      }
        break;
       
        default:

         console.log("Opcao invalida!!");

        break;

    }
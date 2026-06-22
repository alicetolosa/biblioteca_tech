import readlineSync from 'readline-sync'; //para para o erro no import(packge.json: type: module)


 //importando o objeto colors do arquivo Colors.ts, para usar as cores no menu

/*O sistema inicia na função main(), exibindo um menu em loop infinito. 
O usuário escolhe uma opção, que é tratada por um switch/case.
Cada opção representa uma funcionalidade da biblioteca. 
O sistema só é encerrado quando o usuário escolhe a opção 8, que finaliza o programa e exibe informações do desenvolvedor.*/


export function main() {
    
    let opcao: number ; //variavel numero que receberar o numero do menu que o usuário digitar
    while(true) {  // Laço de Repetição while, que vai repetir o menu até que o usuário digite a opção de sair/ true para que seja infinito
    
        //Menu do sistema, com as opções que o usuário pode escolher
        console.log(
                    "***********************************");
        console.log("           BIBLIOTECA TECH         ");
        console.log("***********************************");
        console.log("       Menu de Opções:             "); 
        console.log("                                   ");
        console.log("  1 - Cadastrar Livro              ");
        console.log("  2 - Listar todos os Livros       ");
        console.log("  3 - Buscar Livro ID              ");
        console.log("  4 - Atualizar dados doLivro      ");
        console.log("  5 - Deletar Livro                ");
        console.log("  6 - Vender Livro                 ");
        console.log("  7- Adicionar ao Estoque          ");
        console.log("  8 - Sair                         ");
        console.log("                                   ");
        console.log("***********************************");


        //Solicitando ao usuário que digite a opção desejada
        console.log("Digite a opção desejada:           ");
        opcao = readlineSync.questionInt(""); //readlineSync.questionInt() é uma função que lê a entrada do usuário e converte para número inteiro


        if (opcao == 8) { //se o usuário digitar 8, ele vai sair do sistema
            console.log("\n Saindo do sistema... \n");
            sobre(); //chamando a função sobre() Dados do desenvolvedor, que está no arquivo Sobre.ts
            process.exit(0); //objeto do Node.js / encerrando o programa, pode dar erro tratar no tsconfig: "types": ["node"]
        }

        //Switch case: pega o valor que o usuário digitou e executa a ação correspondente, caso o valor não seja válido, ele executa o default
        switch (opcao){
            case 1: 
                console.log("\n Cadastrar Livro \n");
                break; //para a execução dos proximos cases, caso o usuário digite 1, ele vai executar o case 1 e parar a execução dos próximos cases
            case 2:
                console.log("\n Listar todos os Livros \n");
                break;
            case 3:
                console.log("\n Buscar Livro ID \n");
                break;
            case 4:
                console.log("\n Atualizar dados do Livro \n");
                break;
            case 5:
                console.log("\n Deletar Livro \n");
                break;
            case 6:
                console.log("\n Vender Livro \n");
                break;
            case 7:
                console.log("\n Adicionar ao Estoque \n");
                break;
            default: //caso não seja uma opção descrita no menu, ele vai executar o default
                console.log("\n Opção inválida! \n");
                break;

        }

    }
}

//Função com os dados da pessoa desenvolvedora 
export function sobre (): void {
    console.log("***********************************************");
    console.log("Desenvolvedor: Alice de Oliveira Tolosa        ");
    console.log("GitHub: https://github.com/alicetolosa         ");
    console.log("***********************************************");
}

main (); // Executa a função principal 
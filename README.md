Resolução do Desafio de Italo em sala de aula 

Dupla: João G Santos 01510041 e Luiz H Souza 01923854

Comecei criando o projeto com React e TypeScript instalando pelo Vite. Depois criei e organizei as pastas, deixando os componentes em components e as páginas em Pages.

Criei o Card.tsx para receber título, imagem, descrição e preço por props. Testei, e só ai repliquei. Assim conseguimos usar o mesmo componente e mudar as informações de cada item, sem precisar criar outro Card do zero. Reutilizei a imagem e aloquei na pasta public.

Depois Luiz me auxiliou a criar as páginas Home, Produtos, Sobre e Contato. Para navegar entre elas, pesquisei como instalar o React Router e ele colocou os links no menu com o componente Link, que troca de página sem recarregar o site inteiro. Também configurei uma página 404 para quando alguém acessar uma rota que não existe.

Durante o desenvolvimento, a gente precisou ajustar alguns caminhos de arquivos e importações. Para rodar o projeto, entrei na pasta vite-project e usei npm.cmd install e na sequencia npm.cmd run dev, utilizei o .cmd porque o terminal estava bloqueando o apenas o comando npm.

# Desafio Coala Saúde
![image](https://github.com/gleicekellesn/desafio-coala-saude/assets/99400685/65415e88-e29b-4b1b-83f3-ebd98b504071)

Desafio de automação do *fluxo de compra* na plataforma https://www.saucedemo.com/.

## Indíce
- <a href="#tecnologias- utilizadas"> Tecnologias Utilizadas</a>
- <a href="#tecnologias- utilizadas"> Detalhamento de Organização</a>
- <a href="#tecnologias- utilizadas"> Funcionalidades do Projeto</a>
- <a href="#tecnologias- utilizadas"> Como rodar este projeto?</a>

## Tecnologias Utilizadas
1. [Cypress](https://docs.cypress.io/api/cypress-api/custom-commands)
2. Cypress / PageObject
3. JavaScript

## Detalhamento de Organização
A ideia do PageObject é de separar elementos em arquivos diferentes, de acordo a página em que os mesmos aparecem. Assim, escrevendo todos os elementos daquela página em uma classe js, e aplicando-os nos scripts de teste.

1.  **e2e**: spec;
2.  **Page** :  *Subpastas: Formulario, Login, Order, Products* identifica cada página;
3. ***elements.js***: descreve os elementos mapeados de cada página, como variáveis e elementos css;
4. ***index.js***: são as ações de cada página;
5. ***support/commands***: comandos padrões que são repetidos diversas vezes, nele encontra-se, por exemplo o acesos a página e o login.

![image](https://github.com/gleicekellesn/desafio-coala-saude/assets/99400685/af9fb403-580d-46aa-a089-81b2b714c02a)



## Funcionalidade do Projeto
- [x] Login : *(login.cy.js)*
- [x] Página do Produto : *(products.cy.js)*
- [x] Formulario de Informações : *(your_information.cy.js)*
- [x] Realização do Pedido : *(order.cy.js)*


## Como rodar este Projeto

```
- Baixe a pasta desafio-coala do github;
- Abra o VSCode em File > Open Folder;
- Localize a pasta que foi salva o projeto baixado;
- Abra o termibnal no VSCode em Terminal > New Terminal;
- Rodar o comando: npm install -D cypress 
para instalar o node_modules
- Para rodar o teste via linha de comando no terminal use: npx cypress run;
- Para rodar o teste via front (com abertura do navegador) use: npx cypress open.
```
***
### Informações Autorais:
Gleice Kelle Santos Nascimento Botelho
#####
***linkedIn***: https://www.linkedin.com/in/santosgleicekelle/
####
***email***: santosgleicekelle@gmail.com

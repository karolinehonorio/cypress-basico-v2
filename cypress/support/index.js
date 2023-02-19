/// <tipos de referência="cypress" />
// ************************************************ ***********
// Este exemplo plugins/index.js pode ser usado para carregar plugins
//
// Você pode alterar a localização deste arquivo ou desativar o carregamento
// o arquivo de plugins com a opção de configuração 'pluginsFile'.
//
// Você pode ler mais aqui:
// https://on.cypress.io/plugins-guide
// ************************************************ ***********

// Esta função é chamada quando um projeto é aberto ou reaberto (por exemplo, devido a
// alteração da configuração do projeto)

/**
* @type {Cypress.PluginConfig}

*/
import './commands'
// eslint-disable-next-line no-unused-vars
    // `on` é usado para se conectar a vários eventos que o Cypress emite
    // `config` é a configuração do Cypress resolvida
  
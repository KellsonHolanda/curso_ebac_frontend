///<reference types="cypress" />

describe('Teste para home', () => {
    it('Deve renderizar a página inicial', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('h1').should('contain', 'Agenda de')
    })

    it('Deve adicionar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('button.adicionar').click()
        cy.get('input[placeholder="Nome"]').type('Teste Nome')
        cy.get('input[placeholder="E-mail"]').type('teste@teste.com')
        cy.get('input[placeholder="Telefone"]').type('123456789')
        cy.get('button').contains('Adicionar').click()
        cy.get('ul').should('contain', 'Teste Nome')
        cy.get('ul').should('contain', '123456789')
        cy.get('ul').should('contain', 'teste@teste.com')
    })

    it('Deve editar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('button.edit').first().click()
        cy.get('input[placeholder="Nome"]').clear().type('Nome Editado')
        cy.get('input[placeholder="E-mail"]').clear().type('editado@teste.com')
        cy.get('input[placeholder="Telefone"]').clear().type('987654321')
        cy.get('button').contains('Salvar').click()
        cy.get('ul').should('contain', 'Nome Editado')
        cy.get('ul').should('contain', '987654321')
        cy.get('ul').should('contain', 'editado@teste.com')
    })

    it('Deve remover um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('button.delete').first().click()
        cy.get('ul').should('not.contain', 'Nome Editado')
        cy.get('ul').should('not.contain', '987654321')
        cy.get('ul').should('not.contain', 'editado@teste.com')
    })
})
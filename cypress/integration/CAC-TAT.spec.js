

describe('Central de Atendimento ao Cliente TAT', function () {
    const tres_segundos_em_ms = 3000
    beforeEach(function () {
        cy.visit('src/index.html')


    })
    it('Teste 1: Verifica o título da aplicação', function () {
        //cy.visit('src/index.html')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })
    //1
    it('Teste 1.1: Preenche os campos obrigatórios e envia o formulário', function () {
        cy.clock()
        cy.get('#firstName').type('Jhonatta Matias')
        cy.get('#lastName').type('Aguiar')
        cy.get('#email').type('jhonatta.matiassqa@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#phone').type('73982245157')
        cy.get('#open-text-area').type('Preciso muito de money! Me da um emprego como QA')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.success').should('not.visible')
    })
    //2
    it('Teste 02: Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.clock()
        cy.get('#firstName').type('Jhonatta Matias')
        cy.get('#lastName').type('Aguiar')
        cy.get('#email').type('jhonatta.matiassqa@@@@@@@gmail.com')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.error').should('not.be.visible')



    })
    //3
    it('Teste 03: Campo telefone continua vazio após tentar utilizar caracteres não-numéricos', () => {
        cy.get('#phone').type('TELEFONE').should('have.value', '')

    })

    //4
    it('Teste 04: Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.clock()
        cy.get('#phone-checkbox').click()
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.error').should('not.be.visible')

    })
    //5
    it('Teste 05: Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName').type('Jhonatta Matias').should('have.value', 'Jhonatta Matias')
            .clear().should('have.value', '')
        cy.get('#lastName').type('Aguiar').should('have.value', 'Aguiar')
            .clear().should('have.value', '')
        cy.get('#email').type('jhonatta.matiasqa@gmail.com').should('have.value', 'jhonatta.matiasqa@gmail.com')
            .clear().should('have.value', '')
        cy.get('#phone').type('73982245157').should('have.value', '73982245157')
            .clear().should('have.value', '')


    });
    //6
    it('Teste 06: Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.clock()
        cy.get('#phone').type('73982245157').should('have.value', '73982245157')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.error').should('not.be.visible')




    });
    //7- Tem um comando customizado que se encontra na pasta de suporte.

    it('Teste 07: Envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldAndSubmit()
        cy.clock()
        cy.get('.success').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.success').should('not.be.visible')


    });
    //8
    it('Teste 08: Seleciona um produto (YouTube) por seu texto', () => {
        cy.clock()
        cy.get('#firstName').type('Jhonatta Matias')
        cy.get('#lastName').type('Aguiar')
        cy.get('#email').type('jhonatta.matiassqa@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#phone').type('73982245157')
        cy.get('#product').select('YouTube')
            .should('have.value', 'youtube')
        cy.get('#open-text-area').type('lorem ipsom test')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.success').should('not.be.visible')



    });
    //9
    it('Teste 09: Seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.clock()
        cy.get('#firstName').type('Jhonatta Matias')
        cy.get('#lastName').type('Aguiar')
        cy.get('#email').type('jhonatta.matiassqa@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#phone').type('73982245157')
        cy.get('#product').select('mentoria')
            .should('have.value', 'mentoria')
        cy.get('#open-text-area').type('lorem ipsom test')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.success').should('not.be.visible')



    });
    //10
    it('Teste 10: Seleciona um produto (Blog) por seu índice', () => {
        cy.clock()
        cy.get('#firstName').type('Jhonatta Matias')
        cy.get('#lastName').type('Aguiar')
        cy.get('#email').type('jhonatta.matiassqa@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#phone').type('73982245157')
        cy.get('#product').select([1])
            .should('have.value', 'blog')
        cy.get('#open-text-area').type('lorem ipsom test')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.success').should('not.be.visible')



    });
    //11
    it('Teste 11: Marca o tipo de atendimento "Feedback"', () => {
        cy.clock()
        cy.get('#firstName').type('Jhonatta Matias')
        cy.get('#lastName').type('Aguiar')
        cy.get('#email').type('jhonatta.matiassqa@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#phone').type('73982245157')
        //cy.get(':nth-child(4) > input').check().should('have.value', 'feedback')
        //o GET acima também pode ser codado:↓
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
        cy.get('#open-text-area').type('lorem ipsom test')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.success').should('not.be.visible')


    });
    //12
    it('Teste 12: Marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function ($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            });
    });

    //13
    it('Teste 13: Marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('input[type="checkbox"]').check()
            .should('be.checked')
            //cy.get('#phone-checkbox').uncheck()
            // OU ↓
            .last()
            .uncheck()
            .should('not.be.checked')


    });

    //14
    it('Teste 14: Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.clock()
        cy.get('#firstName').type('Jhonatta Matias')
        cy.get('#lastName').type('Aguiar')
        cy.get('#email').type('jhonatta.matiassqa@gmail.com')
        cy.get('#phone-checkbox').check().should('be.checked')
        cy.get('.phone-label-span').should('be.visible')
        //cy.get('#phone').type('73982245157')
        cy.get('#open-text-area').type('lorem ipsom test')
        cy.contains('button', 'Enviar').click()
        cy.get('.error > strong').should('be.visible')
        cy.tick(tres_segundos_em_ms)
        cy.get('.error > strong').should('not.be.visible')



        //cy.get('.success').should('be.visible')

    });

    it('Teste 15: Seleciona um arquivo da pasta fixtures', () => {
        cy.get('#file-upload').should('not.have.value')
            .selectFile([
                './cypress/fixtures/example.json',
                './cypress/fixtures/teste.json'
            ])
            .then(function (input) {
                expect(input[0].files[0].name).to.equal('example.json')
                expect(input[0].files[1].name).to.equal('teste.json')

            });


    });
    it('Teste 16: Seleciona um arquivo simulando um drag-and-drop', () => {
        cy.get('#file-upload').should('not.have.value')
            .selectFile(
                './cypress/fixtures/example.json', { action: 'drag-drop' }
                //'./cypress/fixtures/teste.json'
            )
            .then(function (input) {
                expect(input[0].files[0].name).to.equal('example.json')
                //expect(input[0].files[1].name).to.equal('teste.json')

            });



    });
    it('Teste 17: Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture('example.json').as('testExample')
        cy.get('#file-upload').selectFile('@testExample')
            .then(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })


    });

    it('Teste 18: Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')


    });

    it('Teste 19: Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
        cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade')
        cy.contains('Talking About Testing').should('be.visible')

    });

    it('Teste 20: Testa a página da política de privacidade de forma independente', () => {
        cy.visit('src/privacy.html')
        cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade')
        cy.contains('Talking About Testing').should('be.visible')


    });
    Cypress._.times(10, () => {
        it.only('Teste 21: Testa um formulario varias vezes utilizando o "times"', () => {
            const customer = {
                firstName: "João",
                lastName: "Silva",
                email: "joaosilva@example.com"
            };

            cy.get('#firstName').type(customer.firstName)
            cy.get('#lastName').type(customer.lastName)
            cy.get('#email').type(customer.email)
            cy.get('#open-text-area').type('lorem ipsom test')
            cy.get('button[type="submit"]').click()
            cy.get('.success').should('be.visible')




        })



    })







});









//   cy.get('#firstName').type('Jhonatta')
//     cy.get('#lastName').type('Matias Aguiar')
//     cy.get('#email').type('jhonatta.matiassqa@gmail.com')
//     cy.get('#open-text-area').type('Preciso de money, quero emprego')
//     cy.get('button[type="submit"]').click()
//     cy.get('.success').should('be.visible')
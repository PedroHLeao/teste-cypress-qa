Feature: Login

Scenario: Login com sucesso
  Given que estou na tela de login com acesso válido
  When faço login com usuário válido
  Then vejo que estou logado

Scenario: Login inválido
  Given que estou na tela de login com acesso inválido
  When faço login com senha inválida
  Then devo ver mensagem de erro
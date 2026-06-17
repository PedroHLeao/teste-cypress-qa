Feature: API Trello

Scenario: Validar API
  Given que faço uma requisição GET
  Then o status deve ser 200
  And exibo o nome da lista
Feature: Carrinho

Scenario: Adicionar produto e validar no carrinho
  Given que estou na home
  When adiciono um produto ao carrinho
  And vou para o carrinho
  Then valido o produto no carrinho
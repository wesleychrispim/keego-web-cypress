Feature: Realizar Busca

  Scenario: Buscar por um produto específico
    Given que eu abro a página inicial
    When eu realizo uma busca por "Winter Top"
    And a lista de resultados deve conter produtos relacionados a "Winter Top"
    And o usuario colocar o produto no carrinho
    Then o usuario devera validar se esta tudo certo com o que foi adicionado no carrinho
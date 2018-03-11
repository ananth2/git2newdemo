Feature: service feature test

  @service
  Scenario Outline: service create
    Given I click "service"
    Then i enter values "<name>","<value>","<status>"

    Examples: 
      | name  | value | status  |
      | name1 | helo  | success |
      | name2 | helo1 | Fail    |

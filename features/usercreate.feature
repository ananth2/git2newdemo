#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag3
Feature: trak eye case creation
  I want to use this template for my feature file

  Scenario: Title of your scenario outline
    Given I want to write a step with
    When I check for the in step
    Then I verify the  in step

  Scenario: create new case
    Given i am in the create case page
    When i click the create case link on the page
    Then i should fill the form

  Scenario Outline: Business rule create a service1.
    When user creates a service by clicking create service link and fills "<description>"  "<servicedate>"

    Examples: 
      | description | servicedate |
      | desc1       | 26/05/2017  |
      | desc1       | 26/05/2017  |
      | desc1       | 26/05/2017  |

#Author: Ananth ram
@tag0
Feature: Trak eye application login

  Scenario: entering login credentials for trakeye application
    Given i have firefox browser opened on my desktop
    When I enter "Bang_North" and "Lab@1234"  user name and password on the page as credentials
    Then I should log in successfully

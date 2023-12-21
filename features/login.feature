Feature: SignUp

  Scenario Outline: Create a User

    Given I am on the registration page
    When I enter with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | This user already exist.       |
      | foobar   | barfoo               | Your username is invalid!      |

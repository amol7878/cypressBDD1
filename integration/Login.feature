Feature:login functionality

Check the login functionality

 @focus  
Scenario:Validate the login functionality with valid credentials

     Given I open Sauce demo Url
     When Fill the Username
     Then Fill the password
     Then Click on login Button
     And validate sucessful login.



  
Scenario:Validate the login functionality with ivalid credentials

     Given I open Sauce demo Url.
     When Fill the Username.
     Then Fill the password.
     Then Click on login Button.
     # And validate sucessful login.


     
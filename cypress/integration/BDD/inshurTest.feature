Feature: Test InshurApplication

    Testing whether all buttons are working fine & displaying based on specific button
    
    Scenario Outline: Scenario Outline name: Validate user details based on button click on Inshur Website
        Given the user visits Inshur Test Website
        When they click on user "<userNo>"
        Then assert name should be "<Name>"
        And assert emailid should be "<email>"
        And assert phone should be "<phoneNo>"
        And assert city should be "<city>"
        And assert State should be "<state>"
        And assert Country should be "<country>"
        And assert Organization should be "<Organization>"
        And assert Job profile should be "<jobProfile>"
        And assert Additional info should be "<additionalInfo>"
    
    Examples:
        | userNo | Name        | email           | phoneNo    | city   | state          | country | Organization | jobProfile       | additionalInfo|
        | 1  | John Smith  | jsmith@test.com | 0208092029 | London | Greater London | England | Company 1    |Software Developer| a high Value Customer |
        | 2  | Jeff Bridges| abcd@test.com   | 0161 225 7632|Manchester|Manchester  | England | Company 2    |Software Developer| Buys Products Rarely|
        | 3  | Steve Jones | steven.jones@test.com|01403 215100|Horsham|West Sussex | England | Company 3    |Software Developer|Buys Lots of Products in general|
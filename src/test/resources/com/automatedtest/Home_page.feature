Feature: Validate todo list application

  @validate_todo_count
  Scenario Outline: As todoMVC user add <add> todo items and remove <remove> todo items
    Given I navigates to HomePage
    When I add <add> todo items to list
    And I remove <remove> todo items to list
    Then todo list is displayed with <final> items
    Examples:
      | add | remove | final |
      | 5   | 2      | 3     |
      | 20  | 5      | 15    |

  @validate_todo_edit
  Scenario:  As todoMVC user change existing todo items
    Given I navigates to HomePage
    When I add todo items to list
      | eat food | earn money | study book |
    And validate todo list item number "3 item left!"
    #here changing exiting todoitem eat food to eat food less, validating same in last step
    And I edit existing todo items to list
      | eat food->eat food less | earn money->earn money more | study book->study book and write notes |
    Then search bar display todo items in list
      | eat food less | earn money more | study book and write notes |

  @validate_check_done_items
  Scenario:  As todoMVC user check done items
    Given I navigates to HomePage
    When I add todo items to list
      | running | jogging | eating |
    # here clicking on checkbox for running
    And I check the todo list items
      | running |
    # jogging and eating are in not completed list
    Then search bar display todo items in list
      | jogging | eating |
        # running shows in completed list
    And validate todo list item number "2 item left!"
    And search bar displayed done items in list
      | running |
    And validate todo list item number "1 item left!"
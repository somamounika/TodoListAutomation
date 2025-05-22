$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/automatedtest/Home_page.feature");
formatter.feature({
  "name": "Validate todo list application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As todoMVC user add \u003cadd\u003e todo items and remove \u003cremove\u003e todo items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validate_todo_count"
    }
  ]
});
formatter.step({
  "name": "I navigates to HomePage",
  "keyword": "Given "
});
formatter.step({
  "name": "I add \u003cadd\u003e todo items to list",
  "keyword": "When "
});
formatter.step({
  "name": "I remove \u003cremove\u003e todo items to list",
  "keyword": "And "
});
formatter.step({
  "name": "todo list is displayed with \u003cfinal\u003e items",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "add",
        "remove",
        "final"
      ]
    },
    {
      "cells": [
        "5",
        "2",
        "3"
      ]
    },
    {
      "cells": [
        "20",
        "5",
        "15"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As todoMVC user add 5 todo items and remove 2 todo items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validate_todo_count"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigates to HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.a_todoMVC_user_navigates_to_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I add 5 todo items to list",
  "keyword": "When "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_add_todo_items_to_list(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I remove 2 todo items to list",
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_remove_todo_items_to_list(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "todo list is displayed with 3 items",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.search_bar_is_displayed_items_in_list(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As todoMVC user add 20 todo items and remove 5 todo items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validate_todo_count"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigates to HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.a_todoMVC_user_navigates_to_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I add 20 todo items to list",
  "keyword": "When "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_add_todo_items_to_list(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I remove 5 todo items to list",
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_remove_todo_items_to_list(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "todo list is displayed with 15 items",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.search_bar_is_displayed_items_in_list(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As todoMVC user change existing todo items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@validate_todo_edit"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigates to HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.a_todoMVC_user_navigates_to_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I add todo items to list",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_add_todo_items_to_list(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate todo list item number \"3 items left!\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.search_bar_displayed_done_items_in_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I edit existing todo items to list",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_edit_todo_items_to_list(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "search bar display todo items in list",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.search_bar_is_displayed_in_list(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As todoMVC user check done items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@validate_check_done_items"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigates to HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.a_todoMVC_user_navigates_to_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I add todo items to list",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_add_todo_items_to_list(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check the todo list items",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.i_check_the_todo_list_items(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "search bar display todo items in list",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.search_bar_is_displayed_in_list(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate todo list item number \"2 items left!\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.search_bar_displayed_done_items_in_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
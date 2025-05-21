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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure. \nHost info: host: \u0027ST-MAC-C02Y80XXJHD2\u0027, ip: \u0027fe80:0:0:0:4c:24db:7771:5125%en0\u0027\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:70)\n\tat com.automatedtest.infrastructure.driver.Setup.setWebDriver(Setup.java:31)\nCaused by: org.openqa.selenium.WebDriverException: Driver server process died prematurely.\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002715.3.1\u0027, java.version: \u002723.0.2\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:239)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:98)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:70)\n\tat com.automatedtest.infrastructure.driver.Setup.setWebDriver(Setup.java:31)\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:316)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:240)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:214)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:155)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:385)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:507)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:495)\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigates to HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.a_todoMVC_user_navigates_to_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I add 5 todo items to list",
  "keyword": "When "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_add_todo_items_to_list(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I remove 2 todo items to list",
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_remove_todo_items_to_list(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "todo list is displayed with 3 items",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.search_bar_is_displayed_items_in_list(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"this.driver\" is null\n\tat com.automatedtest.infrastructure.driver.TearDown.saveScreenshotsForScenario(TearDown.java:28)\n\tat com.automatedtest.infrastructure.driver.TearDown.quitDriver(TearDown.java:20)\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure. \nHost info: host: \u0027ST-MAC-C02Y80XXJHD2\u0027, ip: \u0027fe80:0:0:0:4c:24db:7771:5125%en0\u0027\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:70)\n\tat com.automatedtest.infrastructure.driver.Setup.setWebDriver(Setup.java:31)\nCaused by: org.openqa.selenium.WebDriverException: Driver server process died prematurely.\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002715.3.1\u0027, java.version: \u002723.0.2\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:239)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:98)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:70)\n\tat com.automatedtest.infrastructure.driver.Setup.setWebDriver(Setup.java:31)\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:316)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:240)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:214)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:155)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:385)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:507)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:495)\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigates to HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.a_todoMVC_user_navigates_to_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I add 20 todo items to list",
  "keyword": "When "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_add_todo_items_to_list(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I remove 5 todo items to list",
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.user_remove_todo_items_to_list(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "todo list is displayed with 15 items",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.search_bar_is_displayed_items_in_list(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"this.driver\" is null\n\tat com.automatedtest.infrastructure.driver.TearDown.saveScreenshotsForScenario(TearDown.java:28)\n\tat com.automatedtest.infrastructure.driver.TearDown.quitDriver(TearDown.java:20)\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure. \nHost info: host: \u0027ST-MAC-C02Y80XXJHD2\u0027, ip: \u0027fe80:0:0:0:4c:24db:7771:5125%en0\u0027\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:70)\n\tat com.automatedtest.infrastructure.driver.Setup.setWebDriver(Setup.java:31)\nCaused by: org.openqa.selenium.WebDriverException: Driver server process died prematurely.\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002715.3.1\u0027, java.version: \u002723.0.2\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:239)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:98)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:70)\n\tat com.automatedtest.infrastructure.driver.Setup.setWebDriver(Setup.java:31)\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:316)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:240)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:214)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:155)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:385)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:507)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:495)\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigates to HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.a_todoMVC_user_navigates_to_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"this.driver\" is null\n\tat com.automatedtest.infrastructure.driver.TearDown.saveScreenshotsForScenario(TearDown.java:28)\n\tat com.automatedtest.infrastructure.driver.TearDown.quitDriver(TearDown.java:20)\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure. \nHost info: host: \u0027ST-MAC-C02Y80XXJHD2\u0027, ip: \u0027fe80:0:0:0:4c:24db:7771:5125%en0\u0027\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:70)\n\tat com.automatedtest.infrastructure.driver.Setup.setWebDriver(Setup.java:31)\nCaused by: org.openqa.selenium.WebDriverException: Driver server process died prematurely.\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002715.3.1\u0027, java.version: \u002723.0.2\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:239)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:98)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:242)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:70)\n\tat com.automatedtest.infrastructure.driver.Setup.setWebDriver(Setup.java:31)\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:316)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:240)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:214)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:155)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:385)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:507)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:495)\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigates to HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.a_todoMVC_user_navigates_to_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "search bar displayed done items in list",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.steps.HomePageSteps.search_bar_displayed_done_items_in_list(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"this.driver\" is null\n\tat com.automatedtest.infrastructure.driver.TearDown.saveScreenshotsForScenario(TearDown.java:28)\n\tat com.automatedtest.infrastructure.driver.TearDown.quitDriver(TearDown.java:20)\n",
  "status": "failed"
});
});
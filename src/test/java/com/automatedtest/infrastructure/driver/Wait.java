package com.automatedtest.infrastructure.driver;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class Wait {

    private final WebDriver driver;

    public Wait(WebDriver driver) {
        this.driver = driver;
    }

    private <T> void waitUntilCondition(ExpectedCondition<T> condition, String timeoutMessage, int timeoutInSeconds) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutInSeconds));
        wait.withMessage(timeoutMessage);
        wait.until(condition);
    }

    public void forLoading(int timeoutInSeconds) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutInSeconds));
        wait.withMessage("Page didn't load after " + timeoutInSeconds + " seconds.");
        wait.until(webDriver -> ((JavascriptExecutor) webDriver)
                .executeScript("return document.readyState").equals("complete"));
    }

    public void forElementToBeDisplayed(int timeoutInSeconds, WebElement webElement, String webElementName) {
        ExpectedCondition<WebElement> condition = ExpectedConditions.visibilityOf(webElement);
        String timeoutMessage = webElementName + " wasn't displayed after " + timeoutInSeconds + " seconds.";
        waitUntilCondition(condition, timeoutMessage, timeoutInSeconds);
    }

    public void forPresenceOfElements(int timeoutInSeconds, By elementLocator, String elementName) {
        ExpectedCondition<List<WebElement>> condition = ExpectedConditions.presenceOfAllElementsLocatedBy(elementLocator);
        String timeoutMessage = elementName + " elements were not present after " + timeoutInSeconds + " seconds.";
        waitUntilCondition(condition, timeoutMessage, timeoutInSeconds);
    }
}

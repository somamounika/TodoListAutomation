package com.automatedtest.pages;

import com.automatedtest.basepage.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.stream.Collectors;


public class HomePage extends BasePage {

    private static final String HOME_PAGE_URL = "https://todomvc.com/examples/react/dist/";

    @FindBy(xpath = "//li[@data-testid='todo-item']")
    private List<WebElement> todoItems;

    @FindBy(id = "#todo-input")
    private WebElement searchInput;

    @FindBy(xpath = "//button[@class='destroy']")
    private List<WebElement> removedItems;

    @FindBy(css = "li[class=completed] label")
    private List<WebElement> completedItems;

    @FindBy(xpath = "//li[@class!='completed' and @data-testid='todo-item']//label")
    private List<WebElement> existingItemsByName;

    @FindBy(xpath = "//li[@class='todo completed']//label")
    private List<WebElement> doneItems;


    @FindBy(css = "span[class='todo-count']")
    private WebElement todoCountMessage;

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    public void goToHomePage() {
        driver.get(HOME_PAGE_URL);
        wait.forElementToBeDisplayed(5, this.searchInput, "searchBox");
    }

    public void addItem(int itemCount) {
        for (int i = 0; i < itemCount; i++) {
            this.searchInput.sendKeys("testItem" + i);
            this.searchInput.sendKeys(Keys.ENTER);
        }
    }

    public void addItem(String itemName) {
        this.searchInput.sendKeys(itemName);
        this.searchInput.sendKeys(Keys.ENTER);
    }

    public void removeItem(int itemCount) {
        for (int i = 0; i < itemCount; i++) {
            WebElement todoRow = todoItems.get(i);
            WebElement closeBtn = todoRow.findElement(By.xpath("//*[@class='destroy']"));
            javascriptExecutor.executeScript("arguments[0].scrollIntoView(true);", todoRow);
            actions.moveToElement(todoRow).build().perform();
            wait.forLoading(1);
            javascriptExecutor.executeScript("arguments[0].click()", closeBtn);
        }
    }

    public void editItems(String existingToItemName, String newToDoItemName) {
        for (WebElement todoItem : existingItemsByName) {
            if (todoItem.getText().equals(existingToItemName)) {
                javascriptExecutor.executeScript("arguments[0].innerText='" + newToDoItemName + "'", todoItem);
            }
        }
    }

    public List<String> getToDoItems() {
        return existingItemsByName.stream().map(WebElement::getText).collect(Collectors.toList());
    }

    public List<String> getDoneItems() {
        return doneItems.stream().map(WebElement::getText).collect(Collectors.toList());
    }

    public Integer getToDoItemCount() {
        return existingItemsByName.size();
    }

    public void checkDoneItems(String doneItemName) {
        WebElement checkbox;
        String itemName;
        for (WebElement label : todoItems) {
            checkbox = label.findElement(By.xpath("//input[@class='toggle']"));
            itemName = label.findElement(By.xpath("//label[text()='" + doneItemName + "']")).getText();
            if (itemName.equals(doneItemName)) {
                javascriptExecutor.executeScript("arguments[0].click()", checkbox);
            }
        }
    }

    public String getCountMessage() {
        wait.forElementToBeDisplayed(5, this.todoCountMessage, "searchBox");
        return todoCountMessage.getText();
    }
}

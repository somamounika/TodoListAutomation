package com.automatedtest.infrastructure.driver;

import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class Setup {

    public static WebDriver driver;
    public static JavascriptExecutor javascriptExecutor;
    public static Actions actions;
    static String baseLocation = System.getProperty("user.dir");

    @Before
    public void setWebDriver() throws Exception {

        String browser = System.getProperty("browser");
        if (browser == null) {
            browser = "chrome";
        }
       // System.setProperty("webdriver.chrome.verboseLogging", "true");
       // System.setProperty("webdriver.chrome.driver", baseLocation + "//src//test//resources//executables//chromedriver.exe");
        switch (browser) {
            case "chrome":
                WebDriverManager.chromedriver().setup();
                ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("--remote-allow-origins=*");
                chromeOptions.addArguments("['start-maximized']");
                driver = new ChromeDriver(chromeOptions);
                break;
            case "firefox":
                driver = new FirefoxDriver();
                driver.manage().window().maximize();
                break;
            default:
                throw new IllegalArgumentException("Browser \"" + browser + "\" isn't supported.");
        }
        javascriptExecutor = ((JavascriptExecutor) driver);
        actions = new Actions(driver);
    }
}

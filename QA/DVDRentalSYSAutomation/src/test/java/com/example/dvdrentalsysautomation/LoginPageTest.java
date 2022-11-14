package com.example.dvdrentalsysautomation;

import static org.junit.jupiter.api.Assertions.*;
import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.logevents.SelenideLogger;
import io.qameta.allure.selenide.AllureSelenide;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import static com.codeborne.selenide.Condition.attribute;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.*;

public class LoginPageTest {

    @BeforeAll
    public static void setUpAll() {
        Configuration.browserSize = "1280x800";
        SelenideLogger.addListener("allure", new AllureSelenide());

        System.setProperty ("webdriver.chrome.driver", "C:\\Users\\Darragh\\IdeaProjects\\DVDRentalSYSAutomation\\drivers\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.setBinary("C:\\Program Files\\Google\\Chrome\\Application");
    }

    @Test
    public void loginButtonAlert() throws InterruptedException {

        WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:3000/login");
        WebElement loginBtn = driver.findElement(By.xpath("//button[text() = 'Login']"));
        loginBtn.click();
        TimeUnit.SECONDS.sleep(3);

        Boolean foundAlert = false;

        try {
            driver.switchTo().alert();
            foundAlert = true;
        }
        catch (NoAlertPresentException Ex) {
            foundAlert = false;
        }

        driver.quit();

        assertEquals(true, foundAlert);
    }

    @Test
    public void loginButtonValid() throws InterruptedException {

        WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:3000/login");
        WebElement emailIn = driver.findElement(By.xpath("//input[@id = 'email']"));
        WebElement passIn = driver.findElement(By.xpath("//input[@id = 'password']"));
        WebElement loginBtn = driver.findElement(By.xpath("//button[text() = 'Login']"));

        emailIn.sendKeys("darragh@elbel.ie");
        passIn.sendKeys("123456");
        TimeUnit.SECONDS.sleep(3);
        loginBtn.click();



        TimeUnit.SECONDS.sleep(3);
        String URL = driver.getCurrentUrl();
        driver.quit();

        assertEquals("http://localhost:3000/", URL);
    }

    @Test
    public void registerLink() throws InterruptedException {

        WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:3000/login");
        TimeUnit.SECONDS.sleep(3);
        WebElement regLink = driver.findElement(By.xpath("//a[@class='regLink']"));
        regLink.click();

        String URL = driver.getCurrentUrl();
        TimeUnit.SECONDS.sleep(3);

        driver.quit();

        assertEquals("http://localhost:3000/register", URL);
    }

}

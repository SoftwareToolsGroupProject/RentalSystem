package com.example.dvdrentalsysautomation;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$x;

public class LoginPage {
    public SelenideElement loginButton = $x("//button[text() = 'Login']");
    public SelenideElement registerLink = $x("//a[@class='regLink']");
    public SelenideElement emailIn = $x("//input[@id='email']");
    public SelenideElement passwordIn = $x("//input[@id='password']");


}

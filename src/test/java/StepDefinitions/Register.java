package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Register
{
    WebDriver driver;

    @Given("^User able to open Browser1$")
    public void user_able_to_open_Browser1()
    {
        WebDriverManager.chromedriver().setup();
        driver =new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Given("^Enter an Url1$")
    public void enter_an_Url1()
    {
        driver.get("https://demo.nopcommerce.com/");
    }


    @When("^User Click on Register btn$")
    public void user_Click_on_Register_btn()
    {
        driver.findElement(By.className("ico-register")).click();
    }

    @Then("^User able to enter personal details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"  \"([^\"]*)\" \"([^\"]*)\"$")
    public void user_able_to_enter_personal_details(String Firstname, String Lastname, String DOB, String DOM, String DOY, String Email, String coName, String password, String confirmPassword)
    {
        driver.findElement(By.id("gender-male")).click();
        driver.findElement(By.id("FirstName")).sendKeys(Firstname);
        driver.findElement(By.id("LastName")).sendKeys(Lastname);
        driver.findElement(By.name("DateOfBirthDay")).sendKeys(DOB);
        driver.findElement(By.name("DateOfBirthMonth")).sendKeys(DOM);
        driver.findElement(By.name("DateOfBirthYear")).sendKeys(DOY);
        driver.findElement(By.xpath("//*[@id=\"Email\"]")).sendKeys(Email);
        driver.findElement(By.xpath("//input[@id='Company']")).sendKeys(coName);
        driver.findElement(By.xpath("//input[@id='Newsletter']")).click();
        driver.findElement(By.xpath("//*[@id=\"Password\"]")).sendKeys(password);
        driver.findElement(By.xpath("//*[@id=\"ConfirmPassword\"]")).sendKeys(confirmPassword);

    }

    @Then("^click on Register btn submit$")
    public void click_on_Register_btn_submit()
    {
        driver.findElement(By.xpath("//button[@id='register-button']")).click();
    }

    @Then("^User close the browser1$")
    public void user_close_the_browser1()
    {
        driver.close();
    }


}

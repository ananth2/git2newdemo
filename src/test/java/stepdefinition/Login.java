package stepdefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;








public class Login extends Stepdefinitionabs{
public static Properties pr;
public static FileInputStream fis;
		
	WebDriver dr=getDriver();
	//Properties pr=getProperty();
	

	
		
		
		
	@Before("@tag0")
	public void before() throws IOException{
		//dr.get("http://trakeye.com");
		fis=new FileInputStream("C:\\Users\\Admin\\workspace\\autotrakeye\\src\\test\\java\\stepdefinition\\object.properties");
		pr=new Properties();
		pr.load(fis);	
		System.out.println("hello");
		
		
	}
	
	
	@Given("^i have firefox browser opened on my desktop$")
	public void i_have_firefox_browser_opened_on_my_desktop() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		dr.get("http://trakeye.com");
	   
	}
	
	@When("^I enter \"(.*?)\" and \"(.*?)\"  user name and password on the page as credentials$")
	public void i_enter_and_user_name_and_password_on_the_page_as_credentials(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		dr.findElement(By.xpath("html/body/div[1]/div[1]/div[1]/header/nav/div/div/div[2]/ul/li[2]/a/span")).click();
		Thread.sleep(2000);
		dr.findElement(By.xpath(pr.getProperty("username"))).sendKeys(pr.getProperty("value"));
		dr.findElement(By.xpath(pr.getProperty("password"))).sendKeys(pr.getProperty("password1"));
		dr.findElement(By.xpath(pr.getProperty("signin"))).click();
		 
	}

	@Then("^I should log in successfully$")
	public void i_should_log_in_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}
	
	/*@When("^I click user management$")
	public void i_click_user_management() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		dr.findElement(By.xpath(pr.getProperty("usermanagement"))).click();
	    
	}

	@Then("^I should enter users successfully$")
	public void i_should_enter_users_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}
	
	@Then("^i create user by clicking link create user and enter user details$")
	public void i_create_user_by_clicking_link_create_user_and_enter_user_details() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		dr.findElement(By.xpath(pr.getProperty("user"))).click();
	   
	}*/

}

package stepdefinition;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Services extends Stepdefinitionabs{
	
	
	
	WebDriver dr=getDriver();
	public FileInputStream fis;
	
	
	
	@Before("@service")
	public void before() throws IOException{
		//dr.get("http://trakeye.com");
		fis=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\stepdefinition\\object.properties");
		pr=new Properties();
		pr.load(fis);	
		System.out.println("hello");
		
		
	}
	
	
	@Given("^I click \"(.*?)\"$")
	public void i_click(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   Thread.sleep(2000);
	}

	@Then("^i enter values \"(.*?)\",\"(.*?)\",\"(.*?)\"$")
	public void i_enter_values(String arg1, String arg2, String arg3) throws Throwable {
	    try {
			// Write code here that turns the phrase above into concrete actions
	    	 Thread.sleep(2000);
			dr.findElement(By.xpath(pr.getProperty("service"))).click();
			 Thread.sleep(2000);
			dr.findElement(By.xpath(pr.getProperty("crservice"))).click();
			dr.findElement(By.xpath(pr.getProperty("description"))).sendKeys(arg1);
			dr.findElement(By.xpath(pr.getProperty("description1"))).sendKeys(arg2);
			dr.findElement(By.xpath(pr.getProperty("description2"))).sendKeys(arg2);
			Assert.assertEquals(true, dr.findElement(By.xpath(pr.getProperty("actual"))).isDisplayed());
			Reporter.log("passing the test", true);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	    
	}


}

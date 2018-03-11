package stepdefinition;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CaseCreation extends Stepdefinitionabs {
	
	
	public static Properties pr;
	public static FileInputStream fis;
			
		WebDriver dr=getDriver();
		//Properties pr=getProperty();
		

		
			
			
			
		@Before("@tag3")
		public void before() throws IOException{
			//dr.get("http://trakeye.com");
			fis=new FileInputStream("C:\\Users\\Admin\\workspace\\autotrakeye\\src\\test\\java\\stepdefinition\\object.properties");
			pr=new Properties();
			pr.load(fis);	
			System.out.println("hello");
			
			
		}
		
		
		@Given("^I want to write a step with$")
		public void i_want_to_write_a_step_with() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    
		}

		@When("^I check for the in step$")
		public void i_check_for_the_in_step() throws Throwable {
			Thread.sleep(4000);
			dr.findElement(By.xpath(pr.getProperty("createcase"))).click();
			
		    
		}

		@Then("^I verify the  in step$")
		public void i_verify_the_in_step() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    
		}


		@Given("^i am in the create case page$")
		public void i_am_in_the_create_case_page() throws Throwable {
			Thread.sleep(4000);
		    dr.findElement(By.xpath(pr.getProperty("newcase"))).click();
		   
		   
		}

		@When("^i click the create case link on the page$")
		public void i_click_the_create_case_link_on_the_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   
		}

		@Then("^i should fill the form$")
		public void i_should_fill_the_form() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    
		}
       
		@When("^user creates a service by clicking create service link and fills \"(.*?)\"  \"(.*?)\"$")
		public void user_creates_a_service_by_clicking_create_service_link_and_fills(String arg1, String arg2) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			  dr.findElement(By.xpath(pr.getProperty("des"))).sendKeys(arg1);
			  dr.findElement(By.xpath(pr.getProperty("des1"))).sendKeys(arg2);
		   
		}

		
}

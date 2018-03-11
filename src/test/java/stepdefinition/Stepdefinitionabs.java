package stepdefinition;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;



public class Stepdefinitionabs {
	
protected static WebDriver dr;
protected static Properties pr;

	
	
	protected WebDriver getDriver() {
		if(dr==null){
			dr=new FirefoxDriver();
			/*System.setProperty("webdriver.chrome.driver","C:\\Users\\Admin\\Desktop\\requests\\chromedriver.exe");
			 dr=new ChromeDriver();*/
			
			}
		return dr;
			
	}

	protected Properties getProperty() throws IOException{
		if(pr==null){
			pr=new Properties();
			/*System.setProperty("webdriver.chrome.driver","C:\\Users\\Admin\\Desktop\\requests\\chromedriver.exe");
			 dr=new ChromeDriver();*/
			FileInputStream fis =new FileInputStream("C:\\Users\\Admin\\workspace\\autotrakeye\\src\\test\\java\\stepdefinition\\object.properties");
			pr.load(fis);
			}
		return pr;	
		
		
	}
	
}

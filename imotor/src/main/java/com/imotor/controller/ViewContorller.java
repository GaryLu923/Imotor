package com.imotor.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;

/**
 * @author gary.lu
 * 
 */
@Controller
@RequestMapping("/")
public class ViewContorller {
	
	private DBContorller dbController;
	private String weatherJsonString;
	private String vdspeedJsonString;
	private Weather weather;
	private ArrayList<Weather> weatherList = new ArrayList<Weather>();
	private VDSpeed vdspeed;
	private ArrayList<VDSpeed> vdspeedList = new ArrayList<VDSpeed>();
	private Gson gson = new Gson();
	
	/**
	 * get view of Index.jsp
	 * @return String
	 */
	@RequestMapping(value="index",method=RequestMethod.GET)
	public String getIndexView(){
		return "index";
		
	}
	
	/**
	 * get view of hello.jsp
	 * @return ModelAndView 
	 */
	@RequestMapping(value="hello/getVDSpeedDataSet",method=RequestMethod.GET)
	public ModelAndView getVDSpeedDataSetView(){
		String message=getVDSpeedDataSet();
		return new ModelAndView("hello","message",message);
	}
	
	/**
	 * get view of hello.jsp
	 * @return ModelAndView 
	 */
	@RequestMapping(value="hello/getWeatherDataSet",method=RequestMethod.GET)
	public ModelAndView getWeatherDataSetView(){
		String message=getWeatherDataSet();
		return new ModelAndView("hello","message",message);
	}
	
	/**
	 * get data of Weather
	 * @return String (json) 
	 */
	public String getWeatherDataSet() {
		try {
			DBContorller dbController = new DBContorller(); 
			dbController.init("org.postgresql.Driver","jdbc:postgresql://localhost:5432/petclinic","ntvf","ntvf");
			weatherList = dbController.findWeatherData("select * from samples_weather");
			JsonElement element = gson.toJsonTree(weatherList, new TypeToken<List<Weather>>() {}.getType());
			if (! element.isJsonArray()) {
			// fail appropriately
			    throw new Exception();
			}
			dbController.closeConnection();
			JsonArray jsonArray = element.getAsJsonArray();
			weatherJsonString = jsonArray.toString();
			//System.out.println("weatherJsonString:"+weatherJsonString);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return weatherJsonString;
	}
	
	/**
	 * get data of VDSpeed
	 * @return String (json) 
	 */
	public String getVDSpeedDataSet() {
		try {
			DBContorller dbController = new DBContorller(); 
			dbController.init("org.postgresql.Driver","jdbc:postgresql://localhost:5432/petclinic","ntvf","ntvf");
			vdspeedList = dbController.findVDSpeedData("select * from vdspeed");
			JsonElement element = gson.toJsonTree(vdspeedList, new TypeToken<List<VDSpeed>>() {}.getType());
			if (! element.isJsonArray()) {
			// fail appropriately
			    throw new Exception();
			}
			dbController.closeConnection();
			JsonArray jsonArray = element.getAsJsonArray();
			vdspeedJsonString = jsonArray.toString();
			//System.out.println("weatherJsonString:"+weatherJsonString);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return vdspeedJsonString;
	}

	public DBContorller getDbController() {
		return dbController;
	}

	public void setDbController(DBContorller dbController) {
		this.dbController = dbController;
	}

	public String getWeatherJsonString() {
		return weatherJsonString;
	}

	public void setWeatherJsonString(String weatherJsonString) {
		this.weatherJsonString = weatherJsonString;
	}

	public Weather getWeather() {
		return weather;
	}

	public void setWeather(Weather weather) {
		this.weather = weather;
	}

	public ArrayList<Weather> getWeatherList() {
		return weatherList;
	}

	public void setWeatherList(ArrayList<Weather> weatherList) {
		this.weatherList = weatherList;
	}

	public Gson getGson() {
		return gson;
	}

	public void setGson(Gson gson) {
		this.gson = gson;
	}

	public VDSpeed getVdspeed() {
		return vdspeed;
	}

	public void setVdspeed(VDSpeed vdspeed) {
		this.vdspeed = vdspeed;
	}

	public ArrayList<VDSpeed> getVdspeedList() {
		return vdspeedList;
	}

	public void setVdspeedList(ArrayList<VDSpeed> vdspeedList) {
		this.vdspeedList = vdspeedList;
	}

	public String getVdspeedJsonString() {
		return vdspeedJsonString;
	}

	public void setVdspeedJsonString(String vdspeedJsonString) {
		this.vdspeedJsonString = vdspeedJsonString;
	}
	
	
	
}

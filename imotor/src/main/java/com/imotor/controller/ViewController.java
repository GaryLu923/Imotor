package com.imotor.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
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
public class ViewController {
	
	private DBController dbController;
	private String weatherJsonString;
	private String vdspeedJsonString;
	private String imotorJsonString;
	private Weather weather;
	private ArrayList<Weather> weatherList = new ArrayList<Weather>();
	private VDSpeed vdspeed;
	private ArrayList<VDSpeed> vdspeedList = new ArrayList<VDSpeed>();
	private Imotor imotor;
	private ArrayList<Imotor> imotorList = new ArrayList<Imotor>();
	private Gson gson = new Gson();
	private String DB_driver = "org.postgresql.Driver";
	private String DB_address = "jdbc:postgresql://localhost:5432/imotor";
	private String DB_user = "postgres";
	private String DB_password = "12345";
	/**
	 * get view of Index.jsp
	 * @return String
	 */
	@RequestMapping(value="index",method=RequestMethod.GET)
	public String getIndexView(){
		return "index";
	}
	
	/**
	 * get JSON of VDSpeed
	 * @return String 
	 */
	@RequestMapping(value="hello/getVDSpeedDataSet",method=RequestMethod.GET,produces = "text/plain;charset=UTF-8")
	public @ResponseBody String getVDSpeedDataSetView(){
//		String message = getVDSpeedDataSet();
		return getVDSpeedDataSet();
	}
	
	/**
	 * get JSON of weather
	 * @return String 
	 */
	@RequestMapping(value="hello/getWeatherDataSet",method=RequestMethod.GET,produces = "text/plain;charset=UTF-8")
	public @ResponseBody String getWeatherDataSetView(){
		return getWeatherDataSet();
	}
	
	/**
	 * get JSON of imotor
	 * @return String 
	 */
	@RequestMapping(value="hello/getImotorDataSet",method=RequestMethod.GET,produces = "text/plain;charset=UTF-8")
	public @ResponseBody String getImotorDataSetView(){
		return getImotorDataSet();

	}
	
	/**
	 * get data of Weather
	 * @return String (json) 
	 */
	public String getWeatherDataSet() {
		try {
			DBController dbController = new DBController(); 
			dbController.init(DB_driver,DB_address,DB_user,DB_password);
			weatherList = dbController.findWeatherData("select * from weather");
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
			DBController dbController = new DBController(); 
			dbController.init(DB_driver,DB_address,DB_user,DB_password);
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
			e.printStackTrace();
		}
		return vdspeedJsonString;
	}
	
	/**
	 * get data of Imotr
	 * @return String (json) 
	 */
	public String getImotorDataSet() {
		try {
			DBController dbController = new DBController(); 
			dbController.init(DB_driver,DB_address,DB_user,DB_password);
			imotorList = dbController.findImotorData("select * from imotor_info");
			JsonElement element = gson.toJsonTree(imotorList, new TypeToken<List<Imotor>>() {}.getType());
			if (! element.isJsonArray()) {
			// fail appropriately
			    throw new Exception();
			}
			dbController.closeConnection();
			JsonArray jsonArray = element.getAsJsonArray();
			imotorJsonString = jsonArray.toString();
			//System.out.println("weatherJsonString:"+weatherJsonString);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return imotorJsonString;
	}

	public DBController getDbController() {
		return dbController;
	}

	public void setDbController(DBController dbController) {
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

	public String getDB_address() {
		return DB_address;
	}

	public void setDB_address(String dB_address) {
		DB_address = dB_address;
	}

	public String getDB_user() {
		return DB_user;
	}

	public void setDB_user(String dB_user) {
		DB_user = dB_user;
	}

	public String getDB_password() {
		return DB_password;
	}

	public void setDB_password(String dB_password) {
		DB_password = dB_password;
	}

	public String getDB_driver() {
		return DB_driver;
	}

	public void setDB_driver(String dB_driver) {
		DB_driver = dB_driver;
	}

	public String getImotorJsonString() {
		return imotorJsonString;
	}

	public void setImotorJsonString(String imotorJsonString) {
		this.imotorJsonString = imotorJsonString;
	}

	public Imotor getImotor() {
		return imotor;
	}

	public void setImotor(Imotor imotor) {
		this.imotor = imotor;
	}

	public ArrayList<Imotor> getImotorList() {
		return imotorList;
	}

	public void setImotorList(ArrayList<Imotor> imotorList) {
		this.imotorList = imotorList;
	}
	
	
	
}

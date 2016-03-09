package com.imotor.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

/**
 * @author jason.lai
 * 
 */
public class DBContorller {
	
	Connection conn;
	Statement stmt;
	Weather weather;
	ArrayList<Weather> weatherList = new ArrayList<Weather>();
	VDSpeed vdspeed;
	ArrayList<VDSpeed> vdspeedList = new ArrayList<VDSpeed>(); 
	
	public void init(String DB_driver, String DB_address, String DB_user, String DB_password) throws Exception {
		try {
			Class.forName(DB_driver);
			conn = DriverManager.getConnection(DB_address,DB_user,DB_password);
		} catch ( Exception ex ) {  
			ex.printStackTrace();  
		}	
	}

	public ArrayList<Weather> findWeatherData(String query)throws Exception {
		try {
			stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			while (rs.next()) {
			   weather = new Weather();
			   weather.setId(rs.getString("id"));
			   weather.setRegion(rs.getString("region"));
			   weather.setStartTime1(rs.getString("starttime1"));
			   weather.setEndTime1(rs.getString("endtime1"));
			   weather.setPop1(rs.getString("pop1"));
			   weather.setStartTime2(rs.getString("starttime2"));
			   weather.setEndTime2(rs.getString("endtime2"));
			   weather.setPop2(rs.getString("pop2"));
			   weather.setStartTime3(rs.getString("starttime3"));
			   weather.setEndTime3(rs.getString("endtime3"));
			   weather.setPop3(rs.getString("pop3"));
			   weather.setStartTime4(rs.getString("starttime4"));
			   weather.setEndTime4(rs.getString("endtime4"));
			   weather.setPop4(rs.getString("pop4"));
			   weather.setStartTime5(rs.getString("starttime5"));
			   weather.setEndTime5(rs.getString("endtime5"));
			   weather.setPop5(rs.getString("pop5"));
			   weather.setStartTime6(rs.getString("starttime6"));
			   weather.setEndTime6(rs.getString("endtime6"));
			   weather.setPop6(rs.getString("pop6"));
			   weatherList.add(weather);
			}
			rs.close();
			
		} catch ( Exception ex ) {
			ex.printStackTrace();  
		}
		return weatherList;
	}
	
	public ArrayList<VDSpeed> findVDSpeedData(String query)throws Exception {
		try {
			stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			while (rs.next()) {
			   vdspeed = new VDSpeed();
			   vdspeed.setId(rs.getString("id"));
			   vdspeed.setSectionid(rs.getString("sectionid"));
			   vdspeed.setSectionname(rs.getString("sectionname"));
			   vdspeed.setAvgspd(rs.getString("avgspd"));
			   vdspeed.setAvgocc(rs.getString("avgocc"));
			   vdspeed.setTotalvol(rs.getString("totalvol"));
			   vdspeed.setMoelevel(rs.getString("moelevel"));
			   vdspeed.setStartwgsx(rs.getString("startwgsx"));
			   vdspeed.setStartwgsy(rs.getString("startwgsy"));
			   vdspeed.setEndwgsx(rs.getString("endwgsx"));
			   vdspeed.setEndwgsy(rs.getString("endwgsy"));
			   vdspeedList.add(vdspeed);
			}
			rs.close();
			
		} catch ( Exception ex ) {
			ex.printStackTrace();  
		}
		return vdspeedList;
	}

	public void closeConnection() throws Exception {
		try {
			conn.close();
		} catch ( Exception ex ) {
			ex.printStackTrace();  
		}
	}

	public Connection getConn() {
		return conn;
	}

	public void setConn(Connection conn) {
		this.conn = conn;
	}

	public Statement getStmt() {
		return stmt;
	}

	public void setStmt(Statement stmt) {
		this.stmt = stmt;
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
	
}

package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.Quickcareservicee.model.CareType;

public class CareTypeRowMapper implements RowMapper<CareType>{
	@Override
	public CareType mapRow(ResultSet rs, int rowNum) throws SQLException
	{
		CareType careType = new CareType();
		careType.setProfession(rs.getString("profession"));
		return careType;
	}

}

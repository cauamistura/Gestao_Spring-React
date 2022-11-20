package com.gestaovendedores.gestao.services;

import java.awt.print.Pageable;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.gestaovendedores.gestao.entities.Sale;
import com.gestaovendedores.gestao.repositories.SaleRepository;;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository; 
	
	@GetMapping
	public Page<Sale> findSales(
			String minDate,
			String maxDate,
			Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today 				  : LocalDate.parse(maxDate);
		
		return repository.findSales(min, max, (org.springframework.data.domain.Pageable) pageable);	
	}
	
}

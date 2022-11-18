package com.gestaovendedores.gestao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestaovendedores.gestao.entities.Sale;
import com.gestaovendedores.gestao.repositories.SaleRepository;;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository; 
	
	public List<Sale> findSales() {
		return repository.findAll();
	}
}

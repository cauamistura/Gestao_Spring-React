package com.gestaovendedores.gestao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestaovendedores.gestao.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}

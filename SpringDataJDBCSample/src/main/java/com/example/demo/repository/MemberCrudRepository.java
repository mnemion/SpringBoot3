package com.example.demo.repository;

import com.example.demo.entity.Test;
import org.springframework.data.repository.CrudRepository;

public interface MemberCrudRepository extends CrudRepository <Test, Integer> {
}

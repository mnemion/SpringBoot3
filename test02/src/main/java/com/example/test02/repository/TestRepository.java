package com.example.test02.repository;

import com.example.test02.entity.Test;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface TestRepository extends CrudRepository <Test, Integer> { //Integer는 몇번째냐를 말하는 코드
    @Query("SELECT id FROM test ORDER BY RANDOM() limit 1")
    Integer getRandomId();
}
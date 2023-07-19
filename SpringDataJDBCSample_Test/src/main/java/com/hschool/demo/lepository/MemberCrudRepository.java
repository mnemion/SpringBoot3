package com.hschool.demo.lepository;

import com.hschool.demo.entity.Member02;
import org.springframework.data.repository.CrudRepository;

public interface MemberCrudRepository extends CrudRepository <Member02, Integer> {

}

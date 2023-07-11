package com.hschool.demo;

import com.hschool.demo.entity.Member02;
import com.hschool.demo.lepository.MemberCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringDataJdbcSampleApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringDataJdbcSampleApplication.class, args)
				.getBean(SpringDataJdbcSampleApplication.class).execute();
	}

	@Autowired
	MemberCrudRepository repository;

	private void execute(){
		executeInsert();
		executeSelect();
	}

	private void executeInsert(){
		Member02 member = new Member02(null, "덜렁");
		member = repository.save(member);
		System.out.println("등록 데이터:" + member);
	}

	private void executeSelect(){
		System.out.println("--- 전체 데이터를 취득합니다 ---");
		Iterable <Member02> members = repository.findAll();
		for(Member02 member : members){
			System.out.println(member);
		}
	}
}

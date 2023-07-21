package com.example.demo;

import com.example.demo.entity.Test;
import com.example.demo.repository.MemberCrudRepository;
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

	/*등록과 모든 데이터 취득*/

	private void execute(){
		// 등록
		executeInsert();
		// 모든 데이터 취득
		executeSelect();
	}

	private void executeInsert(){
		// 엔티티 생성(id와 자동 부여되기 때문에 null을 설정)
		Test test = new Test(null, "이순신");
		// 레파지토리를 이용해서 등록 실행하고 결과를 취득
		test = repository.save(test);
		// 결과를 표시
		System.out.println("등록 데이터:" + test);
	}

	private void executeSelect(){
		System.out.println("--- 전체 데이터를 취득합니다 ---");
		// 레파지토리를 사용해서 전체 데이터를 취득
		Iterable <Test> tests = repository.findAll();
		for(Test test : tests){
			System.out.println(test);
		}
	}
}

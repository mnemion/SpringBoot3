package com.example.test.service;

import com.example.test.entity.Test;
import com.example.test.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class TestServiceImpl implements TestService{
    @Autowired
    TestRepository repository;

    @Override
    public Iterable<Test> selectAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Test> selectOneById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public Optional<Test> selectOneRandomTest() {
        Integer randId = repository.getRandomId();
        if (randId == null) {
            // 빈 Optional 인스턴스를 반환
            return Optional.empty();
        }
        return repository.findById(randId);
    }

    public Boolean checkTest(Integer id, Boolean myAnswer) {
        Boolean check = false;
        Optional<Test> optTest = repository.findById(id);
        if (optTest.isPresent()) {
            Test test = optTest.get();
            // 퀴즈 정답 확인
            if(test.getAnswer().equals(myAnswer)) {
                check = true;
            }
        }
        return check;
    }

    @Override
    public void insertTest(Test test) {
        repository.save(test);
    }

    @Override
    public void updateTest(Test test) {
        repository.save(test);
    }

    @Override
    public void deleteTestById(Integer id) {
        repository.deleteById(id);
    }
}

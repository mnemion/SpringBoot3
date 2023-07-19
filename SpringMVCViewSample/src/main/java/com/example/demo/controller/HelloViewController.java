package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller // 자체 제어기능을 하는 어노테이션
@RequestMapping("hello") //hello라는 요청을 받았을 시 그 요청을 받아드림
//@RequestMapping(value = {("hello", "hellospring"})
public class HelloViewController {
    @GetMapping("view") //이 어노테이션은 HTTP GET 요청을 특정 핸들러 메소드에 매핑합니다.
    // @GetMapping( value = { "view", "viewspring"})
    public String helloView(){
        return "hello"; //"hello" 문자열을 응답으로 반환합니다.
    }

    @GetMapping("view2")
    public String morning(){
        return "morning";
    }
}
package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("hello")
public class HelloModelController {
    @GetMapping("model") //타임리프에서 전달하는 변수들이 생기면.. 전달 가능하게 하는 Model인터페이스
    public String helloView(Model model){
        model.addAttribute("msg", "타임리프!!!");
        model.addAttribute("name", "김승균");
        return "helloThymeleaf";
    }
}

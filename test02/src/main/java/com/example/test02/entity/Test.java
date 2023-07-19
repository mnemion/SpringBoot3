package com.example.test02.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor //생성자를 쓰지 않아도 생성자가 생김
@AllArgsConstructor //필드에 해당하는 생성자가 생김
public class Test {
    @Id //자동으로 증가
    private Integer id;

    private String question;
    private Boolean answer;
    private String author;
}

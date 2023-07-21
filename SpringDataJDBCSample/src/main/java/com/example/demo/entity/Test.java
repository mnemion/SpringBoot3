package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Test {
    /*Member 번호*/
    @Id
    private Integer id;

    /*Member 이름*/
    private String author;
}

package com.example.ThymeleafSample.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //getter, setter를 생성
@AllArgsConstructor //전체 필드에 대한 초깃값을 인수로 받는 생성자를 생성
@NoArgsConstructor
public class Member {
    private Integer id;
    private String name;
}
package com.example.test02.form;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TestForm {//testForm
    private Integer id;
    
    @NotNull
    private String question;

    private Boolean answer;

    @NotNull
    private String author;

    //등록 또는 변경을 판단하기 위해
    private Boolean newTest;

}

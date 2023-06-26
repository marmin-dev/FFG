package com.ffg.comment.dtos;



import com.ffg.comment.entities.Comment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestDto {

    private String author;

    private String content;

    public Comment toEntity(RequestDto dto){
        return Comment.builder()
                .content(dto.getContent())
                .author(dto.getAuthor())
                .build();
    }

}

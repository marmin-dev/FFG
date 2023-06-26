package com.ffg.comment.dtos;

import com.ffg.comment.entities.Comment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto {

    private Long id;

    private String author;

    private String content;

    private Long postId;

    public ResponseDto(Comment comment){
        this.id = comment.getId();
        this.author = comment.getAuthor();
        this.content = comment.getContent();
        this.postId = comment.getPostId();
    }

}

package com.ffg.comment.controllers;

import com.ffg.comment.dtos.RequestDto;
import com.ffg.comment.dtos.ResponseDto;
import com.ffg.comment.services.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/comment")
public class CommentApiController {

    private final CommentService service;

    @PostMapping("/{postid}")
    public ResponseEntity<Long> createComment(@PathVariable long postid, @RequestBody RequestDto dto){
        return ResponseEntity.status(HttpStatus.OK).body(service.createComment(postid,dto));
    }

    @GetMapping("/{postid}")
    public ResponseEntity<List<ResponseDto>> getListByPostId(@PathVariable long postid){
        return ResponseEntity.status(HttpStatus.OK).body(service.getListByPostId(postid));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable long id){
        return ResponseEntity.status(HttpStatus.OK).body(service.deleteByid(id));
    }
    @DeleteMapping("/all/{postid}")
    public ResponseEntity<String> deleteByPostId(@PathVariable long postid){
        return ResponseEntity.status(HttpStatus.OK).body(service.deleteByPostid(postid));
    }
    @PutMapping("/{id}")
    public ResponseEntity<Long> updateById(@PathVariable Long id,@RequestBody RequestDto dto){
        return ResponseEntity.status(HttpStatus.OK).body(service.updateById(id,dto));
    }

}

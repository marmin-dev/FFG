package com.ffg.comment.services;

import com.ffg.comment.dtos.RequestDto;
import com.ffg.comment.dtos.ResponseDto;
import com.ffg.comment.entities.Comment;
import com.ffg.comment.repositories.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository repository;

    @Transactional
    public Long createComment(Long postId,RequestDto dto){
        Comment comment = dto.toEntity(dto);
        comment.setPostId(postId);
        return repository.save(comment).getId();
    }

    @Transactional
    public List<ResponseDto> getListByPostId(Long postId){
        List<ResponseDto> dtoList = repository.getListByPostId(postId).stream().
                map((comment)-> new ResponseDto(comment)).collect(Collectors.toList());
        return dtoList;
    }

    @Transactional
    public Long deleteByid(Long id){
        repository.deleteById(id);
        return id;
    }

    @Transactional
    public String deleteByPostid(Long postId){
        repository.deleteAllByPostId(postId);
        return "삭제완료";
    }

    @Transactional
    public Long updateById(Long id, RequestDto dto) {
        Optional<Comment> commentOptional = repository.findById(id);
        try{
            Comment comment = commentOptional.get();
            comment.setAuthor(dto.getAuthor());
            comment.setContent(dto.getContent());
            Comment updatedComment = repository.save(comment);
            return updatedComment.getId();
        }catch (Exception e){
            System.out.println(e);
            return id;
        }


    }

}

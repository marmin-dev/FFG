package com.ffg.comment.repositories;

import com.ffg.comment.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("SELECT c FROM Comment c WHERE c.postId = :postId ORDER BY c.id DESC")
    public List<Comment> getListByPostId(@Param("postId") Long postId);

    @Modifying
    @Query("DELETE FROM Comment c WHERE c.postId = :postId")
    public void deleteAllByPostId(@Param("postId")Long postId);
}
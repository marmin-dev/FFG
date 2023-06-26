package com.ffg.comment.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comment extends BaseTimeEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private String content;

    // 게시물 ID
    @Column(nullable = false)
    private Long postId;
}

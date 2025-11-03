package com.projects.todo.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "todo")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "description")
    private String description;
    @Column(name = "isDone")
    private boolean isDone;

    public String getDescription() {
        return description;
    }

    public void setDescription(String task) {
        this.description = task;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public Long getId() {
        return id;
    }
}

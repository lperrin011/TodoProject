package com.projects.todo.controller;

import com.projects.todo.model.Todo;
import com.projects.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class TodoController {

    @Autowired
    TodoRepository repo;

    //CREATE
    @PostMapping("/todo")
    public Todo createTodo(@RequestBody Todo todo){
        repo.save(todo);
        return todo;
    }

    //READ
    @GetMapping("/todo")
    public Iterable<Todo> getAllTodo(){
        System.out.println(repo.findAll());
        return repo.findAll();
    }

    @GetMapping("todo/{id}")
    public Todo getTodo(@PathVariable("id") Long id){
        Optional<Todo> td = repo.findById(id);
        if(td.isPresent()) {
            return td.get();
        } else {
            return null;
        }
    }


    //UPDATE
    @PutMapping("/todo/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo todo){
        Todo elem = repo.findById(id).orElseThrow();
        elem.setDescription(todo.getDescription());
        elem.setDone(todo.isDone());
        System.out.println("UPDATE" + todo.isDone());
        return repo.save(elem);
    }


    //DELETE
    @DeleteMapping("/todo/{id}")
    public void deleteTodo(@PathVariable Long id){
        repo.deleteById(id);
    }
}

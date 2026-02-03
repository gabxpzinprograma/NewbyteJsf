package com.example.ifbademo.controller;

import com.example.ifbademo.model.Curso;
import com.example.ifbademo.model.AlunoCurso;
import com.example.ifbademo.repository.CursoRepository;
import com.example.ifbademo.service.AuthenticationService;
import com.example.ifbademo.repository.AlunoCursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;

import javax.annotation.PostConstruct;
import java.util.List;

@Component("cursoBean")
@Scope("view")
public class CursoBean {

    @Autowired
    private CursoRepository cursoRepository;
    @Autowired
    private AlunoCursoRepository alunoCursoRepository;
    @Autowired
    private AuthenticationService authService;

    private List<Curso> todosCursos;
    private List<AlunoCurso> cursosEmProgresso;

    @PostConstruct
    public void init() {
        todosCursos = cursoRepository.findAll();

        if (authService.isAlunoLogado()) {
            Integer alunoId = authService.getAlunoLogado().getIdAluno();
            cursosEmProgresso = alunoCursoRepository.findByAlunoId(alunoId); 
        }
    }

    public List<Curso> getTodosCursos() {
        return todosCursos;
    }

    public List<AlunoCurso> getCursosEmProgresso() {
        return cursosEmProgresso;
    }
}
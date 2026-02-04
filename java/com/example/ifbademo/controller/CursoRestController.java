package com.example.ifbademo.controller;

import com.example.ifbademo.model.Curso;
import com.example.ifbademo.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * REST Controller equivalente ao get_curso.php
 * 
 * Endpoint: GET /api/curso?id_curso={id}
 * Retorna JSON com titulo, conteudo, imagem do curso
 */
@RestController
@RequestMapping("/api")
public class CursoRestController {

    @Autowired
    private CursoRepository cursoRepository;

    /**
     * Busca um curso pelo ID
     * Equivalente ao get_curso.php:
     * 
     * $query = "SELECT titulo, conteudo, imagem FROM Curso WHERE id_curso = ? AND status = 1";
     * 
     * @param idCurso ID do curso
     * @return JSON com titulo, conteudo, imagem ou mensagem de erro
     */
    @GetMapping(value = "/curso", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> getCurso(@RequestParam("id_curso") Integer idCurso) {
        
        Map<String, Object> response = new HashMap<>();
        
        if (idCurso == null || idCurso <= 0) {
            response.put("content", "Curso nao encontrado ou nao disponivel.");
            return ResponseEntity.ok(response);
        }
        
        Optional<Curso> cursoOpt = cursoRepository.findByIdCursoAndStatus(idCurso, "1");
        
        if (cursoOpt.isPresent()) {
            Curso curso = cursoOpt.get();
            response.put("titulo", curso.getTitulo());
            response.put("conteudo", curso.getConteudo());
            response.put("imagem", curso.getImagem());
            return ResponseEntity.ok(response);
        } else {
            response.put("content", "Curso nao encontrado ou nao disponivel.");
            return ResponseEntity.ok(response);
        }
    }
    
    /**
     * Endpoint alternativo usando path variable
     * GET /api/curso/{id}
     */
    @GetMapping(value = "/curso/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> getCursoById(@PathVariable("id") Integer id) {
        return getCurso(id);
    }
}

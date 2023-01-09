package com.cursojava.curso.dao;

import com.cursojava.curso.moldels.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void eliminar(long id);

    void registrar(Usuario usuario);

    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);

    void actualizar(long id);
}

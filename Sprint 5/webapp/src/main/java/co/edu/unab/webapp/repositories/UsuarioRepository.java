package co.edu.unab.webapp.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import co.edu.unab.webapp.models.UsuarioModel;

@Repository
public interface UsuarioRepository extends CrudRepository <UsuarioModel , Long> {
    public abstract ArrayList<UsuarioModel> findByPrioridad(Integer prioridad);
}

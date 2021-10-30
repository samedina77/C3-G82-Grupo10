package co.edu.unab.webapp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.boot.jaxb.internal.stax.LocalXmlResourceResolver.DtdMapping;



@Entity
@Table(name="usuario")
public class UsuarioModel {

    @Id
    @GeneratedValue(stategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;
    private String nombre;
    private String email;
    private Integer prioridad;
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Integer getPrioridad() {
        return prioridad;
    }
    public void setPrioridad(Integer prioridad) {
        this.prioridad = prioridad;
    }    

    

}


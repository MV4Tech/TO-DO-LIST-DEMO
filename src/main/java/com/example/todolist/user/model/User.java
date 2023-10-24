package com.example.todolist.user.model;

import com.example.todolist.task.model.Task;
import com.example.todolist.token.Token;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Date;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
@Table(name="USER")
//@ToString(exclude = "task")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull(message = "Please enter username")
    @Column(name="USERNAME")
    private String username;

    @NotNull(message = "Please enter password")
    @Column(name= "PASSWORD")
    private String password;



    @Email(message = "Enter valid email")
    @Column(name= "EMAIL")
    private String email;
    @Enumerated(EnumType.STRING)
    @NotNull(message = "Enter role ADMIN or USER")
    @Column(name="ROLE")
    private Role role;


    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name="CREATED_DATE")
    private LocalDateTime createdDate;

    @OneToMany(mappedBy = "user")
    private List<Token> tokens;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

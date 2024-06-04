package com.example.todolist.model;

import com.example.todolist.enums.Role;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
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

    @OneToMany(mappedBy = "user",fetch = FetchType.EAGER)
    private List<Token> tokens;

    @Column(name = "isLocked")
    private Boolean locked=false;

    @Column(name = "isEnabled")
    private Boolean enabled=false;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthorities();
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
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}

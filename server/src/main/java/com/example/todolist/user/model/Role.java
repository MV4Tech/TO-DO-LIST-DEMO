package com.example.todolist.user.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.xml.crypto.dsig.SignatureMethod;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.example.todolist.user.model.Permission.*;

@RequiredArgsConstructor
public enum Role {
    USER(
            Set.of(
                    USER_READ,
                    USER_UPDATE,
                    TASK_READ,
                    TASK_UPDATE,
                    TASK_CREATE,
                    TASK_DELETE
            )
    ),
    ADMIN(
            Set.of(
                    USER_READ,
                    USER_UPDATE,
                    USER_CREATE,
                    USER_DELETE,
                    TASK_READ,
                    TASK_UPDATE,
                    TASK_CREATE,
                    TASK_DELETE
            )
    );

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities(){
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
       authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }

}

package com.example.todolist.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/reset-password")
@CrossOrigin(origins = "http://localhost:5173")
public class PasswordResetController {

    @Autowired
    private PasswordResetService passwordResetService;
    @Autowired
    private static final Logger logger = LoggerFactory.getLogger(PasswordResetController.class);

    @GetMapping(path="/reset")
    public RedirectView resetPassword(@RequestParam("token") String token){
        return passwordResetService.resetPassword(token);
    }

    @PostMapping("/new-password")
    public ResponseEntity<String> resetNewPassword(@RequestBody PasswordResetRequest request) {
        return ResponseEntity.ok(passwordResetService.updatePassword(request));
    }


    @PostMapping("/send-reset-email/{email}")
    public ResponseEntity<String> sendResetPasswordEmail(@PathVariable String email) {
        return ResponseEntity.ok( passwordResetService.sendMail(email));
    }

}

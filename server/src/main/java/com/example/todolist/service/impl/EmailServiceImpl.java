package com.example.todolist.service.impl;

import com.example.todolist.model.Task;
import com.example.todolist.service.EmailSender;
import com.example.todolist.service.TaskService;
import com.example.todolist.model.User;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
@EnableScheduling
public class EmailServiceImpl implements EmailSender {

    private final static Logger LOGGER = LoggerFactory.
            getLogger(EmailServiceImpl.class);

   private final JavaMailSender mailSender;
   @Autowired
   private TaskService taskService;

    @Override
    @Async
    public void send(String to, String email,String subject) {
        try{
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage,
                    "utf-8");
            helper.setText(email, true);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setFrom("ToDoList@tdl.com");
            mailSender.send(mimeMessage);
        }catch(MessagingException e){
            LOGGER.error("failed to send email", e);
            throw new IllegalStateException("failed to send email");
        }
    }




    @Scheduled(cron = "0 */2 * * * ?") // Runs every 2 minutes
    public void sendRemainder2Part(){





        List<Task> tasks = taskService.getAllTasks();

        List<Task> filtratedTasks;

        filtratedTasks = tasks.stream()
                .filter(task -> task.getIsEmailRemainderSent() == false)
                .collect(Collectors.toList());




        LocalDateTime now = LocalDateTime.now();

        for(Task currentTask : filtratedTasks){
            LocalDateTime startDate = currentTask.getStartDate();
            LocalDateTime endDate = currentTask.getEndDate();

            User user = null;
            String to = null;
            String email = null;


            if (startDate != null && endDate != null || startDate != null || endDate != null) {
                Duration duration = Duration.between(startDate, endDate);

                if(duration.toDays() > 1){
                    endDate = endDate.minus(1, ChronoUnit.DAYS);
                    if(now.isAfter(endDate)){

                         user = currentTask.getUser();
                         to = user.getEmail();
                         email = buildEmail(user.getUsername(), currentTask.getTopic());


                        try{
                            MimeMessage mimeMessage = mailSender.createMimeMessage();
                            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage,
                                    "utf-8");
                            helper.setText(email, true);
                            helper.setTo(to);
                            helper.setSubject("Important: Your Task Deadline is Approaching 1 Day Left!");
                            helper.setFrom("marian.valchinov@gmail.com");
                            mailSender.send(mimeMessage);
                            currentTask.setIsEmailRemainderSent(true);
                            taskService.saveTask(currentTask);
                        }catch(MessagingException e){
                            LOGGER.error("failed to send email", e);
                            throw new IllegalStateException("failed to send email");
                        }
                    }

                }
                if(duration.toDays() <= 1){
                    endDate = endDate.minusHours(1);
                    if(now.isAfter(endDate)){
                        user = currentTask.getUser();
                        to = user.getEmail();
                        email = buildEmail(user.getUsername(),currentTask.getTopic());

                        try{
                            MimeMessage mimeMessage = mailSender.createMimeMessage();
                            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage,
                                    "utf-8");
                            helper.setText(email, true);
                            helper.setTo(to);
                            helper.setSubject("Important: Your Task Deadline is Approaching 1 Hour Left!");
                            helper.setFrom("marian.valchinov@gmail.com");
                            mailSender.send(mimeMessage);
                            currentTask.setIsEmailRemainderSent(true);
                            taskService.saveTask(currentTask);
                        }catch(MessagingException e){
                            LOGGER.error("failed to send email", e);
                            throw new IllegalStateException("failed to send email");
                        }
                    }
                }

                // Rest of your code...
            } else {
                // Handle the case where startDate or endDate is null
                // You may want to log a warning or handle it in a way that makes sense for your application

                continue;
            }

        }


    }

    private String buildEmail(String name, String topic) {
        return "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n" +
                "\n" +
                "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
                "\n" +
                "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"100%\" height=\"53\" bgcolor=\"#0b0c0c\">\n" +
                "        \n" +
                "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n" +
                "          <tbody><tr>\n" +
                "            <td width=\"70\" bgcolor=\"#0b0c0c\" valign=\"middle\">\n" +
                "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td style=\"padding-left:10px\">\n" +
                "                  \n" +
                "                    </td>\n" +
                "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n" +
                "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#ffffff;text-decoration:none;vertical-align:top;display:inline-block\">Remainder</span>\n" +
                "                    </td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "              </a>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
                "      <td>\n" +
                "        \n" +
                "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td bgcolor=\"#1D70B8\" width=\"100%\" height=\"10\"></td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "\n" +
                "\n" +
                "\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n" +
                "        \n" +
                "            <p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Hi " + name + ",</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> This is a friendly reminder about task with topic: "+topic+". Please make sure everything is on track.\n </p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> </p></blockquote>\n Best regards, <p>Your ToDo List</p>" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
                "\n" +
                "</div></div>";
    }
}

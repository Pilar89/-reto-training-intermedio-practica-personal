package co.com.sofka.questions.service.question;

import co.com.sofka.questions.service.IServiceQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class QuestioService implements IServiceQuestion {

    @Autowired
    private final JavaMailSender javaMailSender;


    public QuestioService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public Mono<String> enviarCorreo(String correoDestino, String asunto, String cuerpo) {

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("questionsofkau@gmail.com");
        simpleMailMessage.setTo(correoDestino);
        simpleMailMessage.setSubject(asunto);
        simpleMailMessage.setText(cuerpo);
        javaMailSender.send(simpleMailMessage);
        return Mono.just("Mensaje enviado");
    }
}

package co.com.sofka.questions;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

@OpenAPIDefinition(info = @Info(title = "Swagger questions", version = "1.0", description = "Documentation questionsAPIs v1.0"))

public class QuestionsApplication {


    public static void main(String[] args) {
        SpringApplication.run(QuestionsApplication.class, args);
    }


}

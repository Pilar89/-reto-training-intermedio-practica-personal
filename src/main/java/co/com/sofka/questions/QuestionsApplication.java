package co.com.sofka.questions;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@Configuration
@EnableReactiveMongoRepositories

@OpenAPIDefinition(info = @Info(title = "Preguntas y respuestas", version = "1.0", description = "Documentation QuestionAPIs v1.0"))
public class QuestionsApplication {


    public static void main(String[] args) {
        SpringApplication.run(QuestionsApplication.class, args);
    }


}

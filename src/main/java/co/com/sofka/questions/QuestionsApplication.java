package co.com.sofka.questions;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@SpringBootApplication
@Configuration
@EnableReactiveMongoRepositories
public class QuestionsApplication {


    public static void main(String[] args) {
        SpringApplication.run(QuestionsApplication.class, args);
    }


}

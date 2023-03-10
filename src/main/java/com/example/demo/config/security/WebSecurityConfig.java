package com.example.demo.config.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import com.example.demo.config.security.oauth2.DiscordOAuth2UserService;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

    private final DiscordOAuth2UserService oAuth2UserService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        final CsrfTokenRequestAttributeHandler csrfRequestHandler = new CsrfTokenRequestAttributeHandler();
        csrfRequestHandler.setCsrfRequestAttributeName("_csrf");

        return http
                // для принятия запросов используется cors
                .cors()
                .and()
                .authorizeHttpRequests(request -> request
                        .requestMatchers("/", "/login").permitAll()
                        .anyRequest().authenticated())
                .csrf(csrf -> {
                    csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
                    csrf.csrfTokenRequestHandler(csrfRequestHandler);

                })
                .logout(logout -> logout
                        .deleteCookies("dummyCookie")
                        .logoutSuccessUrl("http://localhost:3000/")
                )
                .oauth2Login(oauth2 -> {
                    oauth2.userInfoEndpoint(user -> user.userService(this.oAuth2UserService));
                    oauth2.defaultSuccessUrl("http://localhost:3000/", true);
                })
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        configuration.addAllowedHeader("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}

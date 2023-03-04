package com.example.demo.domain;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;


@Component(value="user")
public class User implements IUser, InitializingBean, DisposableBean {
    private final Logger log = LoggerFactory.getLogger(User.class);
    @Override
    public String hello() {
        return "hello user";
    }

    @Override
    public void destroy() throws Exception {
        log.info("User.destroy()");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        log.info("User.afterPropertiesSet()");

    }
}

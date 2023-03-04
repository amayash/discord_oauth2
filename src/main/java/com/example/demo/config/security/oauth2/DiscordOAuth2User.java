package com.example.demo.config.security.oauth2;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;
import com.example.demo.util.DiscordAvatarUtils;

import java.util.Collection;
import java.util.List;
import java.util.Map;

public record DiscordOAuth2User(Map<String, Object> attributes) implements OAuth2User {

    public String getId() {
        return (String) this.attributes.get("id");
    }

    public String getUsername() {
        return (String) this.attributes.get("username");
    }

    public String getAvatar() {
        String avatar = (String) this.attributes.get("avatar");
        return DiscordAvatarUtils.resolveUserAvatarUrl(avatar, this.getId());
    }

    public String getDiscriminator() {
        return (String) this.attributes.get("discriminator");
    }

    @Override
    @JsonIgnore
    public Map<String, Object> getAttributes() {
        return this.attributes;
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    @Override
    @JsonIgnore
    public String getName() {
        return (String) this.attributes.get("username");
    }

}

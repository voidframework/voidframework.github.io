---
title: "Cache engine : Redis"
slug: "redis-cache"
draft: false
menu:
  sidebar:
    parent: "cache"
    name: "Cache engine : Redis"
    weight: 3
    identifier: "redis-cache"
---

This implementation requires the `voidframework-redis` module to be properly configured.


{{< newline >}}
#### Installation
```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-cache-redis</artifactId>
    <version>1.2.1</version>
</dependency>
```

To enable In-memory cache engine, you have to set `voidframework.cache.engine` to `dev.voidframework.cache.engine.RedisCacheEngine` in your application configuration file.

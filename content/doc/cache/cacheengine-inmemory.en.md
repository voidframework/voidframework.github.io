---
title: "Cache engine : In-memory"
slug: "in-memory-cache"
draft: false
menu:
  sidebar:
    parent: "cache"
    name: "Cache engine : In-memory"
    weight: 2
    identifier: "in-memory-cache"
---

This implementation of the cache engine is convenient during the development phase because it avoids the installation of a distributed cache server. However, this implementation is absolutely not recommended for use in a production environment.


{{< newline >}}
#### Installation
```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-cache</artifactId>
    <version>1.3.2</version>
</dependency>
```

To enable In-memory cache engine, you have to set `voidframework.cache.engine` to `dev.voidframework.cache.engine.MemoryCacheEngine` in your application configuration file.


{{< newline >}}
#### Configuration

The following configuration key can be used in the configuration file of your application.

* `voidframework.cache.inMemory.flushWhenFullMaxItem` the maximum number of items to be kept in the cache before it gets flushed.

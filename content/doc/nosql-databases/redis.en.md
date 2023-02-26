---
title: "Redis"
slug: "redis"
draft: false
menu:
  sidebar:
    parent: "nosql-databases"
    name: "Redis"
    weight: 1
    identifier: "redis"
---

Sometimes a relational database does not fit the need, so you have to turn to more specific, non-relational databases. Void Framework provides the tools to use the NoSQL database Redis.



{{< newline >}}
#### Installation

To enable this module, just add following lines to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-redis</artifactId>
    <version>1.7.0</version>
</dependency>
```



{{< newline >}}
#### Configuration

The following configuration key can be used in the configuration file of your application.

* `voidframework.redis.host` the Redis server host. Default value is `127.0.0.1`.
* `voidframework.redis.port` the port on which the server is listening. Default value is `6379`.
* `voidframework.redis.password` the authentication password. By default, this value is empty.
* `voidframework.redis.defaultDatabase` the database to use by default. Default value is `1`.
* `voidframework.redis.connPool.connectionTimeout` the connection timeout in milliseconds. Default value is `2000 milliseconds`.
* `voidframework.redis.connPool.maximumWait` the maximum time to obtain a connection from the pool.  Default value is `2000 milliseconds`.
* `voidframework.redis.connPool.minimumIdle` the minimum number of idle connections. Default value is `2`.
* `voidframework.redis.connPool.maximumIdle` the maximum number of idle connections. Default value is `8`.
* `voidframework.redis.connPool.maximumPoolSize` the maximum number of connections. Default value is `16`.



{{< newline >}}
#### Healthcheck

If you wan to monitoring Redis health, you can enable the healthcheck module by adding the following lines to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-redis-healthcheck</artifactId>
    <version>1.7.0</version>
</dependency>
```



{{< newline >}}
#### Example

```java
@Service
public final class ExampleService {

    private final Redis redis;

    @Inject
    public ExampleService(final Redis redis) {
        this.redis = redis;
    }

    public void example() {
        final long nextValue = this.redis.increment("incr.key");
    }
}
```

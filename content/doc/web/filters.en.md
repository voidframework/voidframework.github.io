---
title: "Filters"
slug: "filters"
draft: false
menu:
  sidebar:
    parent: "web"
    name: "Filters"
    weight: 3
    identifier: "filters"
---

Filters are the middleware and are individual functions that make up the request processing pipeline.

{{< alert "info" >}}
Note that the use of dependencies direct injection is possible in filters.
{{< /alert >}}


{{< newline >}}
#### Specific filters

The use of filters is done through the use of the `@WithFiter` annotation. It is possible to specify as many filters as you wish, the order in which they are declared representing the order in which they are used.

```java
@FilterWith({FirstFilter.java, SecondFilter.java})
@Singleton
@WebController
public class Controller {

    @FilterWith({ThirdFilter.java})
    @RequestRouting
    public Result showHomePage() {
        return Result.of("Hello World!");
    }
}
```



{{< newline >}}
#### Global filters

In case the filter have to be enabled globally (it will be used for all requests), it must be declared in the application configuration file with the configuration key `voidframework.web.globalFilters` :

```text
voidframework {
    web {
        globalFilters += "dev.voidframework.web.csrf.CSRFFilter"
    }
}
```



{{< newline >}}
#### Passing attributes

If you need to pass values which should not be passed through the session from one filter to another, or simply from a filter to a controller, you can use `Context` attributes. This is a simple way of passing values while maintaining their type.

```java
@Singleton
public class ExampleFilter implements Filter {

    private static final TypedMap.Key<UUID> USER_ID = TypedMap.Key.of("USER_ID");

    @Override
    public Result apply(final Context context, final FilterChain filterChain) {
        context.getAttributes().put(USER_ID, UUID.randomUUID());
        
        return filterChain.applyNext(context);
    }
}
```

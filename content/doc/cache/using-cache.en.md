---
title: "Using cache"
slug: "using-cache"
draft: false
menu:
  sidebar:
    parent: "cache"
    name: "Using cache"
    weight: 1
    identifier: "using-cache"
---

Void Framework provides the tools to use a cache system. Caching can be done in two different ways, via the use of annotations or programmatically via the use of the `CacheEngine`.

{{< alert "info" >}}
If no <code>CacheEngine</code> implementation was specified, the cache will not be active.
{{< /alert >}}

{{< alert "warning" >}}
Note that caching a <code>Result</code> (Web) object can lead to errors during deserialization, especially if <code>Result</code> contains an InputStream. Serialization and deserialization of cached objects is handled by the <code>Kryo</code> library.
{{< /alert >}}



{{< newline >}}
#### Using Cache with annotations

The cache can be used with the following annotations:


{{< newline >}}
##### @CacheRemove

Indicates that the cache must be evicted.

The annotation accepts the following parameters:

* `key` the cache key. It can contains dynamic information via the usage of `{class}`, `{method}` and `{n}` (with *n* the method argument position). The default value is `{class}.{name}`.

* `evictOn` allows you to provide the exception types that must cause a cache eviction. If classes are specified, the cache will only be evicted if the specified exceptions are thrown. The default value is `{}`.

* `noEvictOn` allows you to provide the exception types that must not cause a cache eviction. The default value is `{}`.


{{< newline >}}
##### @CacheResult

Indicates that the result of the method will be cached and reused in future calls. 

The annotation accepts the following parameters:

* `key` the cache key. It can contains dynamic information via the usage of `{class}`, `{method}` and `{n}` (with *n* the method argument position). The default value is `{class}.{name}`.

* `timeToLive` the maximum time to live in milliseconds. The default value is `-1` (no expiration).


{{< newline >}}
##### @CachePut

Indicates that the result of the method will be cached regardless value already exists. 

* `key` the cache key. It can contains dynamic information via the usage of `{class}`, `{method}` and `{n}` (with *n* the method argument position). The default value is `{class}.{name}`.

* `timeToLive` the maximum time to live in milliseconds. The default value is `-1` (no expiration).


{{< newline >}}
##### Example

```java
@BindClass
public class CacheExample {

    @CachePut
    public String exampleMethod() {
        return "value";
    }
}
```

{{< newline >}}
#### Using Cache programmatically

The programmatic usage of the cache is very simple and can be done via the injection of `CacheEngine`.

```java
public class CacheExample {

    private final CacheEngine cacheEngine;

    @Inject
    public CacheExample(final CacheEngine cacheEngine) {
        this.cacheEngine = cacheEngine;
    }

    public void exampleMethod() {
        cacheEngine.set("key", "value");
    }
}
```

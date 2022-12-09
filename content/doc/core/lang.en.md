---
title: "Lang"
slug: "lang"
draft: false
menu:
  sidebar:
    parent: "core"
    name: "Lang"
    weight: 7
    identifier: "lang"
---

The `dev.voidframework.core.lang` package contains a set of Java classes that extend the basic JDK.


{{< newline >}}
#### CUID

`CUID` is a collision-resistant ID optimized for horizontal scaling and performance. Read more at https://usecuid.org/. Read the [Java file](https://github.com/voidframework/voidframework/blob/master/voidframework-core/src/main/java/dev/voidframework/core/lang/CUID.java) to get more information about available methods.

```java
// Random CUID
final CUID cuid = CUID.randomCUID();

// CUID from String representating a CUID
final CUID cuid = CUID.fromString("cl9gts1kw00393647w1z4v2tc");

// Check if String contains a valid CUID (implicitly called by "fromString" method)
final boolean isValid = CUID.isValid("cl9gts1kw00393647w1z4v2tc");
```

{{< alert "info" >}}
<code>CUID</code> works with Jackson serialization/deserialization.
{{< /alert >}}



{{< newline >}}
#### Either

`Either` represents a value of one or two possible types (a disjoint union). Read the [Java file](https://github.com/voidframework/voidframework/blob/master/voidframework-core/src/main/java/dev/voidframework/core/lang/Either.java) to get more information about available methods.

```java
final Either<String, Integer> either = Either.ofLeft("1337");

final Integer value = either.match(Integer::valueOf, right -> right);
```



{{< newline >}}
#### TypedMap

`TypedMap` is a simple hashmap with typed key. Typed means that the type of the value associated to the key is part of the key itself. Read the [Java file](https://github.com/voidframework/voidframework/blob/master/voidframework-core/src/main/java/dev/voidframework/core/lang/TypedMap.java) to get more information about available methods.

```java
final TypedMap.Key<String> STRING_KEY = TypedMap.Key.of("STRING_KEY", String.class)
final TypedMap typedMap = new TypedMap();

typedMap.put(STRING_KEY, "Hello World");
```

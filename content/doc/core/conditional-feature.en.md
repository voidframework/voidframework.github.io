---
title: "Conditional feature"
slug: "conditional-feature"
draft: false
menu:
  sidebar:
    parent: "core"
    name: "Conditional feature"
    weight: 4
    identifier: "conditional-feature"
---

Depending on your runtime environment, you may only need to run a few features of your application. And so, load only the necessary modules and bindable classes.



{{< newline >}}
#### @ConditionalFeature

The `@ConditionalFeature` annotation allows a feature to be enabled or disabled depending on the processing performed by the class supplied as a parameter. This class must implement the `Condition` interface.

The annotation accepts the following parameter:

* `value` is used to define the implementation of `Condition` interface to use.

**Exemple**
```java
@WebController
@ConditionalFeature(MyCustomCondition.class)
public final class SampleController {
}
```



{{< newline >}}
#### @ConfigurationConditionalFeature

The `@ConfigurationConditionalFeature` annotation allows a feature to be enabled or disabled based on a value in the configuration, properties, or environment variables.

The annotation accepts the following parameter:

* `value` is used to define the name of the configuration/property/env. variable to be read.
* `expectedValue` is used to define all possible expected values. The default value is `{"true", "enabled", "yes", "1"}`.

**Exemple**
```java
@WebController
@ConfigurationConditionalFeature("feature.name")
public final class SampleController {
}
```

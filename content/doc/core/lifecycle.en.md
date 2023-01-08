---
title: "Life cycle"
slug: "life-cycle"
draft: false
menu:
  sidebar:
    parent: "core"
    name: "Life cycle"
    weight: 5
    identifier: "life-cycle"
---

Void Framework provides a way to manage the life of a component. The `@LifeCycleStart` and `@LifeCycleStop` annotations allow you to define the methods to be called automatically when the application is started and stopped.

{{< alert "info" >}}
It is possible to have several methods of a class annotated with the same annotation.
{{< /alert >}}


{{< newline >}}
#### @LifeCycleStart

Indicates that this method should be called when the application starts.

The annotation accepts the following parameter:

* `priority` is used to define when the method will be called in relation to the others. The lower the priority, the higher the priority of the method. The default value is `1000`.


{{< newline >}}
#### @LifeCycleStop

Indicates that this method should be called when the application is stopped. 

The annotation accepts the following parameters:

* `priority` defines when the method will be called in relation to the others. The lower the priority, the higher the priority of the method. The default value is `1000`.
* `gracefulStopTimeoutConfigKey` allows you to provide a configuration key to retrieve the maximum time (duration or milliseconds) to wait before giving up and continuing to stop the application. If no key is specified, the default value `0` will be used.




{{< newline >}}
#### Example

```java
@BindClass
@Singleton
public final class ExampleLifeCycle {

    @Inject
    private final Config configuration;

    @Inject
    public ExampleLifeCycle(final Config configuration) {
        this.configuration = configuration;
    }

    @LifeCycleStart(priority = 1000)
    public void onStart() {
    }

    @LifeCycleStop(priority = 1)
    public void onStop() {
    }
}
```

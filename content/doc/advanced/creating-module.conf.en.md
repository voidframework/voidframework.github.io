---
title: "Creating Module"
slug: "creating-module"
draft: false
menu:
  sidebar:
    parent: "advanced"
    name: "Creating Module"
    weight: 1
    identifier: "creating-module"
---


Do you want to create a Guice module that will be loaded when your application starts? Nothing could be simpler than creating an implementation of the abstract class `AbstractModule` or the interface `Module`.

To meet all needs, the Void Framework provides the ability to obtain additional information via the module's constructor. As a constructor's parameter, you could optionally use the following elements:

* `Config` the current configuration of the application
* `ScannedClassesToLoad` the classes that were scanned when the application started

In the event that one module needs to be loaded before another, you can use the `OrderedModule` annotation.


{{< newline >}}
#### Example

```java
@OrderedModule(priority = 50)
public final class MyCustomModule extends AbstractModule {

    private final Config configuration;
    private final ScannedClassesToLoad scannedClassesToLoad;

    public MyCustomModule(final Config configuration,
                          final ScannedClassesToLoad scannedClassesToLoad) {

        this.configuration = configuration;
        this.scannedClassesToLoad = scannedClassesToLoad;
    }

    @Override
    protected void configure() {
    
        // Place your module code here
    }
}
```


{{< alert "warning" >}}
Remember that the module must be in a path that is scanned when the application starts. If this is not the case, you can add a new path via the configuration key <code>voidframework.core.acceptedScanPaths</code>.
{{< /alert >}}

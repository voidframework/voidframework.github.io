---
title: "Creating a new application"
slug: "new-application"
draft: false
menu:
  sidebar:
    parent: "getting-started"
    name: "Creating a new application"
    weight: 2
    identifier: "new-application"
---

To create a new application with Void Framework, simply create a new Maven project and then add the necessary dependencies.


{{< newline >}}
#### Maven

The very first dependency to include in your `pom.xml` is `voidframework-core`, without it you will not be able to start the application. The dependencies to be added will depend on the features you wish to use on your application, so do not hesitate to consult the different chapters of the documentation.

In this example, we will also use the `web` feature, so the `voidframework-web` dependency will also be added.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-core</artifactId>
    <version>1.6.1</version>
</dependency>
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-web</artifactId>
    <version>1.6.1</version>
</dependency>
```


{{< newline >}}
#### Configuration

Void Framework use a configuration file format is HOCON (Human-Optimized Config Object Notation). This format supports types such as integer, long, boolean, double, string, list and object. It is also possible to include other files by using `include`. There are two ways to write comments: using `//` or `#`. Comments can be written in-line at the end of the line or in separate lines. For more information on Typesafe Config, visit the [Github project's page](https://github.com/lightbend/config).

The first thing to do is to indicate the paths to scan to find the elements of your application that can be loaded. The default location for the configuration file is `resources/application.conf`. And to define a key to sign the Session (even if you plan to not use session).

```text
voidframework {
    core {
        acceptedScanPaths += "controller"
    }

    web {
        session {
            signatureKey = "BUXpcQ6OAXMGR45sV9bjeq161raMoIrNiJw3z18leM4TRIBVUHsZsrTlK58fX2JD"
        }
    }
}
```

{{< alert "info" >}}
If one of the specified paths does not exist, the application will continue to the next one without halting.
{{< /alert >}}



{{< newline >}}
#### Web controller

Add the following controller to the `controller` package or any package that will be considered by the `acceptedScanPaths` configuration.

```java
package controller;

import dev.voidframework.web.bindable.WebController;
import dev.voidframework.web.http.HttpContentType;
import dev.voidframework.web.http.Result;
import dev.voidframework.web.http.param.RequestRoute;
import dev.voidframework.web.routing.HttpMethod;

@WebController
public final class MyFirstController {

    @RequestRoute(method = HttpMethod.GET, route = "/")
    public Result sayHello() {
        return Result.ok("Hello World!");
    }
}
```


{{< newline >}}
#### Application launcher

To start the application, you have to instantiate `ApplicationLauncher` and then call the `launch` method.

```java
final VoidApplication app = new VoidApplication();
app.launch();
```


{{< newline >}}
#### Run your application

You can now start your application and go to the URL `http://127.0.0.1:9000` in your favourite web browser.

---
title: "H2"
slug: "h2"
draft: false
menu:
  sidebar:
    parent: "relational-databases"
    name: "H2"
    weight: 5
    identifier: "h2"
---

H2 is an open-source lightweight relational database. It allows you to quickly have an operational database and its use is very practical during the development phase of an application. This module provides the H2 dependency and the useful H2 web console.


{{< newline >}}
#### Installation

To enable this module, just add following lines to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-h2</artifactId>
    <version>1.14.0</version>
</dependency>
```



{{< newline >}}
#### Configuration

The following configuration keys can be used in the configuration file of your application:

* `voidframework.h2.webPort` the listen port of the H2 console. The default value is `9002`.
* `voidframework.h2.webAdminPassword` the password to access preferences and tools of H2 console. The default value is `null` (disabled).
* `voidframework.h2.webAllowOthers` specifies if other computers are allowed to connect. The default value is `false`.



{{< newline >}}
#### Open the web console

Once your application has started, you can access the H2 web console by going to `http://127.0.0.1:9002`.

{{< alert "warning" >}}
Note that H2 web console will be started only if the application is run in development mode (<code>voidframework.core.runInDevMode = true</code>).
{{< /alert >}}

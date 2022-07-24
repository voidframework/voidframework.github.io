---
title: "Configuration"
slug: "configuration"
draft: false
menu:
  sidebar:
    parent: "core"
    name: "Configuration"
    weight: 5
    identifier: "configuration"
---

Void Framework use a configuration file format is HOCON (Human-Optimized Config Object Notation). This format supports types such as integer, long, boolean, double, string, list and object. It is also possible to include other files by using `include`. There are two ways to write comments: using `//` or `#`. Comments can be written in-line at the end of the line or in separate lines. For more information on Typesafe Config, visit the [Github project's page](https://github.com/lightbend/config).


These are the default filenames that the Config library looks for on the classpath:

- `application.conf`
- `application.json`
- `application.properties`
- `reference.conf`


{{< newline >}}
#### Custom configuration file

If you need to use a custom/external configuration file, especially when your application is deployed on a server. You can use the flag `-Dconfig.file` to specify location of the configuration file to use.

```bash
-Dconfig.file=/path/to/your/application.conf
```

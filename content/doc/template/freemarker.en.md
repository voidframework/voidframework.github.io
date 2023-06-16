---
title: "FreeMarker"
slug: "freemarker"
draft: false
menu:
  sidebar:
    parent: "template"
    name: "FreeMarker"
    weight: 2
    identifier: "freemarker"
---

To generate HTML document with `FreeMarker`, you have to use the module `voidframework-template-freemarker`.


{{< newline >}}
#### Installation
```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-template-freemarker</artifactId>
    <version>1.8.1</version>
</dependency>
```


{{< newline >}}
#### Templates location

By default, templates should be placed in the `resources/views` directory.



{{< newline >}}
#### Configuration

The following configuration keys can be used in the configuration file of your application:

* `voidframework.template.basePackagePath` the location of the templates. The default value is `"/views/"`.



{{< newline >}}
#### Built-in methods & variables

By default, modules `web` and `template-freemarker` provide a set of methods and variables that will be accessible in templates.

{{< table table_class="table table-striped" >}}
| Method        | Description                                                            |
|---------------|------------------------------------------------------------------------|
| `config`      | Retrieves a value from the configuration                               |
| `displaySize` | Displays a formatted number with the correct unit (Kio, Mio, Gio, ...) |
| `i18n` / `_`  | Translates a message                                                   |
| `urlfor`      | Retrieves an URL from the router (reverse router)                      |
{{< /table >}}

{{< table table_class="table table-striped" >}}
| Variable               | Description                                      |
|------------------------|--------------------------------------------------|
| `isDevMode`            | Indicates whether the application is in dev mode |
| `lang`                 | Contains the current language                    |
| `languages`            | Contains all available languages                 |
| `voidFrameworkVersion` | Contains the current Void Framework version      |
{{< /table >}}


{{< alert "info" >}}
FreeMarker provides a lot of other built-in methods & variables. Read more about FreeMarker
on the <a href="https://freemarker.apache.org/docs/ref_builtins.html">official website</a>.
{{< /alert >}}

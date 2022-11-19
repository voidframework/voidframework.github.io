---
title: "Render template"
slug: "render-template"
draft: false
menu:
  sidebar:
    parent: "web"
    name: "Render template"
    weight: 6
    identifier: "render-template"
---

The `web` module also integrates the `template` module with the `Freemarker` rendering engine by default. This allows controllers to return html content easily.

Although you can manually use the template engine, in most cases this would not be handy. However, you can use the `TemplateResult` class which will make it easier to use the renderer.



{{< newline >}}
#### Built-in methods & variables

By default, the module `voidframework-template-freemarker` provide a set of methods and variables that will be accessible in templates.

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
| `flash`                | Contains temporary messages                      |
| `session`              | Contains the current session data                |
| `isDevMode`            | Indicates whether the application is in dev mode |
| `lang`                 | Contains the current language                    |
| `languages`            | Contains all available languages                 |
| `csrfToken`            | Contains the CSRF token                          |
| `voidFrameworkVersion` | Contains the current Void Framework version      |
{{< /table >}}



{{< newline >}}
#### Templates location

Templates should be placed in the `resources/views` directory.



{{< newline >}}
#### Static files

If you need to include static files in your HTML page (e.g. css, javascript, image, ...), you can use the `urlfor` method with the first parameter `static_file` or `static_webjar` and the second parameter the path to the file.





{{< newline >}}
#### Example

**controller/HomeController.java**
```java
@Singleton
@WebController
public class HomeController {

    @RequestRouting
    public Result homepage(final Context ctx) {
        return Result.ok(
            TemplateResult.of("homepage.ftl", Map.of("greating", "Hello World")));
    }
}
```

**resources/views/homepage.ftl**
```html
<!DOCTYPE html>
<html lang="${lang!}">
    <body>
      <h1>${greating}</h1>
      <img src="${urlfor('static_file', 'img/logo.png')}" alt="image"/>
    </body>
</html>
```

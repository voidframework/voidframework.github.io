---
title: "Controller"
slug: "controller"
draft: false
menu:
  sidebar:
    parent: "web"
    name: "Controller"
    weight: 2
    identifier: "controller"
---

Controllers receive incoming web requests, process them and return a result. They are the entry point to your web application. Controllers can return almost any type of data, as long as it is handled by the `Result` object. It is a convention imposed by Void Framework that methods which handle incoming requests must return a `Result`.


{{< newline >}}
**Example**

```java
@Singleton
@WebController(prefixRoute = "/account")
public class AccountController {

    @RequestRoute(route = "/(?<accountId>[a-f0-9]+)")
    public Result showAccount(@RequestPath("accountId") final String accountId) {
        return Result.ok("Hello World");
    }

    @RequestRoute(method = HttpMethod.POST, route = "/{accountId}")
    public Result updateAccount(@RequestPath("accountId") final String accountId,
                                @RequestBody final ProfileForm form,
                                final Context context) {
        return Result.ok("Hello World");
    }
}
```


{{< newline >}}
#### What is a route?

A route consists of three elements: a context path, a prefix and a route itself. The first is configured in the `application.conf` file via the use of the `voidframework.web.contextPath` key (default value is `/`) while the other two are endpoint dependent.



{{< newline >}}
#### Defining a route

A route is defined by two components, firstly `@WebController` defines the prefix that will be applied to all methods of the controller and by the `@RequestRoute` annotation providing various options. The latter tells the Void Framework that the method is an entry point.


##### @WebController

This annotation is based on the `@Controller` annotation. It simply allows the class to be better specified and provides additional options. This annotation can only be used at class level.

The annotation accepts the following parameter:

* `prefixRoute` a prefix to use on all endpoints in the class. By default, the value is empty.

##### @RequestRoute

This annotation allows you to configure an entry point that will process an incoming request. This annotation can only be used at method level.

The annotation accepts the following parameters:

* `method` the HTTP method. The default value is `HttpMethod.GET`.
* `route` the route. Regular expression with named capturing group or simplified variable (ie: `{accountId}`) can be used. The default value is `/`.
* `name` an alias name who can be used with the reverse routing. By default, the value is empty.



{{< newline >}}
#### Retrieving parameters

To work, a controller will probably need some incoming data. To do this, the `@RequestPath`, `@RequestVariable` and `@RequestBody` annotations make it easy to retrieve information from the request. It is also possible to retrieve information from the `Context` itself.



#### @RequestPath

This annotation allows you to extract parameters named in the URL path.

The annotation accepts the following parameter:

* `value` the name of the parameter (correlated with the regexp used in the route definition) to extract.


#### @RequestVariable

This annotation allows you to extract query string value (simple or array) from the URI.

The annotation accepts the following parameter:

* `value` the name of the query string value to extract.
* `fallback` the value to use as fallback.


#### @RequestBody

This annotation allows you to retrieve the contents of the request (i.e. from a POST query) as a Java object. If something goes wrong, the extracted value will be `null`.


{{< newline >}}
**Example**

```java
@Singleton
@WebController
public class ExampleController {

    @RequestRoute(route = "/")
    public Result retrieveArrayFromQueryString(@RequestVariable("year") final int[] yearArray) {
        return Result.ok(Yaml.toString(yearArray));
    }

    @RequestRoute(method = HttpMethod.POST, route = "/")
    public Result retrieveListFromBody(@RequestBody("year") final List<Integer> yearList) {
        return Result.ok(Yaml.toString(yearList));
    }
}
```



{{< newline >}}
#### Parameter types

It is sure that you will have to retrieve the parameters with their respective type (e.g. int, boolean, ...). For this, Void Framework uses the converter mechanism to allow conversion from a `String`. By default, the following types are handled:

* Boolean
* Byte
* Character
* CUID
* Double
* Float
* Integer
* Locale
* Long
* Short
* String
* UUID



{{< newline >}}
#### Handle custom types

To handle a new type, you simply have to implement a new converter. For more information, read the [Type conversion]({{< relref "doc/core/typeconversion" >}}) chapter.



{{< newline >}}
#### Static assets & webjars

The abstract class `AbstractStaticAssetsController` provides the methods needed to serve static files and webjars. It provides the reverse routing names `static_file` and `static_webjar`. Static files default folder can be changed via the `voidframework.web.baseAssetResourcesDirectory` configuration key.


```java
@Singleton
@WebController
public class StaticAssetsController extends AbstractStaticAssetsController {

    @Inject
    public StaticAssetsController(final Config configuration) {
        super(configuration);
    }
}
```

```html
<link rel="stylesheet" href="${urlfor('static_file', 'css/application.css')}">
```


{{< newline >}}
#### JavaScript internationalization (i18n)

If you need to handle client-side translations via JavaScript, the abstract class `AbstractJavaScriptInternationalizationController` provides an endpoint to retrieve a helper that you can use directly on the client side. It provides the reverse routing name `js_i18n`.


```java
@Singleton
@WebController
public final class JavaScriptInternationalizationController extends AbstractJavaScriptInternationalizationController {

    @Inject
    public JavaScriptInternationalizationController(final Internationalization internationalization) {

        super(internationalization);

        // Optional: only retrieve matching translations
        this.filterKeyPatternList.add("footer.*");
    }
}
```

```html
<script src="${urlfor('js_i18n', 'fr')}"></script>

<script>
i18n.getMessage('msg.key');
i18n.getMessage('msg.key', 'var');
i18n.getMessage('msg.key', 'var1', 'var2', /*...*/'varn');
</script>
```

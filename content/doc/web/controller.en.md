---
title: "Controller"
slug: "controller"
draft: false
menu:
  sidebar:
    parent: "web"
    name: "Controller"
    weight: 1
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

    @RequestRoute(method = HttpMethod.POST, route = "/(?<accountId>[a-f0-9]+)")
    public Result updateAccount(@RequestPath("accountId") final String accountId,
                                @RequestBody final ProfileForm form,
                                final Context context) {
        return Result.ok("Hello World");
    }
}
```


{{< newline >}}
#### Defining a route

A route is defined by two components, firstly `@WebController` defines the prefix that will be applied to all methods of the controller and by the `@RequestRoute` annotation providing various options. The latter tells the Void Framework that the method is an entry point.


##### @WebController

This annotation is based on the `@Controller` annotation. It simply allows the class to be better specified and provides additional options. This annotation can only be used at class level.

The annotation accepts the following parameter:

* `prefixRoute` defines a prefix to be used on all endpoints in the class. By default, the value is empty.

##### @RequestRoute

This annotation allows you to configure an entry point that will process an incoming request. This annotation can only be used at method level.

The annotation accepts the following parameters:

* `method` defines the HTTP method. The default value is `HttpMethod.GET`.
* `route` defines a route. Regular expression with named capturing group can be used. The default value is `/`.
* `name` defines an alias name who can be used with the reverse routing. By default, the value is empty.



{{< newline >}}
#### Retrieving parameters

To work, a controller will probably need some incoming data. To do this, the `@RequestPath`, `@RequestVariable` and `@RequestBody` annotations make it easy to retrieve information from the request. It is also possible to retrieve information from the `Context` itself.



#### @RequestPath

This annotation allows you to extract parameters named in the URL path.

The annotation accepts the following parameter:

* `value` defines the name of the parameter (correlated with the regexp used in the route definition) to extract.


#### @RequestVariable

This annotation allows you to extract query string value from the URI.

The annotation accepts the following parameter:

* `value` defines the name of the query string value to extract.


#### @RequestBody

This annotation allows you to retrieve the contents of the request (i.e. from a POST query) as a Java object. If something goes wrong, the extracted value will be `null`.



{{< newline >}}
#### Parameter types

It is sure that you will have to retrieve the parameters with their respective type (e.g. int, boolean, ...). For this, Void Framework uses the converter mechanism to allow conversion from a `String`. By default, the following types are handled:

* Boolean
* Byte
* Character
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

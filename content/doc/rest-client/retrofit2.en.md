---
title: "Retrofit 2"
slug: "retrofit2"
draft: false
menu:
  sidebar:
    parent: "rest-client"
    name: "Retrofit 2"
    weight: 1
    identifier: "retrofit2"
---


Retrofit 2 is a REST Client for Java allowing to retrieve and upload data via HTTP.


{{< newline >}}
#### Installation

To enable this module, just add following lines to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-restclient</artifactId>
    <version>1.11.1</version>
</dependency>
```



{{< newline >}}
#### How it work

All interfaces annotated with `@RestClient` will be automatically proxyfied with the Retrofit 2 client.



{{< newline >}}
#### Configuration

The following configuration key can be used in the configuration file of your application

* `voidframework.restclient.maxIdleConnections` the number of connection to keep idle. The default value is `5`.
* `voidframework.restclient.keepAliveDuration` the duration for which connections will be kept idle before being closed. The default value is `5 minutes`.
* `voidframework.restclient.connectionTimeout` the connect timeout duration. The default value is `15 seconds`.
* `voidframework.restclient.readTimeout` the read timeout duration. The default value is `35 seconds`.
* `voidframework.restclient.authentication.type` the authentication type to use (`API_KEY`, `BASIC` or `BEARER`). The default value is `null` (disabled).
* `voidframework.restclient.authentication.apiKeyName` the API key variable name. This setting is only used if the authentication type is set to `API_KEY`. The default value is `null`.
* `voidframework.restclient.authentication.apiKeyValue` the API key variable value. This setting is only used if the authentication type is set to `API_KEY`. The default value is `null`.
* `voidframework.restclient.authentication.apiKeyAddTo` where to add the API key (`COOKIE`, `HEADER`, `QUERY_PARAMETER`). This setting is only used if the authentication type is set to `API_KEY`. The default value is `HEADER`.
* `voidframework.restclient.authentication.basicUsername` the basic authentication username. This setting is only used if the authentication type is set to `BASIC`. The default value is `null`.
* `voidframework.restclient.authentication.basicPassword` the basic authentication password. This setting is only used if the authentication type is set to `BASIC`. The default value is `null`.
* `voidframework.restclient.authentication.basicUseISO88591Encoding` use ISO-8859-1 encoding rather than UTF-8. This setting is only used if the authentication type is set to `BASIC`. The default value is `false`.
* `voidframework.restclient.authentication.bearerPrefix` the bearer prefix to use in the request header. This setting is only used if the authentication type is set to `BEARER`. The default value is `Bearer`.
* `voidframework.restclient.authentication.bearerToken` the bearer token to use in the request header. This setting is only used if the authentication type is set to `BEARER`. The default value is `null`.

{{< alert "info" >}}
You can override the global configuration for a specific service by using the following configuration key:
<code>voidframework.restclient.&lt;service-name&gt;.xxx</code>
<br/><br/>
ie: <code>voidframework.restclient.echo-api.readTimeout</code>
{{< /alert >}}


{{< newline >}}
#### Examples

```xml
voidframework {
    restclient {

        maxIdleConnections = 10

        echo-api {

            endpoint = "https://postman-echo.com"
            maxIdleConnections = 1
            readTimeout = "15 seconds"
        }
    }
}
```

```java
@RestClient("echo-api")
private interface EchoApiRestClient {

    @GET("/get")
    String echo(@Query("msg") final String message);

    @POST("/post")
    @Headers("Content-Type: application/json")
    JsonNode postJsonNode(@Body final JsonNode message);
}
```


```java
@Service
private class SampleService {

    private final EchoApiRestClient echoApiRestClient;

    @Inject
    public SampleService(final EchoApiRestClient echoApiRestClient) {
        
        this.echoApiRestClient = echoApiRestClient;
    }

    public String mySample() {
        
        return this.echoApiRestClient.echo("Hello World");
    }
}
```

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
    <version>1.9.0</version>
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
* `voidframework.restclient.<service-name>.endpoint` the URL endpoint of the service to call. 
* `voidframework.restclient.<service-name>.maxIdleConnections` the number of connection to keep idle for the given service. The default value is `5`.
* `voidframework.restclient.<service-name>.keepAliveDuration` the duration for which connections will be kept idle before being closed for the given service. The default value is `5 minutes`.
* `voidframework.restclient.<service-name>.connectionTimeout` the connect timeout duration for the given service. The default value is `15 seconds`.
* `voidframework.restclient.<service-name>.readTimeout` the read timeout duration for the given service. The default value is `35 seconds`.


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

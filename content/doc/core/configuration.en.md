---
title: "Configuration"
slug: "configuration"
draft: false
menu:
  sidebar:
    parent: "core"
    name: "Configuration"
    weight: 2
    identifier: "core-configuration"
---

Void Framework use a configuration file format is HOCON (Human-Optimized Config Object Notation). This format supports types such as integer, long, boolean, double, string, list and object. It is also possible to include other files by using `include`. There are two ways to write comments: using `//` or `#`. Comments can be written in-line at the end of the line or in separate lines. For more information on Typesafe Config, visit the [Github project's page](https://github.com/lightbend/config).


These are the default filenames that the Config library looks for on the classpath:

- `application.conf`
- `application.json`
- `application.properties`
- `reference.conf`



{{< newline >}}
#### JVM properties

It is sometimes useful to be able to override or simply set specific configuration values from the parameters provided at JVM startup. To do this, all properties defined via `-D` flag are accessible from the `Configuration` object.



{{< newline >}}
#### Use another configuration file

If you need to use a custom/external configuration file, especially when your application is deployed on a server. You can use the flag `-Dconfig.file` to specify location of the configuration file to use.

```bash
-Dconfig.file=/path/to/your/application.conf
```



{{< newline >}}
#### Retrieve configuration value from Java

```java
@Service
public class MyService {

    private final Config configuration;

    @Inject
    public MyService(final Config configuration) {
        this.configuration = configuration;
    }

    public void test() {
        final boolean runInDevMode = configuration.getBoolean("voidframework.core.runInDevMode");
        if (runInDevMode) {
            // Do something
        } else {
            // Do something else
        }
    }
}
```



{{< newline >}}
#### Remote configuration

Once packaged, you will probably need to modulate the configuration of the application depending on the environment (ie: development, integration, production). The typical example is the configuration of the data source, you cannot define this information directly in the configuration file included in the Jars files. Void Framework allows you to load configurations that will be stored elsewhere, such as on etcd or vault.

To enable remote configuration loading, you must declare one or more providers to be used via the configuration key `voidframework.core.remoteConfiguration.providers`.

{{< alert "info" >}}
If more than one provider is declared. They will be used in order of declaration and each will override the configuration retrieved by the previous provider.
{{< /alert >}}

**Provider "etcd"**

```xml
<dependency>
  <groupId>dev.voidframework</groupId>
  <artifactId>voidframework-remoteconf-etcd</artifactId>
  <version>1.15.0</version>
</dependency>
```

```text
voidframework {
    code {
        remoteConfiguration {
            providers = "dev.voidframework.remoteconfiguration.provider.EtcdRemoteConfigurationProvider"

            # Configuration of the remote configuration provider "etcd"
            etcd {

                # API endpoint. HTTPS endpoint could be used,
                # but the SSL certificate must be valid
                endpoint = "http://127.0.0.1:2379/"
                endpoint = ${?VOID_REMOTECONF_ETCD_ENDPOINT}

                # Authentication username
                username = ""
                username = ${?VOID_REMOTECONF_ETCD_USERNAME}

                # Authentication password
                password = ""
                password = ${?VOID_REMOTECONF_ETCD_PASSWORD}

                # Prefix. Get only values with key beginning
                # with the configured prefix. With etcd, it
                # must be a directory.
                prefix = "/"
                prefix = ${?VOID_REMOTECONF_ETCD_PREFIX}
            }
        }
    }
}
```


**Provider "http"**

```xml
<dependency>
  <groupId>dev.voidframework</groupId>
  <artifactId>voidframework-remoteconf-http</artifactId>
  <version>1.15.0</version>
</dependency>
```

```text
voidframework {
    code {
        remoteConfiguration {
            providers = "dev.voidframework.remoteconfiguration.provider.HttpRemoteConfigurationProvider"

            # Configuration of the remote configuration provider "http"
            http {

                # Endpoint. HTTPS endpoint could be used,
                # but the SSL certificate must be valid
                endpoint = "http://127.0.0.1:2379/"
                endpoint = ${?VOID_REMOTECONF_HTTP_ENDPOINT}

                # Method to use (ie: GET, POST, ...)
                method = "GET"
                method = ${?VOID_REMOTECONF_HTTP_METHOD}

                # Authentication username
                username = null
                username = ${?VOID_REMOTECONF_HTTP_USERNAME}

                # Authentication password
                password = null
                password = ${?VOID_REMOTECONF_HTTP_PASSWORD}
            }
        }
    }
}
```


{{< newline >}}
#### Creating a Remote configuration provider

Creating a new provider is very easy. Simply implement the `RemoteConfigurationProvider` interface or extend the `AbstractRemoteConfigurationProvider` abstract class.

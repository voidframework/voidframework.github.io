---
title: "Class scanning"
slug: "class-scanning"
draft: false
menu:
  sidebar:
    parent: "core"
    name: "Class scanning"
    weight: 3
    identifier: "class-scanning"
---

The core of the Void Framework is based on the scanning of different paths to discover elements to load.
4 types of elements are recognised during the scan:

* Classes implementing `com.google.inject.Module` or extending `com.google.inject.AbstractModule`
* Classes annotated with `Bindable` familly annotation
* Classes implementing defined interface
* Interfaces annotated with `Proxyable` annotation



{{< newline >}}
#### Guice module

Guice modules that extend the abstract class `AbstractModule` are automatically detected and loaded when the application starts. Unless the module is explicitly disabled by the `voidframework.core.disabledModules` configuration.

{{< alert "info" >}}
If you want to manage a priority on Guices modules, you can implement the <code>OrderedModule</code> interface.
{{< /alert >}}


{{< newline >}}
#### Bindable

`@Bindable` is a specific annotation that allows annotated classes to be considered as candidates for auto-detection during classpath scan.
Other class-level specialized annotations can also be considered as identifying a bindable and provide a clearer identification of the purpose of the class.


{{< table table_class="table table-striped" >}}
| Annotation    | Description                                         |
|---------------|-----------------------------------------------------|
| `@Bindable`   |                                                     |
| `@Controller` | Indicates that an annotated class is a "Controller" |
| `@Repository` | Indicates that an annotated class is a "Repository" |
| `@Service`    | Indicates that an annotated class is a "Service"    |
{{< /table >}}



{{< newline >}}
#### Defined interface

The configuration key `voidframework.core.bindExtraInterfaces` is used to define a set of interfaces for which to bind the found implementations. For example, converters are automatically detected in this way via the `TypeConverter` interface.



{{< newline >}}
#### Proxyable interface

The `@Proxyable` annotation indicates that the implementation of the annotated interface is a proxy that will be configured by one of the modules that will be loaded when the application starts. The module can retrieve the interface(s) it is interested in via the `ScannedClassesToLoad` variable provided in the module constructor.



{{< newline >}}
#### Bootstrap file generator

Scanning classes can, for several reasons, drastically increase the start-up time of the application. To mitigate this phenomenon, it is possible to use a bootstrap file, generated in advance, containing the useful classes detected during the scan. At compile time, the file `resources/classpath.bootstrap` will be created.

To activate the generator, simply add the following lines to the `pom.xml` file.

```xml
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>exec-maven-plugin</artifactId>
    <version>3.0.0</version>
    <executions>
        <execution>
            <id>generate-classpath-bootstrap</id>
            <goals>
                <goal>java</goal>
            </goals>
            <phase>process-sources</phase>
            <configuration>
                <mainClass>dev.voidframework.core.classestoload.generator.ClasspathBootstrapGenerator</mainClass>
                <arguments>
                    <argument>${project.build.outputDirectory}</argument>
                </arguments>
            </configuration>
        </execution>
    </executions>
</plugin>
```

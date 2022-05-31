---
title: "Class scanning"
slug: "class-scanning"
draft: false
menu:
  sidebar:
    parent: "core"
    name: "Class scanning"
    weight: 1
    identifier: "class-scanning"
---

The core of the Void Framework is based on the scanning of different paths to discover elements to load.
3 types of elements are recognised during the scan:

* Bindable classes (see below)
* classes implementing the `TypeConverter` interface
* classes which extend `AbstractModule` (Guice)


{{< newline >}}
#### Bindable

`@Bindable` is a specific annotation that allows annotated classes to be considered as candidates for auto-detection during classpath scan.
Other class-level specialized annotations can also be considered as identifying a bindable and provide a clearer identification of the purpose of the class.


{{< table table_class="table table-striped" >}}
| Annotation    | Description                                         |
|---------------|-----------------------------------------------------|
| `@BindClass`  | Indicates that an annotated class is a "Bindable"   |
| `@Controller` | Indicates that an annotated class is a "Controller" |
| `@Repository` | Indicates that an annotated class is a "Repository" |
| `@Service`    | Indicates that an annotated class is a "Service"    |
{{< /table >}}


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

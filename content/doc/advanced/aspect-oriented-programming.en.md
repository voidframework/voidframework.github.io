---
title: "Aspect Oriented Programming"
slug: "aspect-oriented-programming"
draft: false
menu:
  sidebar:
    parent: "advanced"
    name: "Aspect Oriented Programming"
    weight: 2
    identifier: "aspect-oriented-programming"
---

Aspect Oriented Programming (AOP) includes programming methods and tools that support the modularization of concerns at the level of the source code. Void Framework manages the AOP via the `AspectJ` and `Guice` libraries. The first library is more powerful but also more complicated to use, while the latter has fewer capabilities but is simple to use.


{{< newline >}}
#### AspectJ

AspectJ runtime (`aspectjrt`) is already provided by the module `voidframework-core`, but you have to add an extra plugin to compile aspects during the compilation of your application.

```xml
<plugin>
    <!-- https://mvnrepository.com/artifact/org.codehaus.mojo/aspectj-maven-plugin -->
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>aspectj-maven-plugin</artifactId>
    <version>1.15.0</version>
    <inherited>true</inherited>
    
    <dependencies>
        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjtools</artifactId>
            <version>1.9.22</version> <!-- Match version provided by Void Framework  -->
        </dependency>
    </dependencies>
    
    <configuration>
        <complianceLevel>${java.version}</complianceLevel>
        <source>${maven.compiler.source}</source>
        <target>${maven.compiler.target}</target>
        <showWeaveInfo>true</showWeaveInfo>
        <verbose>true</verbose>
        <Xlint>ignore</Xlint>
        <encoding>UTF-8</encoding>
    </configuration>

    <executions>
        <execution>
            <goals>
                <goal>compile</goal>
                <goal>test-compile</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

{{< alert "info" >}}
If you are using an IDE, remember to configure it so that it executes the goal <code>aspectj:compile</code> before running your application. In IntelliJ, go to Maven tab, plugin, aspectj, left-click on aspectj:compile, choose "Execute before Run/Debug".
{{< /alert >}}

{{< alert "warning" >}}
Direct injection via constructor can't be used on classes annotated with <code>@Aspect</code>.
{{< /alert >}}


Read more about AspectJ at:

* https://www.eclipse.org/aspectj/doc/released/progguide/index.html
* https://www.baeldung.com/aspectj


{{< newline >}}
#### Guice

Read more about Guice AOP at:

* https://github.com/google/guice/wiki/AOP
* https://www.baeldung.com/guice

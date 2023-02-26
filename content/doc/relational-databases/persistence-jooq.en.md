---
title: "Hibernate"
slug: "persistence-jooq"
draft: false
menu:
  sidebar:
    parent: "relational-databases"
    name: "jOOQ ORM"
    weight: 4
    identifier: "persistence-jooq"
---

jOOQ is an Object Relational Mapper (ORM). It provides a framework for mapping an object-oriented domain model to a relational database.


{{< newline >}}
#### Installation

This module adds support for the `Transactional` annotation as well as setting up an `DSLContext` provider pre-configured with all the data sources configured via the `datasource` module. There is no special configuration to apply, just add the `voidframework-persistence-jooq` module to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-persistence-jooq</artifactId>
    <version>1.7.0</version>
</dependency>
```


{{< newline >}}
#### Generator

To work, jOOQ needs files generated during the compilation of the project. It is possible to generate the required classes in different ways (scan database, scan entity, ...). For more information, please visit the official [jOOQ website](https://www.jooq.org/learn/)</a>.


To enable code generation, add & customize the code below.

**pom.xml**
```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.jooq</groupId>
            <artifactId>jooq-codegen-maven</artifactId>
            <executions>
                <execution>
                    <id>jooq-codegen</id>
                    <phase>generate-sources</phase>
                    <goals>
                        <goal>generate</goal>
                    </goals>
                </execution>
            </executions>
            <configuration>
                <configurationFile>${project.build.sourceDirectory}/../resources/jooq-code-generator.xml</configurationFile>
            </configuration>
        </plugin>
        <plugin>
            <groupId>org.codehaus.mojo</groupId>
            <artifactId>build-helper-maven-plugin</artifactId>
            <executions>
                <execution>
                    <id>add-jooq-gen-code-test-sources</id>
                    <phase>generate-sources</phase>
                    <goals>
                        <goal>add-test-source</goal>
                    </goals>
                    <configuration>
                        <sources>
                            <source>${project.build.directory}/generated-sources/java/</source>
                        </sources>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

**jooq-code-generator.xml**
```xml
<configuration>
    <generator>
        <database>
            <name>org.jooq.meta.extensions.jpa.JPADatabase</name>
            <properties>

                <!-- A comma separated list of Java packages, that contain your entities -->
                <property>
                    <key>packages</key>
                    <value>com.myapp.models</value>
                </property>

                <!-- Whether JPA 2.1 AttributeConverters should be auto-mapped to jOOQ Converters.
                     Custom <forcedType/> configurations will have a higher priority than these auto-mapped converters.
                     This defaults to true. -->
                <property>
                    <key>useAttributeConverters</key>
                    <value>true</value>
                </property>

                <!-- The default schema for unqualified objects:

                     - public: all unqualified objects are located in the PUBLIC (upper case) schema
                     - none: all unqualified objects are located in the default schema (default)

                     This configuration can be overridden with the schema mapping feature -->
                <property>
                    <key>unqualifiedSchema</key>
                    <value>public</value>
                </property>
            </properties>
        </database>
        <target>
            <packageName>com.myapp.models.jooq</packageName>
            <directory>target/generated-test-sources/java</directory>
        </target>
    </generator>
</configuration>
```



{{< newline >}}
#### Working with transaction manually

```java
final DSLContext dslContext = this.dslContextProvider.get();
dslContext.transaction((configuration) -> {
    /* insert/update/delete operations with configuration.dsl() */
});
```



{{< newline >}}
#### Exemple
```java
@Entity
@Table(name = "NEWS")
public class NewsModel {

    @Id
    @Column(name = "ID", nullable = false)
    public String id;

    @Column(name = "TITLE", nullable = false)
    public String title;
}
```

```java
public class NewsRepositoryImpl implements NewsRepository {

    private final Conversion conversion;
    private final Provider<DSLContext> dslContext;

    @Inject
    public NewsRepositoryImpl(final Conversion conversion,
                              final Provider<DSLContext> dslContextProvider) {
        this.conversion = conversion;
        this.dslContext = dslContext;
    }

    @Overide
    @Transactional(Transactional.TxType.SUPPORTS)
    public List<News> findAll() {
        final List<NewsModel> newsModelList = dslContextProvider.get()
            .select()
            .from(Tables.NEWS)
            .where(Tables.NEWS.TITLE.isNotNull())
            .fetchInto(NewsModel.class);

        return conversion.convert(newsModelList, NewsModel.class, News.class);
    }
```

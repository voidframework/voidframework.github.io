---
title: "Hibernate"
slug: "persistence-hibernate"
weight: 2
draft: false
menu:
  sidebar:
    parent: "databases"
    name: "Hibernate ORM"
    weight: 2
    identifier: "persistence-hibernate"
---

Hibernate is an Object Relational Mapper (ORM). It provides a framework for mapping an object-oriented domain model to a relational database.

{{< alert "info" >}}
Void Framework uses Hibernate 6 (or higher), which that means Java persistence is no longer defined by the Java Persistence API under Java EE, but rather by to the Jakarta Persistence 3.0 specification under Jakarta EE. This means the <code>javax.persistence</code> package is no longer available and is replaced by <code>jakarta.persistence</code> package.
{{< /alert >}}

This module adds support for the `Transactional` annotation as well as setting up an `EntityManager` provider pre-configured with all the data sources configured via the `datasource` module. There is no special configuration to apply, just add the `voidframework-persistence-hibernate` module to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-persistence-hibernate</artifactId>
    <version>1.2.1</version>
</dependency>
```


{{< newline >}}
#### @Transactional
The transactional annotation itself defines the scope of a single database transaction. Void Framework fully implements `Transactional` annotation, so all availables options can be used without any restrictions.

If annotation is used both at class and method level, the second one will take ascendance.

{{< alert "info" >}}
Note that <code>Transactional</code> annotation does not allow the specification of the data source to be used. The current implementation will only work for data source <code>default</code>.
{{< /alert >}}


{{< newline >}}
#### Exemple
```java
@Entity
@DynamicUpdate
@Table(name = "NEWS")
public class NewsModel extends Model {

    @Column(name = "TITLE", nullable = false)
    private String title;

    @Column(name = "CONTENT", nullable = false)
    private String content;

    @Column(name = "PUBLISHED_AT", columnDefinition = "TIMESTAMP", updatable = false, nullable = false)
    private LocalDateTime publishedAt;

    @Override
    public String toString() {
        return this.getClass().getName() + "[id=" + this.id + "]";
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(final String content) {
        this.content = content;
    }

    public LocalDateTime getPublishedAt() {
        return publishedAt;
    }

    public void setPublishedAt(final LocalDateTime publishedAt) {
        this.publishedAt = publishedAt;
    }
}
```

```java
public class NewsRepositoryImpl implements NewsRepository {

    private final Conversion conversion;
    private final Provider<EntityManager> entityManagerProvider;

    @Inject
    public NewsRepositoryImpl(final Conversion conversion,
                              final Provider<EntityManager> entityManagerProvider) {
        this.conversion = conversion;
        this.entityManagerProvider = entityManagerProvider;
    }

    @Overide
    @Transactional(Transactional.TxType.SUPPORTS)
    public List<News> findTop10ByPublishedAtBeforeNowOrderByPublishedAtDesc() {
        final List<NewsModel> newsModelList = entityManagerProvider.get()
                .createQuery("SELECT x FROM NewsModel x WHERE x.publishedAt <= CURRENT_TIMESTAMP ORDER BY x.publishedAt DESC, x.id ASC", NewsModel.class)
                .setMaxResults(10)
                .getResultList();

        return conversion.convert(newsModelList, NewsModel.class, News.class);
    }
```



{{< newline >}}
#### Speed-up PersistenceEntityFactory initialization time
By default, Void Framework tells the `PersistenceEntityFactory` to scan all JARs of the application's and dependencies. This scan is necessary to detect models. If you want to greatly improve this initialization time, it is advisable to set the `voidframework.persistence.modelsJarUrlPattern` configuration key to indicate which JARs to keep. The could be `null`, a regular expression, or `auto` (default value).

If the configuration is set to `null`, only the current JAR / classpath (when started in IDE) will be used. `auto` is like using the regular expression `(.*)`.

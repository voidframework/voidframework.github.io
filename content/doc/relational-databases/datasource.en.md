---
title: "Data source"
slug: "datasource"
draft: false
menu:
  sidebar:
    parent: "relational-databases"
    name: "Data source"
    weight: 1
    identifier: "datasource"
---

Your application needs to connect to one or more databases? Void Framework is capable of handling multiple data sources at the same time through the use of `DataSourceManager`. It will provide all the necessary methods to obtain a connection from the desired data source. Each data source can be configured independently. Your application can, for example, be connected to PostgreSQL and Oracle at the same time.



{{< newline >}}
#### Installation

Void Framework offers different implementations, depending on the implementation chosen, the configuration keys may change. Here you will find all the information to fully configure each implementation.

{{< alert "warning" >}}
Note that you can only use one implementation at a time.
{{< /alert >}}

##### C3P0
```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-datasource-c3p0</artifactId>
    <version>1.4.0</version>
</dependency>
```


##### HikariCP
```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-datasource-hikaricp</artifactId>
    <version>1.4.0</version>
</dependency>
```

{{< newline >}}
#### Configuration

The following configuration keys can be used in the configuration file of your application:

* {{< badge type="primary" name="required" >}} `voidframework.datasource.default.driver` the driver to be used to communicate with the database.
* {{< badge type="primary" name="required" >}} `voidframework.datasource.default.url` the JDBC format URL to be used to reach the database.
* {{< badge type="primary" name="required" >}} `voidframework.datasource.default.username` the username to be provided durint the authentication step.
* {{< badge type="primary" name="required" >}} `voidframework.datasource.default.password` the password to be provided durint the authentication step.
* {{< badge type="secondary" name="optional" >}} {{< badge type="success" name="C3P0 only" >}} `voidframework.datasource.default.statementCacheNumDeferredCloseThreads` defines the number of threads to track when Connections are in use, and only destroy Statements when their parent Connections are not otherwise in use.
* {{< badge type="secondary" name="optional" >}} {{< badge type="success" name="HikariCP only" >}} `voidframework.datasource.default.cachePrepStmts` enable or disable the prepared statements cache.
* {{< badge type="secondary" name="optional" >}} `voidframework.datasource.default.prepStmtCacheSize` the number of prepared statements cache to keep in the cache.
* {{< badge type="secondary" name="optional" >}} {{< badge type="success" name="HikariCP only" >}} `voidframework.datasource.default.prepStmtCacheSqlLimit` the size of the largest SQL query for which the parsing result will be keep in the cache.
* {{< badge type="secondary" name="optional" >}} `voidframework.datasource.default.autoCommit` enable or disable the auto commit behavior when the connection goes back into the pool.
* {{< badge type="secondary" name="optional" >}} {{< badge type="success" name="HikariCP only" >}} `voidframework.datasource.default.connectionInitSql` the SQL statement that will be executed after every new connection.
* {{< badge type="secondary" name="optional" >}} {{< badge type="success" name="HikariCP only" >}} `voidframework.datasource.default.connectionTestQuery` the SQL statement that will be executed to test if the connection is still valid.
* {{< badge type="secondary" name="optional" >}} `voidframework.datasource.default.connectionTimeout` the milliseconds to wait before timing out during the connection.
* {{< badge type="secondary" name="optional" >}} `voidframework.datasource.default.idleTimeout` the milliseconds to wait before closing an unused connection.
* {{< badge type="secondary" name="optional" >}} {{< badge type="success" name="HikariCP only" >}} `voidframework.datasource.default.keepaliveTime` the milliseconds to wait before attempting to keep the connection alive.
* {{< badge type="secondary" name="optional" >}} `voidframework.datasource.default.minimumIdle` the minimum number of alive connections in the pool.
* {{< badge type="secondary" name="optional" >}} `voidframework.datasource.default.maximumPoolSize` the maximum number of connections allowed in the pool.
* {{< badge type="secondary" name="optional" >}} {{< badge type="success" name="C3P0 only" >}} `voidframework.datasource.default.acquireIncrement` determines how many connections at a time C3P0 will try to acquire when the pool is exhausted.
* {{< badge type="secondary" name="optional" >}} `voidframework.datasource.default.maxConnectionAge` the milliseconds to wait before closing a connection.

{{< alert "info" >}}
The third segment named "default" represents the name of the data source. Any name can be used as long as it does not contain spaces or special characters.
{{< /alert >}}


{{< newline >}}
#### Usage

```java
@Service
public class ExampleDataSourceService {

    private final Provider<DataSourceManager> dataSourceManagerProvider;

    @Inject
    public ExampleService(final Provider<DataSourceManager> dataSourceManagerProvider) {
        this.dataSourceManagerProvider = dataSourceManagerProvider;
    }

    public void example() throws SQLException {
      final Connection conn = dataSourceManagerProvider
          .get()
          .getConnection("default");
      /* ... */
      conn.close();
    }
}
```

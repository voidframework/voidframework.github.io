---
layout: "full"
title: "Release notes"
slug: "releasenotes"
---

### 1.4.0
{{< fontawesome name="calendar" >}}  *2022-12-05*
{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Guice module prioritisation</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>jOOQ module</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Web context path is now customizable (<code>voidframework.web.contextPath</code>)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Deserialization: Unknown enum value to null</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Scheduler "run once" mode</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Static files/webjars controller: add route name (<code>static_file</code> and <code>static_webjar</code>)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Updated version of all dependencies</td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.3.2
{{< fontawesome name="calendar" >}}  *2022-11-14*
{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>NullPointerException when requested config is null on FreeMarker</td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.3.1
{{< fontawesome name="calendar" >}}  *2022-11-07*
{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>NullPointerException if header Accept-Language not provided</td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.3.0
{{< fontawesome name="calendar" >}}  *2022-11-07*

{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="warning" name="Security" >}}</td>
  <td>Upgrade Jackson Databind version to 2.14.0 (<a href="https://github.com/advisories/GHSA-jjjh-jjxp-wpff">CVE-2022-42003</a>)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>WebSocket support</code></td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Can configure temporary files location (<code>voidframework.web.server.tempFileLocation</code>)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Mockito annotation support</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>CUID: a Collision-resistant Unique ID</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Add <code>HttpHeaderNames</code> class</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Virtual File Storage</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>No HTTP request timeout (<code>voidframework.web.server.idleTimeout</code>)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>The abbreviation of "december" is now correct (scheduler)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>"Day of Week" and "Month" can't be zero (Scheduler)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Redis methods <code>addInList</code>, <code>getFromList</code> and <code>decrement</code> now working correctly</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Force close all InputStream of uploaded files</td>
</tr><tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Can use template-freemarker without web</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Configuration Key/Value from CLI JVM properties (<code>-D</code> flag)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Annotation <code>@RequestVariable</code> can now retrieve array</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Move cache annotations to subpackage <code>annotation</code></td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Use wrap/unwrap on Memory cache engine</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Updated version of all dependencies</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Redis parameter <code>connectionTimeout</code> is now a duration</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Rename all utility classes</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Add new redirection methods on <code>Result</code></td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td><code>HttpRequestBodyContent::asRaw</code> is now an <code>InputStream</code></td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td><code>Redis::addInList</code> now return the current list size</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td><code>ValidationError</code> is now a record</td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.2.1
{{< fontawesome name="calendar" >}}  *2022-09-15*

{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>The "Modules loaded" log is displayed too early</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Remove unused "GlobalFilterDefinition" interface</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Add converter String to Locale (Web). Used to extract Locale from incoming request (route path or query parameter)</td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.2.0
{{< fontawesome name="calendar" >}}  *2022-09-05*

{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="warning" name="Security" >}}</td>
  <td>Upgrade Undertow version to 2.2.19 (<a href="https://github.com/advisories/GHSA-95rf-557x-44g5">CVE-2022-2053</a>)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Add SecurityHeadersFilter</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Add unit test JUnit extension and annotation</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Add ability to fetch remote configuration provider & "etcd" remote configuration provider</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Add "http" remote configuration provider</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Add CharConstants & StringConstants classes</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Force EntityManagerFactory initialization during boot sequence</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Add new Result methods to handle empty content easily</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Validation constraints can be grouped</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Clean code</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Better boolean support (Freemarker / config)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Refactoring module "web" (move files, new constant values, unit tests)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Updated version of all dependencies</td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.1.2
{{< fontawesome name="calendar" >}}  *2022-08-02*

{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>EntityManagerFactory don't find models on multiple-jars project</td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.1.1
{{< fontawesome name="calendar" >}}  *2022-07-24*

{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Error 500 CSRF when POST request render template</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Change CSRF signature algorithm to HMACSHA256</td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.1.0
{{< fontawesome name="calendar" >}}  *2022-07-22*

{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Methods on <code>Reflection</code> util class: <code>getAnnotatedField(Object, Class<? extends Annotation>)</code> and <code>getAnnotatedField(Class, Class<? extends Annotation>)</code></td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Configuration keys to define number of I/O and Worker threads (Web)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Redis (base + cache + healthcheck)</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>CSRF token</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Cookie revocation not working</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>C3P0/HikariCP settings</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Issue on routes sorting when regex and capture regex are used</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Assets not found when devMode=false</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Hibernate : Models not found when application is compiled</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>No longer necessary for HealthChecker to be Singleton</code></td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Add cache abstraction helper</code></td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Session signature key configuration is now required</code></td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Rename <code>ApplicationLauncher</code> to <code>VoidApplication</code>
</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Updated version of all dependencies</td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.0.1
{{< fontawesome name="calendar" >}}  *2022-07-08*

{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="success" name="New" >}}</td>
  <td>Ability to retrieve XML body content as Java object</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Removed I18N reference from Hibernate module</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td><code>Transactional</code> annotation : rollback not occur on unchecked exception</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Routes are randomly sorted</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Cache management : rename the annotation <code>Cache</code> to <code>CacheResult</code> and add <code>CacheRemove</code></td>
</tr>
{{< /htmltable >}}



{{< newline >}}
### 1.0.0
{{< fontawesome name="calendar" >}}  *2022-07-02*

*Initial release*

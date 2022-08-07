---
layout: "full"
title: "Release notes"
slug: "releasenotes"
---

### 1.2.0
{{< fontawesome name="calendar" >}}  *2022-09-05*

{{< htmltable table_class="table table-borderless" >}}
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Security" >}}</td>
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
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Change CSRF signature algorithm to HMACSHA256</td>
</tr>
<tr>
  <td class="text-end" width=90px>{{< badge type="danger" name="Fixed" >}}</td>
  <td>Error 500 CSRF when POST request render template</td>
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
  <td class="text-end" width=90px>{{< badge type="primary" name="Improved" >}}</td>
  <td>Cache management : rename the annotation <code>Cache</code> to <code>CacheResult</code> and add <code>CacheRemove</code></td>
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
{{< /htmltable >}}



{{< newline >}}
### 1.0.0
{{< fontawesome name="calendar" >}}  *2022-07-02*

*Initial release*

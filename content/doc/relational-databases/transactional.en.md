---
title: "Transactional"
slug: "transactional"
draft: false
menu:
  sidebar:
    parent: "relational-databases"
    name: "Transactional"
    weight: 2
    identifier: "transactional"
---

It is possible to work within a transaction in two ways: manually or via the use of the `@Transactional` annotation. The first one is highly dependent of the used backend (ie: Hibernate vs jOOQ), the second one is fully handled by Void Framework. For more information on the manual management of transactions, go to the page corresponding to the backend used.



{{< newline >}}
#### @Transactional
The transactional annotation itself defines the scope of a single database transaction. Void Framework fully implements `Transactional` (Jakarta) annotation, so all availables options can be used without any restrictions.

If annotation is used both at class and method level, the second one will take ascendance.

{{< alert "info" >}}
Note that <code>Transactional</code> annotation does not allow the specification of the data source to be used. The current implementation will only work for data source <code>default</code>.
{{< /alert >}}

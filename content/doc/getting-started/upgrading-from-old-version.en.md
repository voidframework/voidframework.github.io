---
title: "Upgrading from old version"
slug: "upgrading-from-old-version"
draft: false
menu:
  sidebar:
    parent: "getting-started"
    name: "Upgrading from old version"
    weight: 3
    identifier: "upgrading-from-old-version"
---

Sometimes important changes will be introduced that will break the backwards compatibility with older versions of the framework. On this page you will find the necessary steps to make your application work with the latest version.



{{< newline >}}
#### 1.1.0

- `ApplicationLauncher` has been renamed to `VoidApplication`
- The setting key `voidframework.web.session.signatureKey` is now required

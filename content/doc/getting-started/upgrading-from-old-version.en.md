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



{{< newline >}}
#### 1.2.0

- The CSRF filter has been moved to the `dev.voidframework.web.http.filter.csrf` package, if you use this filter in your application, you will need to modify the configuration key `voidframework.web.globalFilters`
- The Security Headers filter has been moved to the `dev.voidframework.web.http.filter.security` package, if you use this filter in your application, you will need to modify the configuration key `voidframework.web.globalFilters`
- Annotations `NoCSRF`, `RequestBody`, `RequestPath`, `RequestRoute`, `RequestVariable` and `WithFilter` has been moved to the package `dev.voidframework.web.http.annotation`

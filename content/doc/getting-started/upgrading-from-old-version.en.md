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
#### 1.0.0

*Initial release*


{{< newline >}}
#### 1.1.0

- `ApplicationLauncher` has been renamed to `VoidApplication`
- The setting key `voidframework.web.session.signatureKey` is now required



{{< newline >}}
#### 1.2.0

- The CSRF filter has been moved to the `dev.voidframework.web.http.filter.csrf` package, if you use this filter in your application, you will need to modify the configuration key `voidframework.web.globalFilters`
- The Security Headers filter has been moved to the `dev.voidframework.web.http.filter.security` package, if you use this filter in your application, you will need to modify the configuration key `voidframework.web.globalFilters`
- Annotations `NoCSRF`, `RequestBody`, `RequestPath`, `RequestRoute`, `RequestVariable` and `WithFilter` has been moved to the package `dev.voidframework.web.http.annotation`



{{< newline >}}
#### 1.3.0

- Annotations `@CacheRemove` and `@CacheResult` are now in the package `dev.voidframework.cache.annotation`
- Redis parameter `connectionTimeout` is now a duration, a time unit must be provided
- `addInList` method of the `voidframework-redis` module now adds items to the end of the list
- Classes from `dev.voidframework.core.helper` has been moved to `dev.voidframework.core.utils` and the suffix `Utils` has been added (ie: `IO` is now named `IOUtils`)
- Method `Result::redirectPermanentlyTo` has been renamed to `Result::redirectMovedPermanently`
- Method `Result::redirectTemporaryTo` has been renamed to `Result::redirectFound`
- Class `HttpMimeType` has been renamed to `HttpMimeTypes`
- Method `HttpRequestBodyContent::asRaw` now return an `InputStream`
- Class `ValidationError` is now a record. All methods are now named without any prefix (ie: `getMessage()` is now named `message()`)



{{< newline >}}
#### 1.4.0

- Method `Router::addRoute` has changed. The `routeUrl` parameter is now of type `RouteURL`. You can use `RouteURL::of` to migrate to the new format



{{< newline >}}
#### 1.5.0

- Annotation `@BindClass` has been renamed to `@Bindable`



{{< newline >}}
#### 1.6.0

- Configuration keys `voidframework.web.server.listenHost` and `voidframework.web.server.listenPort` have been renamed to `voidframework.web.server.http.listenHost` and `voidframework.web.server.http.listenPort`

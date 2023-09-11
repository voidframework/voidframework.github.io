---
title: "Using Web"
slug: "using-web"
draft: false
menu:
  sidebar:
    parent: "web"
    name: "Using Web"
    weight: 1
    identifier: "using-web-introduction"
---

Does your application need to have web entry points (ie: http(s) or websocket) to provide an API or web pages? The `voidframework-web` module will best meet your expectations.



{{< newline >}}
#### Installation

To enable this module, just add following lines to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-web</artifactId>
    <version>1.10.0</version>
</dependency>
```



{{< newline >}}
#### Configuration

The following configuration keys can be used.

**Base**
* `voidframework.web.gracefulStopTimeout` the time (duration or milliseconds) for the web daemon to shut down properly. The default value is `15 seconds`.
* `voidframework.web.errorHandler` the implementation of the error handler to use in case of http error. The default value is `dev.voidframework.web.http.errorhandler.DefaultErrorHandler`.
* `voidframework.web.contextPath` the default context path root. The default value is `/`.
* `voidframework.web.routes` a list of routing definition classes (must implement the interface `AppRoutesDefinition`). The default value is `[]`.
* `voidframework.web.globalFilters` a list of routing global filter classes (must implement the interface `Filter`). The default value is `[]`.
* `voidframework.web.baseAssetResourcesDirectory` the default location of static files in the "resources" directory. The default value is `static`.

**Server**
* `voidframework.web.server.idleTimeout` the time without any request to wait before the connection is closed. The default value is `30 seconds`.
* `voidframework.web.server.extraWebServerConfiguration` the implementation of the interface `ExtraWebServerConfiguration` to apply a custom configuration to the Undertow web server. The default value is `null`.
* `voidframework.web.server.ioThreads` the number of I/O threads. If not specified (value = null or 0), `Math.max(Runtime.getRuntime().availableProcessors(), 2)` value will be used. The default value is `null`.
* `voidframework.web.server.workerThreads` the number of Worker threads. If not specified (value = null or 0), `ioThreadsNumber * 8` value will be used. The default value is `null`.
* `voidframework.web.server.maxBodySize` the max body content size. The default value is `1 MiB`.
* `voidframework.web.server.fileSizeThreshold` the maximum size allowed in memory before the uploaded file was stored on the disk rather than in memory. The default value is `256 KiB`.
* `voidframework.web.server.tempFileLocation` the location where temporary files will be stored. The default value is `null` (default Java temporary folder).

**HTTP**
* `voidframework.web.server.http.listenHost` the interface on which the server will listen for non-secure HTTP requests. The default value is `127.0.0.1`.
* `voidframework.web.server.http.listenPort` the port on which the server will listen for non-secure HTTP requests. The default value is `9000`.

**HTTPS**
* `voidframework.web.server.https.listenHost` the interface on which the server will listen for HTTPS requests. The default value is `127.0.0.1`.
* `voidframework.web.server.https.listenPort` the port on which the server will listen for HTTPS requests. The default value is `9001`.
* `voidframework.web.server.https.ssl.protocols` the protocols to use. The default value is `["TLSv1.2", "TLSv1.3"]`.
* `voidframework.web.server.https.ssl.ciphers` the allowed ciphers. If list is empty, all ciphers will be allowed. The default value is `[]`.
* `voidframework.web.server.https.ssl.keyStorePath` the path where is located the key store. Could be a "resources" path, a URL or a simple path. The default value is `null`.
* `voidframework.web.server.https.ssl.keyStoreType` the type of the key store. The default value is `JKS`.
* `voidframework.web.server.https.ssl.keyStorePassword` the password to use to open the key store. The default value is `null`.
* `voidframework.web.server.https.ssl.keyAlias` the alias of the key to use. If "null" the key will be choosen automatically. The default value is `null`.
* `voidframework.web.server.https.ssl.keyPassword` the key password. The default value is `${voidframework.web.server.https.ssl.keyStorePassword}`.

**Language**
* `voidframework.web.language.availableLanguages` the available languages. The default value is `["en", "fr"]`.
* `voidframework.web.language.cookieName` the name of the cookie containing the current language. The default value is `VOID_LANG`.
* `voidframework.web.language.cookieHttpOnly` if the cookie can only be accessed via HTTP. The default value is `false`.
* `voidframework.web.language.cookieSecure` if the cookie must be secured, if `true`, the cookie will be only sent via HTTPS. The default value is `false`.

**Flash messages**
* `voidframework.web.flashMessages.cookieName` the name of the cookie containing the current flash messages. The default value is `VOID_FLASH`.
* `voidframework.web.flashMessages.cookieHttpOnly` if the cookie can only be accessed via HTTP. The default value is `false`.
* `voidframework.web.flashMessages.cookieSecure` if the cookie must be secured, if `true`, the cookie will be only sent via HTTPS. The default value is `false`.

**Session**
* `voidframework.web.session.cookieName` the name of the cookie containing the current session. The default value is `VOID_SESS`.
* `voidframework.web.session.cookieHttpOnly` is the cookie only be accessed via HTTP? The default value is `true`.
* `voidframework.web.session.cookieSecure` is the cookie secured? If true, sent only for HTTPS requests. The default value is `false`.
* `voidframework.web.session.signatureKey` the key used to digitally sign the session content.
* `voidframework.web.session.timeToLive` the session TTL. The default value is `7 days`.

**CSRF**
* `voidframework.web.csrf.tokenName` the token name (used to retrieve token from Body or QueryString). The default value is `csrfToken`.
* `voidframework.web.csrf.cookieName` the name of the cookie containing the current CSRF. The default value is `VOID_CSRF`.
* `voidframework.web.csrf.cookieHttpOnly` is the cookie only be accessed via HTTP? The default value is `true`.
* `voidframework.web.csrf.cookieSecure` is the cookie secured? If true, sent only for HTTPS requests. The default value is `false`.
* `voidframework.web.csrf.signatureKey` the key used to digitally sign the CSRF token. The default value is `${voidframework.web.session.signatureKey}`.
* `voidframework.web.csrf.timeToLive` the CSRF token TTL. The default value is `15 minutes`.

**Security headers**
* `voidframework.web.securityHeaders.contentTypeOptions` the value for the header "X-Content-Type-Options". The default value is `nosniff`.
* `voidframework.web.securityHeaders.frameOptions` the value for the header "X-Frame-Options". The default value is `DENY`.
* `voidframework.web.securityHeaders.xssProtection` the value for the header "X-XSS-Protection". The default value is `1; mode=block`.
* `voidframework.web.securityHeaders.crossOriginResourcePolicy` the value for the header "Cross-Origin-Resource-Policy". The default value is `same-origin`.
* `voidframework.web.securityHeaders.contentSecurityPolicy` the value for the header "Content-Security-Policy". The default value is `default-src 'self'`.

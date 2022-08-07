---
title: "Security headers"
slug: "security-headers"
draft: false
menu:
  sidebar:
    parent: "web"
    name: "Security headers"
    weight: 5
    identifier: "security-headers"
---

Void Framework provides a basic filter to add certain headers to HTTP responses by default. These headers allow you to add an extra level of security to your application.



{{< newline >}}
#### Configuration

The following configuration keys can be used in the configuration file of your application.

* `voidframework.web.securityHeaders.contentTypeOptions` the value for the header "X-Content-Type-Options". The default value is `nosniff`.
* `voidframework.web.securityHeaders.frameOptions` the value for the header "X-Frame-Options". The default value is `DENY`.
* `voidframework.web.securityHeaders.xssProtection` the value for the header "X-XSS-Protection". The default value is `1; mode=block`.
* `voidframework.web.securityHeaders.crossOriginResourcePolicy` the value for the header "Cross-Origin-Resource-Policy". The default value is `same-origin`.
* `voidframework.web.securityHeaders.contentSecurityPolicy` the value for the header "Content-Security-Policy". The default value is `default-src 'self'`.


{{< alert "info" >}}
You can disable one of the headers by assigning the value <code>null</code>. The header will then not be sent.
{{< /alert >}}


{{< newline >}}
#### Enable


The activation of the CSRF filter is done via the configuration key `voidframework.web.globalFilters`. Read more about [Filters]({{< ref "Filters" >}}).


```text
voidframework {

    web {
        globalFilters += "dev.voidframework.web.http.filter.security.SecurityHeadersFilter"
    }
}
```

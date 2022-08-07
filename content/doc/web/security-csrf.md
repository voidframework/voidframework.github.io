---
title: "CSRF"
slug: "security-csrf"
draft: false
menu:
  sidebar:
    parent: "web"
    name: "CSRF"
    weight: 4
    identifier: "security-csrf"
---

Cross-site request forgery (CSRF), also known as one-click attack or session riding, is a type of malicious vector attack of a website where unauthorized commands are submitted from a user that the web application trusts.

{{< alert "info" >}}
It is recommended that you familiarize yourself with CSRF. We recommend starting with this information from <a href="https://owasp.org/www-community/attacks/csrf">OWASP</a>.
{{< /alert >}}

Void Framework provides a CSRF filter that can be applied globally to all requests or only on specific endpoints.



{{< newline >}}
#### Configuration

The following configuration keys can be used in the configuration file of your application.

* `voidframework.web.csrf.tokenName` the token name (used to retrieve token from Body or QueryString). The default value is `csrfToken`.
* `voidframework.web.csrf.cookieName` the name of the cookie containing the current CSRF. The default value is `VOID_CSRF`.
* `voidframework.web.csrf.cookieHttpOnly` is the cookie only be accessed via HTTP? The default value is `true`.
* `voidframework.web.csrf.cookieSecure` is the cookie secured? If true, sent only for HTTPS requests. The default value is `false`.
* `voidframework.web.csrf.signatureKey` the key used to digitally sign the CSRF token. The default value is `${voidframework.web.session.signatureKey}`.
* `voidframework.web.csrf.timeToLive` the CSRF token TTL. The default value is `15 minutes`.



{{< newline >}}
#### Enable


The activation of the CSRF filter is done via the configuration key `voidframework.web.globalFilters`. Read more about [Filters]({{< ref "Filters" >}}).


```text
voidframework {

    web {
        globalFilters += "dev.voidframework.web.http.filter.csrf.CSRFFilter"
    }
}
```



{{< newline >}}
#### @NoCSRF

Although you have enabled the CSRF filter, you may need to disable CSRF protection on a specific endpoint. To do this, you can use the `@NoCSRF` annotation which will indicate that the CSRF token does not need to be checked.

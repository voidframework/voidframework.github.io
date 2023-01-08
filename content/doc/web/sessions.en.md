---
title: "Session"
slug: "session"
draft: false
menu:
  sidebar:
    parent: "web"
    name: "Session"
    weight: 3
    identifier: "session"
---

If you need to store data between HTTP requests, you can store it in the session. The data stored in the session is available throughout the user's session.


{{< alert "info" >}}
Note that the session is not stored on the server side, but on the client side via the use of a digitally signed Cookie.
<br/>
<br/>
Because session is implemented using cookies, there are some implications.
<ul>
<li>The data size is limited to 4 KiB</li>
<li>Only string can be stored</li>
</ul>
{{< /alert >}}


{{< newline >}}
#### Configuration

The following configuration keys can be used in the configuration file of your application.

* `voidframework.web.session.cookieName` the name of the cookie containing the current session. The default value is `VOID_SESS`.
* `voidframework.web.session.cookieHttpOnly` is the cookie only be accessed via HTTP? The default value is `true`.
* `voidframework.web.session.cookieSecure` is the cookie secured? If true, sent only for HTTPS requests. The default value is `false`.
* `voidframework.web.session.signatureKey` the key used to digitally sign the session content.
* `voidframework.web.session.timeToLive` the session TTL. The default value is `7 days`.



{{< newline >}}
#### Read value

You can access the session data via the `Context`. Methods `get` or `getOrDefault` can be used.

```java
@Singleton
@WebController
public class Controller {

    @RequestRouting
    public Result sessionExample(final Context ctx) {
        final String userId = ctx.getSession().get("USER_ID");
        return Result.of(userId);
    }
}
```



{{< newline >}}
#### Store value

To store value(s), methods `put`, `putAll` and `putIfAbsent` can be used.

```java
@Singleton
@WebController
public class Controller {

    @RequestRouting
    public Result sessionExample(final Context ctx) {
        final String userId = ctx.getSession().put("USER_ID", "e90b88d4-3c15");
        return Result.of(userId);
    }
}
```

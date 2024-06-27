---
title: "Mailer : Apache Commons Email"
slug: "mailer-apache-commons-email"
draft: false
menu:
  sidebar:
    parent: "sendmail"
    name: "Mailer : Apache Commons Email"
    weight: 3
    identifier: "mailer-apache-commons-email"
---


This implementation of the mailer uses the `Apache Commons Email` library. It allows you to easily send email via SMTP.


{{< newline >}}
#### Installation
```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-sendmail-commonsemail</artifactId>
    <version>1.15.0</version>
</dependency>
```

To enable this mailer, you have to set `voidframework.sendmail.engine` to `dev.voidframework.sendmail.engine.ApacheCommonsEmailMailerEngine` in your application configuration file.


{{< newline >}}
#### Configuration

The following configuration keys can be used in the configuration file of your application:

* `voidframework.sendmail.commonsemail.username` user name for authentication. The default value is `null`.
* `voidframework.sendmail.commonsemail.password` password for authentication. The default value is `null`.


This module also includes many of the configuration keys of the Java Mail properties. To use it, simply prefix them with `voidframework.sendmail.commonsemail.`. Here is the list of possible properties:

https://javaee.github.io/javamail/docs/api/javax/mail/internet/package-summary.html

* `mail.mime.address.usecanonicalhostname`
* `mail.mime.allowencodedmessages`
* `mail.mime.applefilenames`
* `mail.mime.base64.ignoreerrors`
* `mail.mime.charset`
* `mail.mime.contenttypehandler`
* `mail.mime.decodefilename`
* `mail.mime.decodeparameters`
* `mail.mime.decodetext.strict`
* `mail.mime.encodeeol.strict`
* `mail.mime.encodefilename`
* `mail.mime.encodeparameters`
* `mail.mime.foldtext`
* `mail.mime.ignoremultipartencoding`
* `mail.mime.ignoreunknownencoding`
* `mail.mime.ignorewhitespacelines`
* `mail.mime.multipart.allowempty`
* `mail.mime.multipart.ignoreexistingboundaryparameter`
* `mail.mime.multipart.ignoremissingboundaryparameter`
* `mail.mime.multipart.ignoremissingendboundary`
* `mail.mime.parameters.strict`
* `mail.mime.setcontenttypefilename`
* `mail.mime.setdefaulttextcharset`
* `mail.mime.uudecode.ignoreerrors`
* `mail.mime.uudecode.ignoremissingbeginend`
* `mail.mime.windowsfilenames`

https://javaee.github.io/javamail/docs/api/com/sun/mail/smtp/package-summary.html

* `mail.smtp.user`
* `mail.smtp.host`
* `mail.smtp.port`
* `mail.smtp.connectiontimeout`
* `mail.smtp.timeout`
* `mail.smtp.writetimeout`
* `mail.smtp.from`
* `mail.smtp.localhost`
* `mail.smtp.localaddress`
* `mail.smtp.localport`
* `mail.smtp.ehlo`
* `mail.smtp.auth`
* `mail.smtp.auth.mechanisms`
* `mail.smtp.auth.login.disable`
* `mail.smtp.auth.plain.disable`
* `mail.smtp.auth.digest-md5.disable`
* `mail.smtp.auth.ntlm.disable`
* `mail.smtp.auth.ntlm.domain`
* `mail.smtp.auth.ntlm.flags`
* `mail.smtp.auth.xoauth2.disable`
* `mail.smtp.submitter`
* `mail.smtp.dsn.notify`
* `mail.smtp.dsn.ret`
* `mail.smtp.allow8bitmime`
* `mail.smtp.sendpartial`
* `mail.smtp.sasl.enable`
* `mail.smtp.sasl.mechanisms`
* `mail.smtp.sasl.authorizationid`
* `mail.smtp.sasl.realm`
* `mail.smtp.sasl.usecanonicalhostname`
* `mail.smtp.quitwait`
* `mail.smtp.reportsuccess`
* `mail.smtp.socketFactory`
* `mail.smtp.socketFactory.class`
* `mail.smtp.socketFactory.fallback`
* `mail.smtp.socketFactory.port`
* `mail.smtp.ssl.enable`
* `mail.smtp.ssl.checkserveridentity`
* `mail.smtp.ssl.trust`
* `mail.smtp.ssl.socketFactory`
* `mail.smtp.ssl.socketFactory.class`
* `mail.smtp.ssl.socketFactory.port`
* `mail.smtp.ssl.protocols`
* `mail.smtp.ssl.ciphersuites`
* `mail.smtp.starttls.enable`
* `mail.smtp.starttls.required`
* `mail.smtp.proxy.host`
* `mail.smtp.proxy.port`
* `mail.smtp.proxy.user`
* `mail.smtp.proxy.password`
* `mail.smtp.socks.host`
* `mail.smtp.socks.port`
* `mail.smtp.mailextension`
* `mail.smtp.userset`
* `mail.smtp.noop.strict`

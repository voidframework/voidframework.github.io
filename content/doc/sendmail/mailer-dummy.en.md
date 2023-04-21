---
title: "Mailer : Dummy"
slug: "mailer-dummy"
draft: false
menu:
  sidebar:
    parent: "sendmail"
    name: "Mailer : Dummy"
    weight: 2
    identifier: "mailer-dummy"
---


This implementation is particularly useful locally during development. It simply displays the email in the console rather than sending a real email.


{{< newline >}}
#### Installation

To enable this mailer, you have to set `voidframework.sendmail.engine` to `dev.voidframework.sendmail.engine.DummyMailerEngine` in your application configuration file.

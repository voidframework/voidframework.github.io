---
title: "Sending emails"
slug: "sending-emails"
draft: false
menu:
  sidebar:
    parent: "sendmail"
    name: "Sending emails"
    weight: 1
    identifier: "sending-emails"
---


If your application needs to send a few emails, you can easily do so via the `voidframework-sendmail` module. Sending emails is a not blocking operation, the emails are added to a queue that will be consumed asynchronously.


{{< newline >}}
#### Installation
```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-sendmail</artifactId>
    <version>1.14.0</version>
</dependency>
```

In addition to this basic module, you will need a mailer implementation. By default, the base module provides an implementation intended for local testing. For normal use, you can for example use the `voidframework-sendmail-commonsemail` module 


{{< newline >}}
#### Configuration

The following configuration keys can be used in the configuration file of your application:

* `voidframework.sendmail.engine` the mailer implementation to use. The default value is `null`.
* `voidframework.sendmail.mailQueuePollTimeout` the time to wait before giving up when retrieving a mail to be sent from the queue of mail waiting to be sent when the queue is empty. The default value is `2 seconds`.
* `voidframework.sendmail.gracefulStopTimeout` the time for the daemon to shut down properly before it was terminated. The default value is `15 seconds`.




{{< newline >}}
#### Examples

```java
@BindClass
public final class Service {

    private final Sendmail sendmail;

    @Inject
    public Service(final Sendmail sendmail) {
        this.sendmail = sendmail;
    }

    public void sample() {
        final Mail mail = new Mail();
        mail.setSubject("Hello World!");
        mail.setBodyContentText("Hello World!");
        mail.setFrom("charlie.root@local.domain", "Charlie Root");
        mail.addRecipient("john@local.domain");

        sendmail.send(mail);
    }
}
```

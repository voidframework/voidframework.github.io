---
title: "Using internationalization"
slug: "using-i18n"
draft: false
menu:
  sidebar:
    parent: "i18n"
    name: "Using internationalization"
    weight: 1
    identifier: "internationalization"
---

Depending on your needs, you may need to use translated messages in different languages. By default the Void Framework provides a `ResourceBundle` based implementation. If your needs require more advanced management or different storage (ie: DB rather than files), you can easily use your own implementation.

To enable this module, just add following lines to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-i18n</artifactId>
    <version>1.4.0</version>
</dependency>
```


{{< newline >}}
#### Defining messages

Translations should be placed in a file named `messages_<LANG>.properties` (ie: messages_en.properties) in the `resources` directory.

**resources/messages_fr.properties**
```text
lang.fr=Français
```

**resources/messages_en.properties**
```text
lang.fr=French
```


{{< newline >}}
#### Retrieving messages

The retrieval of translated messages is done through the use of the `Internationalization` service.

**Example**
```java
public final class InternationalizationExample {

    private final Internationalization i18n;

    @Inject
    public InternationalizationExample(final Internationalization i18n) {
        this.i18n = i18n;
    }

    public void i18n() {
        // Output: Français
        i18n.getMessage(Locale.FRENCH, "lang.fr");

        // Output: French
        i18n.getMessage(Locale.ENGLISH, "lang.fr");
    }
}        
```



{{< newline >}}
#### Plural forms

The plural form can be handled in two ways, the first uses `ChoiceFormat` which allows via an advanced syntax to add some intelligence to the translation messages. The second, more simple, is based on the use of new keys with special naming.


{{< alert "info" >}}
Read more about <code>ChoiceFormat</code> on official
<a href="https://docs.oracle.com/javase/tutorial/i18n/format/choiceFormat.html">Java documentation</a>.
{{< /alert >}}



**Example (ChoiceFormat)**
```text
key=This element contains {0,choice,0#no comments|1#one comment|1<{0,number,000} comments}
```

```java
public void i18n() {
    // Output: This element contains 0 comments
    i18n.getMessage(Locale.ENGLISH, "key", 0);

    // Output: This element contains 1 comment
    i18n.getMessage(Locale.ENGLISH, "key", 1);

    // Output: This element contains 1337 comments
    i18n.getMessage(Locale.ENGLISH, "key", 1337);
}
```


**Example (New key)**
```text
inbox.0=Inbox "{0}" contains no messages
inbox.1=Inbox "{0}" contains one message
inbox.2=Inbox "{0}" contains {1} messages
```

```java
public void i18n() {
    // Output: Inbox "Unread" contains no messages
    i18n.getMessage(Locale.ENGLISH, 0, "inbox", "Unread", 0);

    // Output: Inbox "Unread" contains one message
    i18n.getMessage(Locale.ENGLISH, 1,"inbox", "Unread", 1);

    // Output: Inbox "Unread" contains 42 messages
    i18n.getMessage(Locale.ENGLISH, 42, "inbox", "Unread", 42);
}
```

---
title: "Type conversion"
slug: "type-conversion"
draft: false
menu:
  sidebar:
    parent: "core"
    name: "Type conversion"
    weight: 4
    identifier: "type-conversion"
---

Type conversion is a mechanism for converting data from one type to another. For example, convert the string "1234" to an integer. The conversion is very useful when moving from one layer to another in DDD-based architectures. It is also used in the `web` feature to convert path param to typed values in the controller.


{{< newline >}}
#### Using conversion

The conversion is used via the `Conversion` service which is accessible via direct injection.

```java
public final class ExampleConversionService {

    private final Conversion conversion;

    @Inject
    public ExampleConversionService(final Conversion conversion) {
        this.conversion = conversion;
    }

    public void example() {
        final String boolAsString = "true";
        final Boolean bool = conversion.convert(boolAsString, Boolean.class);
        // or conversion.convert(boolAsString, String.class, Boolean.class);
    }
}
```


{{< newline >}}
#### Creating a new converter

The creation of a new converter is very simple, you just have to implement the `TypeConverter` interface and to register this implementation with the `ConverterManager`. The registration will be done automatically if the newly created converter is in a package which will be scanned at the start of the application (see the `voidframework.core.acceptedScanPaths` parameter).

```java
/**
 * Convert a {@code String} into an {@code Boolean}.
 */
public final class StringToBooleanConverter implements TypeConverter<String, Boolean> {

    private static final List<String> VALUE_TRUE_LIST = Arrays.asList("1", "true", "y", "yes");

    @Override
    public Boolean convert(final String source) {
        // The "source" variable will never be null
        return VALUE_TRUE_LIST.contains(source.toLowerCase(Locale.ENGLISH));
    }
}
```

{{< alert "warning" >}}
A type converter must be stateless, simple and thread safe. Even if direct injection is available, it is not recommended to perform too complex, blocking or slow operation.
{{< /alert >}}

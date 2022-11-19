---
title: "Using template"
slug: "Using template"
draft: false
menu:
  sidebar:
    parent: "template"
    name: "Using template"
    weight: 1
    identifier: "Using template"
---

Sooner or later you will need to generate documents (HTML, PDF...). Void Framework provides all the tools you need!



{{< newline >}}
#### Example

```java
public class TemplateExample {

    private final TemplateRenderer templateRenderer;

    @Inject
    public TemplateExample(final TemplateRenderer templateRenderer) {

        this.templateRenderer = templateRenderer;
    }

    public void renderTemplate() {

        final Map<String, Object> dataModel = new HashMap<>();
        dataModel.put("greating.msg", "Hello World!")

        final String result = templateRenderer.render(
            "renderWithDataModel.ftl",
            Locale.ENGLISH,
            dataModel);

        System.out.println(result);
    }
}
```

{{< alert "warning" >}}
Note that the data Map must be mutable. Internally the different implementations can add other data to it. If you provide a immutable Map, an exception will be thrown.
{{< /alert >}}

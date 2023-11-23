---
title: "Using Virtual File Storage"
slug: "using-vfs"
draft: false
menu:
  sidebar:
    parent: "vfs"
    name: "Using Virtual File Storage"
    weight: 1
    identifier: "using-vfs-introduction"
---

When you need to store or retrieve files, you don't necessarily want to deal with the complexity or you just want to hide it behind an easy to use interface. Void Framework exposes the `VirtualFileStorage` interface which allows you to use any storage engine very simply within your application.



{{< newline >}}
#### Installation

To enable this module, just add following lines to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-vfs</artifactId>
    <version>1.11.1</version>
</dependency>
```



{{< newline >}}
#### Configuration

Different `VirtualFileStorage` implementations must be configured in `voidframework.vfs` namespace. The following configuration keys can be used.

* `voidframework.vfs.<name>.className` the class name of the VFS implementation to use.
* `voidframework.vfs.<name>.default` indicate if the implementation is used by default and can be Guice injected without `@Named` annotation.

{{< alert "info" >}}
Note that each implementation can have extra configuration keys.
{{< /alert >}}



{{< newline >}}
**Example**

```text
voidframework {
    vfs {

        memory {
            className = "dev.voidframework.vfs.engine.MemoryVirtualFileStorage"
            default = true
        }

        disk1 {
            className = "dev.voidframework.vfs.engine.DiskVirtualFileStorage"
            default = false

            basePath = /tmp/
        }

        disk2 {
            className = "dev.voidframework.vfs.engine.DiskVirtualFileStorage"
            default = false

            basePath = /mount/netstorage/
        }
    }
}
```

{{< newline >}}
#### Usage

```java
@Singleton
@WebController(prefixRoute = "/upload")
public class UploadController {

    private final VirtualFileStorage vfs;

    @Inject
    public UploadController(final VirtualFileStorage vfs) {
        
        this.vfs = vfs;
    }

    @RequestRoute(method = HttpMethod.POST, name = "uploadFile")
    public Result uploadFile(final Context context) {

        final FormItem formItem = context.getRequest().getBodyContent().asFormData().getFirst("formFile");
        if (formItem != null && formItem.fileSize() > 0) {
            this.vfs.get().storeFile("upload", HttpContentTypes.APPLICATION_OCTET_STREAM, formItem.inputStream());
        }

        return Result.noContent();
    }
}
```

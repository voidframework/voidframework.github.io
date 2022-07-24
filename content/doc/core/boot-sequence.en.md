---
title: "Boot sequence"
slug: "boot-sequence"
draft: false
menu:
  sidebar:
    parent: "core"
    name: "Boot sequence"
    weight: 1
    identifier: "boot sequence"
---

Below is a diagram describing the boot sequence of Void Framework.

{{< newline >}}
```goat
                   +--------------------+ (1)
                   | Load configuration |
                   +---------+----------+
                             |
                             v
                  .---------------------.  (2)
          +------+ classpath.bootstrap?  +------+
          |       '---------------------'       |
          NO                                   YES
          v                                     v
+-------------------+ (2a)         +--------------------------+ (2b)
|  Scan Classpaths  |              | Load classpath.bootstrap |
+---------+---------+              +------------+-------------+
          |                                     |
          +------------------+------------------+           
                             |
                             v           
                  +----------+---------+ (3)
                  | Load Guice modules |
                  +--------------------+
                             |
                             v
                 +----------------------+ (4)
                 | Register converters  |
                 +----------------------+
                             |
                             v
                 +----------------------+ (5)
                 |  LifeCycle  (Start)  |
                 +----------------------+
```

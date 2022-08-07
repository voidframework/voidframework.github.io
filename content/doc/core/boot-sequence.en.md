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
                  +--------------------------+ (1)
                  | Load local configuration |
                  +------------+-------------+
                               |
                               v
               .--------------------------------.  (2)
       +------+ Remote Conf. Provider available? +------+
       |       '--------------------------------'       |
       NO                                              YES
       |                                                v
       |                                  +---------------------------+ (2a)
       |                                  | Load remote configuration |
       |                                  +-------------+-------------+
       |                                                |
       +----------------------+-------------------------+
                              |
                              v
                   .---------------------.  (3)
           +------+ classpath.bootstrap?  +------+
           |       '---------------------'       |
           NO                                   YES
           v                                     v
 +-------------------+ (3a)         +--------------------------+ (3b)
 |  Scan Classpaths  |              | Load classpath.bootstrap |
 +---------+---------+              +------------+-------------+
           |                                     |
           +------------------+------------------+           
                              |
                              v           
                   +----------+---------+ (4)
                   | Load Guice modules |
                   +--------------------+
                              |
                              v
                  +----------------------+ (5)
                  | Register converters  |
                  +----------------------+
                              |
                              v
                  +----------------------+ (6)
                  |  LifeCycle  (Start)  |
                  +----------------------+
```

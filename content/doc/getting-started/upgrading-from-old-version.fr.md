---
title: "Mise à niveau"
slug: "upgrading-from-old-version"
draft: true
menu:
  sidebar:
    parent: "getting-started"
    name: "Mise à niveau"
    weight: 3
    identifier: "upgrading-from-old-version"
---

Parfois, des changements important qui casseront la retro-compatibilité avec les anciennes version du framework seront introduits. Vous trouverez sur cette page les étapes nécessaires pour que votre application puisse fonctionner avec la dernière version.



{{< newline >}}
#### 1.1.0

- `ApplicationLauncher` à été renommé en `VoidApplication`
- La clé de configuration `voidframework.web.session.signatureKey` est maintenant obligatoire

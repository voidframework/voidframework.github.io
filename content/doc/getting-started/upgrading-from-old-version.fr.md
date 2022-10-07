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



{{< newline >}}
#### 1.2.0

- Le filtre CSRF à été déplacé dans la package `dev.voidframework.web.filter.csrf`, si vous utilisez ce filtre dans votr application, il faudra modifier la clef de configuration `voidframework.web.globalFilters`



{{< newline >}}
#### 1.3.0

- Les annotations `@CacheRemove` et `@CacheResult` ont été déplacées dans le package `dev.voidframework.cache.annotation`
- Le paramètre Redis `connectionTimeout` est maintenant de type Duration, une unité de temps doit obligatoirement être renseignée
- La méthode `addInList` du module `voidframework-redis` ajoute maintenant les éléments en fin de liste
- Les classes du package `dev.voidframework.core.helper` ont été déplacées vers `dev.voidframework.core.utils` et le suffix `Utils` a été ajouté (ex : `IO` se nomme maintenant `IOUtils`)
- La méthode `Result::redirectPermanentlyTo` a été renommée en `Result::redirectMovedPermanently`
- La méthode `Result::redirectTemporaryTo` a été renommée en `Result::redirectFound`
- La classe `HttpMimeType` a été renommée en `HttpMimeTypes`
- La méthode `HttpRequestBodyContent::asRaw` return désormait un `InputStream`
- La classe `ValidationError` est maintenant un record. Toutes les méthodes sont maintenant nommée sans aucun prefix (ex : `getMessage()` se nomme maintenant `message()`)

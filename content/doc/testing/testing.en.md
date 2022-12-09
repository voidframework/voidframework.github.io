---
title: "JUnit's extension"
slug: "junit-extension"
draft: false
menu:
  sidebar:
    parent: "testing"
    name: "JUnit's extension"
    weight: 1
    identifier: "junit-extension"
---

It is very important to test the code of an application. Void Framework provides tools for JUnit 5 to run your unit tests in a ready-to-use context as well as with support for Mockito annotations.

To enable this module, just add following lines to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-test</artifactId>
    <version>1.5.0</version>
</dependency>
```


{{< newline >}}
#### JUnit's extension

The JUnit 5 extension will initialise the Void Framework application and initialise the variables annotated with Mockito annotations. It will also reset the mock between each test. To use it, add the `@ExtendWith` annotation with the value `VoidFrameworkJUnitExtension.class`.



{{< newline >}}
#### Use extra Guice modules

In some situations, you may need to load additional modules for your application to work properly during the unit testing phase. For this, you can use the `@ExtraGuiceModule` annotation.



{{< newline >}}
#### Example
```java
@ExtendWith(VoidFrameworkJUnitExtension.class)
@ExtraGuiceModule({ExtraGuiceModule.class, AnotherExtraGuiceModule.class})
final class MySimpleUnitTest {

    @Mock
    private MyRepository myRepository;

    @InjectMock
    @Spy
    private MyService myService;

    @Test
    void myLittleTest() {
        // Arrange
        Mockito.when(myRepository.findAll()).thenReturn(Collections.emptyList());

        // Act
        myService.myMethod();

        // Assert
        Mockito.verify(myRepository, Mockito.times(1)).findAll();
    }
}
```

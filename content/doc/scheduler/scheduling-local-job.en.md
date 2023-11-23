---
title: "Scheduling a local job"
slug: "scheduling-job-cron"
draft: false
menu:
  sidebar:
    parent: "scheduler"
    name: "Scheduling a local job"
    weight: 1
    identifier: "scheduling-job-cron"
---


If your application have to schedule a job in a scheduled way (ie: every 5 seconds), not dependending when the application has started, you can schedule job by using delay. In other hand, if you want a precise scheduling not depending on when the application has started, you can use a CRON expression.


{{< newline >}}
#### Installation

To enable this module, just add following lines to the `pom.xml` file of your project.

```xml
<dependency>
    <groupId>dev.voidframework</groupId>
    <artifactId>voidframework-scheduler</artifactId>
    <version>1.11.1</version>
</dependency>
```



{{< newline >}}
#### Define a Job

To define a job, simply use the `@Scheduled` annotation on one or more methods of a bindable class. As a reminder, a class is said to be bindable when it is annotated with, at least, the `@Bindable` annotation.

The `@Scheduled` annotation accepts the following parameters:

* `fixedDelay` the time in milliseconds between the end of the last execution and the next execution. The default value is `0` (disabled).
* `fixedRate` the time in milliseconds between each execution. The default value is `0` (disabled).
* `initialDelay` the time in milliseconds to wait before the first execution of "fixedDelay" or "fixedRate". The default value is `0` (disabled).
* `cron` a CRON-like expression. The default value is empty (disabled).
* `cronZone` the time zone for which the CRON expression will be resolved. The default value is `UTC`.



{{< newline >}}
#### CRON expression
The format of the CRON expression have to be composed of : second, minute, hour, day of month, month and day of week.


{{< table table_class="table table-striped" >}}
| Unit         | Value  | Step Value | Details                                    |
|--------------|--------|------------|--------------------------------------------|
| Second       | 0 – 59 | 1 – 60     |                                            |
| Minute       | 0 – 59 | 1 – 60     |                                            |
| Hour         | 0 – 23 | 1 – 24     |                                            |
| Day of Month | 1 – 31 | 1 – 32     |                                            |
| Month	       | 1 – 12 | 1 – 13     | 1: January, 2: February, ..., 12: December |
| Day of Week  | 0 – 6  | 1 – 7      | 0: Sunday, 1: Monday, ..., 6: Saturday     |
{{< /table >}}


To improve readability, you can also replace `Month` and `Day of Week` with an abbreviation of the desired value.

* `Month`: JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC
* `Day of Week`: SUN, MON, TUE, WEB, THU, FRI, SAT



{{< newline >}}
#### Examples

```java
@BindClass
public final class Ping {

    private static final Logger LOGGER = LoggerFactory.getLogger(Ping.class);

    @Scheduled(fixedDelay = 5000, initialDelay = 10000)
    public void doPingEveryFiveSecondsAfter10Seconds() {
        LOGGER.info("PING!!");
    }

    @Scheduled(cron = "0 */5 * * * *")
    public void doPingEveryFiveMinutesUTC() {
        LOGGER.info("PING!!");
    }

    @Scheduled(cron = "0 0 0 * * mon", cronZone = "Europe/Paris")
    public void doPingEveryMondayAtMidnightEuropeParis() {
        LOGGER.info("PING!!");
    }

    @Scheduled(initialDelay = 1000)
    public void doPingOnceAfter1Second() {
        LOGGER.info("PING!!");
    }
}
```

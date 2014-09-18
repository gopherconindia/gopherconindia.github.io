---
layout: post
title:  "Interview: Gopher Richard Crowley"
tags: [Richard Crowley, GopherConIndia, golang]
---

![Richard Crowley]({{ site.github_project_name }}/images/speakers/rcrowley.jpg)

Qs. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about your self?

_Richard:_ My name's Richard Crowley. I'm the Director of Operations at [Slack](https://slack.com/). I tend to walk the line between development and operations. At work we use PHP, Java, shell, and Chef. On my own time, though, I always choose Go.

**Qs**. Why and when did you decide to start working with Go?

_Richard:_ I'll be the first to admit I didn't truly get Go when it was released as open-source in 2009. But about a year later I started to experiment and fell in love with it for being a statically-typed language that wasn't overly verbose.

**Qs**. How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend?

_Richard:_ I never went further than reading Effective Go, truthfully. From that foundation, the documentation and source code have been sufficient to learn everything I've needed. It helps immensely that the community has held itself to a high standard for documentation, too.

**Qs**. What best practices are most important for a new Go programmer to learn and understand?

_Richard:_ When any programmer learns a new design pattern or language feature, the tendency is to use it wherever possible. Go's certainly no different and it comes with lots of new tricks. I'd encourage new Gophers to remember that they're still just programming and that many times the same tried-and-true patterns are best even in Go. Sometimes a `sync.Mutex` is better than a channel. Sometimes it's not worth the extra `goroutine`. The standard library is full of examples of these and other choices made well.

**Qs**. What are the pros and cons of Go that are being discussed in the development community and what is your opinion on that?

_Richard:_ There are the perennial debates of static versus dynamic types and machine code versus bytecode. I think Go's making a lot of people reconsider their religious views on those. I've always liked the safety of a static type system and the confidence it gives me. Programs written in languages that compile to machine code are wonderfully easy to package and deploy so for that I love Go and especially how static and dependency-free the resulting binaries are. Then there are the ever-present feature debates about generics, exceptions, and so on. I like things the way they are, though I wouldn't ignore a generics-like feature that enabled type assertion-free containers.

**Qs**. Most beginners in Go would like to contribute their time, skills and expertise to a project but invariably are unaware of where and how to do so. Could you suggest some?

_Richard:_ I would encourage beginners to find a way to use Go for real work. That will guide them towards the projects and tools they need and continue Go's rise towards being one of the dominant languages. Contributing to projects that are in active production use makes life better for everyone.

**Qs**. What has been your biggest challenge while working with Go?

_Richard:_ Initially, the challenge was convincing co-workers that we should invest in Go. At that time we were concerned about how its garbage collector would perform in production. Nowadays I think the problem has shifted into one familiar to many other open source communities: Dependency management, maintenance, and quality. Of the three, dependency management is still the shakiest and that contributes a lot to my general goal to depend on nothing but the standard library.

**Qs**. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Richard:_ Most of the people I know using Go are using it for building web services or operational tools. I expect to see Go become the de-facto standard language for all sorts of distributed systems, especially storage systems, in the very near future.

**Qs**. How do you see the market for Go Programmers in the work place? What is the future for Go?

_Richard:_ The market's only growing and I'm sure that'll continue for some time. As architectures tend towards services and microservices there are more and more opportunities for Go to take hold in the lower layers of the stack. I suspect these experiences will convince entrepreneurs to bet their companies on Go, too. I can't say how this will affect big enterprises in the short-term but in the long-term they always seem to catch up.

**Qs**. Do you have any other suggestions for our readers?

_Richard:_ Read at least as much code as you write.

_Thanks Richard for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Richard would be glad to answer._

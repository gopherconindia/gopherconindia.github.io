---
layout: post
title:  "Interview: Gopher Levi Cook"
tags: [Levi Cook, GopherConIndia, golang]
---

![Levi Cook]({{ site.github_project_name }}/images/speakers/levi-cook.jpg)

Qs. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about your self?

_Levi:_ I'm currently teaching Go at [gSchool](http://www.galvanize.it/school/#main) in Denver, Colorado. I began experimenting with Go in 2010 and found it frustrating. Language and library drift made it hard to embrace and promote. I continued following the project and hoping for opportunities to use it at my startup, SupportLocal. When the community announced their plans for long term stability for Go 1, we believed them and adopted it as our primary technology. I've been working in Go full time since March 2012 and couldn't be happier with that decision. Beyond work, I co-founded the Denver Gophers meetup group with Cory LaNou in December of 2014, which has been a blast. At the moment, we're focused on running meetups for brand new Gophers. Last week, we landed 58 new installs with sensible workspace configurations in one evening.

**Qs**. How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend?

_Levi:_ If you're an experienced developer:

* read Effective Go
* browse How to Write Go Code (and don't resist the directions on code organization)
* scan the standard library package docs 
* start coding!

Go will feel comfortable and familiar for most developers on their first day. Then you'll hit your head because Go left some important things out you'll consider essential. Have patience in this moment, the lack of inheritance, generics, etc. is not an oversight. It was all intentional and works out quite well in practice. At this stage, bring your design challenges to a friendly Gopher, online, through a meetup, etc.. It's a friendly community and you'll find someone ready to help. Alternately, explore the standard library source. Look for something similar to your problem and you'll find well written, idiomatic Go code behind the scenes.

If you're a beginning developer, there are fewer resources right now, but don't despair! Caleb Doxsey has an excellent book published for you at [http://www.golang-book.com](http://www.golang-book.com/). Start working your way through this and attending your local meetups. The book references an older version of Go, but this won't mess you up. The Go language is committed to stability and hasn't changed any of the features Caleb built the book around.

If the DIY (Do It Yourself) route isn't appealing, for both beginners and experienced developers, get in touch. There are a number of really good instructor led training options, including gSchool, growing in the community and I'm more than happy to connect you with something that meets your goals.

**Qs**. What best practices are most important for a new Go programmer to learn and understand?

_Levi:_ Go is very opinionated and this will work in your favor when it's time to get things done. For example, I resisted the recommended workspace configuration, as described in How to Write Go Code. Don't bother, especially in the beginning. Instead, focus on writing code and learning the `go` command line tools. If you're really deeply concerned with managing application dependencies across a team, `godep` is as good as it gets today. 

Also, don't get too excited about channels. They're awesome but easily over leveraged. Focus instead on learning how to leverage composition and interfaces to create clean and robust code.

If you're deeply interested in concurrency study the standard library's usage. I have learned a ton from the `net/http` package. And don't miss out on Rob Pike's concurrency videos. He does a great job of setting the stage on concurrency and parallelism in Go.

**Qs**. What are the pros and cons of Go that are being discussed in the development community and what is your opinion on that?

_Levi:_ The pros and cons list feels stable and a little "old hat" to me. Proponents generally claim happiness and highly recommend the language. They also, occasionally say things like "yeah, generics would be nice, but I'm getting by". Antagonists generally claim things, like the type system are totally broken. Overall, I've noticed people who give the language a little time end up feeling very happy with their productivity and systems, and that's more interesting to me.

**Qs**. Most beginners in Go would like to contribute their time, skills and expertise to a project but invariably are unaware of where and how to do so. Could you suggest some?

_Levi:_ That's a great question. For a start, I would suggest, please don't try to port Rails or Django. There's been a lot of time and energy spent on that and there are no clear winners or advantages to doing so. Instead, spend time documenting how you're getting things done with existing projects, like the Gorilla Web Toolkit, BoltDB, Goconvey and other popular and useful projects. Also spend time learning and blogging about the core go tools. They do a number of really cool things already and there's not enough communal information out there on using them for things like refactoring, benchmarking and writing good examples for your documentation.

**Qs**. What has been your biggest challenge while working with Go?

_Levi:_ Unlearning habits from developing and designing with Ruby and Java. I wanted projects to be organized a certain way, and that didn't fit with Go. I wanted inheritance because I was good at thinking that way. I had also forgotten how to do "lower-level" programming because it was hidden away in great libraries on my previous platforms. Overcoming this was challenging. I wrote and rewrote libraries and applications many times before I felt like idiomatic Go.

**Qs**. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Levi:_ Currently, Go is running everywhere. I see early adopters on hardware and I see mainstream adoption for platform and application servers. Over the next couple of years, I believe we'll see it become a mainstream choice everywhere.

**Qs**. How do you see the market for Go Programmers in the work place? What is the future for Go?

_Levi:_ If you compare the number of open jobs from last year, to this year, it's staggering. Everyone is dialing in and adopting. I see numerous large companies through startups committing to some form of adoption and are actively hiring. Go's future is very bright, I'm convinced we'll continue to be shocked by adoption stats, especially on new projects.

**Qs**. Do you have any other suggestions for our readers?

_Levi:_ You'll be annoyed by several conventions and lack of features, but stick with it, there's a boatload of fun and productivity on the other side. I'm writing the best software of my life and taking on programming challenges I would previously considered too ambitious, thanks to Go and the great community surrounding it.

_Thanks Levi for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Levi would be glad to answer._

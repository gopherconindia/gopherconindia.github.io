---
layout: post
title:  "Interview: Gopher Mike Gehard"
tags: [Mike Gehard, GopherConIndia, golang]
---

![Mike Gehard]({{ site.github_project_name }}/images/speakers/mike-gehard.jpg)

Qs. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about your self?

_Mike:_ I work in the Pivotal office in Boulder, CO, USA on the consulting side of the business and have been with the company since March 2010. In that time, I spent a short time as lead engineer at LivingSocial in the User Acquisition group before returning to Pivotal. Most of my time at Pivotal and LivingSocial was spent writing Ruby/Rails web applications before I started writing Go. When I'm not writing code, I love to ride my mountain bike, rock climb and enjoy all that Boulder has to offer with my wife and dog. 

**Qs**. Why and when did you decide to start working with Go?

_Mike:_ I had just returned from ScalaDays in summer 2013 and was super excited about Scala. Rob Mee, SVP at Pivotal and head of Cloud Foundry/Pivotal Labs, said to hold off on Scala and take a look at Go first. At that point, I had never heard about Go. I started looking into Go and a month or two later, I was working on the Cloud Foundry team writing Go for the [logging sub component of Cloud Foundry](https://github.com/cloudfoundry/loggregator) and helping rewrite the [Cloud Foundry CLI tool](https://github.com/cloudfoundry/cli) from Ruby to Go.

**Qs**. How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend?

_Mike:_ The first thing I would recommend is to pack away what you already know about writing code in other languages and try to learn the "Go" way as quickly as you can. I tried to take my Ruby and Java, aka inheritance based, object oriented, way of thinking into writing Go and struggled for the first couple of weeks. Once I embraced the Go way, my life became easier. 

Some materials that really helped me were, in the order that I read them:

* [Go Tour](http://tour.golang.org/) - a great online tutorial that helps you understand the basics of the language.
* [Effective Go](http://golang.org/doc/effective_go.html) - tips/tricks on how to write idiomatic Go.
* [The Go Spec](https://golang.org/ref/spec) - the actual language specification. One of the great things about Go is that the spec is short and well written so you can understand it all.
* Reading the standard library code - what better way to learn the "Go way" than to read the source code.

**Qs**. What best practices are most important for a new Go programmer to learn and understand?

_Mike:_ _Composition over inheritance_ - as I said above, thinking in an inheritance based OO way will hamper your ability to write idiomatic Go code. Make things small and compose them together, instead of trying to make inheritance hierarchies, and your life will be much easier.

_Embrace the interface_ - If you are coming from Ruby, which I was, this may be the hardest one since Ruby doesn't have explicit interfaces. If you think about abstractions and make interfaces for them, your code will be easier to compose and test.

_Not everything is an object_ - In Ruby, everything has to be an object so I found myself writing a lot of classes with 1 method when all I needed was a function. Yes I could use lambdas for that but who really does that in Ruby these days. I found that if I thought about my functions first and then gathered them together into an "object" later my code fit together better.

**Qs**. Most beginners in Go would like to contribute their time, skills and expertise to a project but invariably are unaware of where and how to do so. Could you suggest some?

_Mike:_ A great place to get your started is the [Exercism.io CLI tool](https://github.com/exercism/cli). The codebase is small so you can easily wrap your head around the whole thing.

I am always partial to the [Cloud Foundry codebase](https://github.com/cloudfoundry). The team is solving some hard systems engineering problems and the code allows you to see Go in its element. The downside is that the system as a whole is huge so getting your head around the whole thing can be hard.

**Qs**. What has been your biggest challenge while working with Go?

_Mike:_ Getting back in to the Go mindset when returning to Go. For the past 6 months I have been teaching a 24 week, full time developer training program called [gSchool](http://gschool.it/). We were teaching Ruby/Rails/HTML/CSS/JavaScript so now that I'm back in Go I've got to relearn the Go mindset. That said, writing Go has positively affected my Ruby coding mindset. 

**Qs**. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Mike:_ I see two perfect uses for Go right now, command line tools (CLIs) and systems programming. The ability to distribute dependency free, single binary file CLI tools is amazing. Gone are the days of having a Java developer set up a Ruby environment just to install some gems to get work done.

Also, having a modern, fun to write language to write services/servers that isn't Java is a great move forward. I still like Java for some things but again having a single binary without a dependency is very appealing to me.

I'm not sure what the future holds for Go. I know that people are talking about Go on Android, which seems a natural fit. As an aspiring Android developer, I look forward to being able to write Go on mobile devices.

**Qs**. How do you see the market for Go Programmers in the work place? What is the future for Go?

_Mike:_ I see a bright future for Go. A lot of Cloud Foundry components are being rewritten from Ruby to Go so I know that we at Pivotal are heavily investing in the language. Also seeing the investment from Google and companies like Hashicorp makes me think that Go will be around for a while and will require a lot of eager developers to learn the language.

**Qs**. How excited are you about GopherConIndia 2015?

_Mike:_ I am super excited to be back in India; this will be my 4th visit. I love mentoring/teaching so being able to meet and share my experiences with a whole new group of developers is very exciting to me. I look forward to sharing conversations with folks over chai or a meal of wonderful Indian food.

_Thanks Mike for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Mike would be glad to answer._
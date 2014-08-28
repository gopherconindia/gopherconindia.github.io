---
layout: post
title:  "Advise from Go developers to Go programming newbies"
tags: [GopherConIndia, golang, Gopher Interviews]
---

As part of GopherConIndia's commitment to promote Go programming in India, we [interviewed 40 Gophers](http://list.ly/list/Pak-gopher-interviews) (a Gopher stands for the Go project and Go programmers everywhere), to get their views on Go. We would be publishing two interviews per week from August to December 2014.

If you are just starting with Go programming, their answers to some of our questions would be very useful to you. Check these out.

Qs. *How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend? What best practices are most important for a new Go programmer to learn and understand?*

One should:

* read through [the Go standard library](http://golang.org/pkg/) and [Effective Go](http://golang.org/doc/effective_go.html), to learn *idiomatic Go*. *Effective Go* is highly recommended especially if you have a background in another language.
* do the [Go tour](http://tour.golang.org/#1).
* go through [the language reference](https://golang.org/ref/spec).
* go through [Go by Example](https://gobyexample.com/) as long as you don't just copy-paste!
* just stick with writing Go code and you'll be productive in the language in a matter of weeks.
* understand the power of **interfaces**, they are one of Go's great gifts, potentially more important than channels or goroutines. This [article on interfaces](http://mwholt.blogspot.in/2014/08/maximizing-use-of-interfaces-in-go.html) and Andrew Gerrand's [description of interfaces](http://talks.golang.org/2014/go4gophers.slide#5) from his closing keynote at GopherCon 2014 would be helpful.
* leave your OO baggage at the door, if you are coming from another language, be it a dynamic language like Python or Ruby, or a compiled language like Java or C#. Go is an object oriented language, but it is *not a class based language and does not support inheritance*.
* realize that by removing inheritance from the Go language, the opportunity to practice the mantra of composition over inheritance is made manifest, and fighting it will only lead to frustration.
* not write Go in the style of another language.
* find more experienced Gophers that can help review code snippets and give feedback. The Go community is really supportive and helpful.
* work on a project you have in mind that you want to use Go for or find a project to work on and make it happen. Then continually re-factor the application as you learn more. Leverage the [mailing list](https://groups.google.com/forum/#!forum/golang-nuts) and the [Gopher Academy Slack group](https://gophers.slack.com/) to meet other Gophers and get help. [Dave Cheney's blog](http://dave.cheney.net/) and the [GoingGo blog](http://www.goinggo.net/) are also great places to start.
* not wait for generic types and functions to be added to the language; stop holding your breath and learn to love the language we have today.

Qs. *Anything else you would like to share with Go newbies?*

* Learning a new programming language can be a frustrating experience for anyone. The Go community is incredibility active and you are not alone. Take advantage of all the documentation, blogs, local Meetups and groups like Slack that exist today. Don't be afraid to ask your questions and get involved.
* If you are interested in Go, dabbling with it on the side, or using it professionally, consider visiting your local Go meetup if there is one, and consider speaking if that is something you are comfortable with.
* If you have the opportunity to travel, and have the ability to, make the effort to visit the Go community at your destination.
* Visiting user groups is a way to demonstrate to people who are considering the language that there exists a wider community of users, supporters, and employers, than are visible inside that room.
* Don't waste time on comparing and arguing about computer languages; pick Go if you feel you like and fall in love with it!
* Embrace Go's patterns and the "Go" way of doing things. Your code will thank you for it, and you'll have a lot more fun if you do.
* Fight most urges to introduce dependencies.
* Simplicity is the most important aspect of Go. Avoid over-engineering and rather than having huge monolithic code bases make simple pieces that play well together.
* Porting libraries from other languages to Go is incredibly educational. It allows you to break apart someone else's code and glue it back together in a way that fits with the Go language.

Qs. *How do you see the market for Go Programmers in the work place? What is the future for Go?*

* The market seems desperate for more Go programmers. There's huge demand and the demand will be increasing in the near future.
* The next evolution for Go will be support for building desktop and mobile applications. Currently [Pietro Gagliardi](https://twitter.com/pgandlabs) is working on a platform native GUI library that will support [desktop application development](https://github.com/andlabs/ui). [Guastavo Niemeyer](https://twitter.com/gniemeyer) is working on a [QML library](https://github.com/go-qml/qml) which can support both desktop and mobile application development. Some other areas are distributed systems, web applications, APIs, almost everywhere.
* Go appears to be attractive to the scientific and bio-informatic communities, displacing their use of scipy/numpy. Scientists appear to be a pragmatic bunch and Go is a language that helps them get stuff done.
* The static binary story is very refreshing, considering the previous decade's focus on managed runtimes and dynamic languages, both of which have a complex and unwieldy distribution story. This appears to be very attractive to system administrators and others who identify with the 'devops' moniker. In this space we see projects like Docker and Hashicorp's stable of tools like Consul, Serf, and the recently released Terraform, leading the charge.
* One of the unexpected successes of Go is its applicability for programmers producing cross platform CLI tools, previously a domain of C and operating system distributions. Over time the goal of "Pure Go" will become an aspirational catch cry.
* Another recent surprise is the experimental support for Go on Android that [David Crawshaw](https://twitter.com/davidcrawshaw) is working on for the 1.4 release.
* The potential of Go as a language to teach the art and the profession of programming is enormous.
* Go is doing what Ruby did about 6 or 7 years ago. Really revolutionizing and liberating people to build bigger, more sophisticated apps quickly, that also scale well right from the beginning.
* Go will be a day to day language, both in the industry but also, and specially, in schools.
* Many people at conferences or meetups who are new to the language are exploring it as an option for their company or are trying to convince their company to start using it. Generally those results are positive.
* It will probably take a while to reach critical mass, but Go is, in many ways, really going places.

The Gophers, so far, who have spent time answering our questions are - [William Kennedy](http://www.gophercon.in/blog/2014/07/28/williaminterview/), [Dave Cheney](http://www.gophercon.in/blog/2014/08/03/daveinterview/), [Jiahua Chen](http://www.gophercon.in/blog/2014/08/10/jiahuainterview/), [Mark Bates](http://www.gophercon.in/blog/2014/08/15/markinterview/), [Blake Mizerany](http://www.gophercon.in/blog/2014/08/19/blakeinterview/), [Francesc Campoy Flores](http://www.gophercon.in/blog/2014/08/22/francescinterview/), [Ben Johnson](http://www.gophercon.in/blog/2014/08/26/beninterview/) and Matthew Holt.

Thanks and much appreciated!



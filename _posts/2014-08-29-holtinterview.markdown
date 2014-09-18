---
layout: post
title:  "Interview: Gopher Matthew Holt"
tags: [Matthew Holt, GopherConIndia, golang]
---

![Matthew Holt]({{ site.github_project_name }}/images/speakers/holt.jpg)

Qs. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about yourself?

_Matthew:_ I just tell people I code stuff with my bare hands... but even though I like programming, I'd much rather be outside hiking or cycling.

Relevant open source contributions include [GoConvey](http://goconvey.co/) (mainly the web interface), [martini-contrib/binding](https://github.com/martini-contrib/binding) (for Martini), [binding](http://mholt.github.io/binding/) (for net/http), and [a dinky little utility](http://mholt.github.io/json-to-go/) to convert JSON to a Go type definition (actually written in JavaScript). I'm currently finishing a Computer Science degree at Brigham Young University and I work at [SmartyStreets](http://smartystreets.com/).

**Qs**. Why and when did you decide to start working with Go?

_Matthew:_ About a year and a half ago, our company was looking for a language that was more lightweight and easier to use and deploy than our then-current .NET stack. Just over a year ago we launched our first Go project, an address autocomplete service. It's highly concurrent and must respond quickly, but Go made it a cinch. Now we're moving everything to Go.

**Qs**. How should one go about learning the Go language? What material (books, eBooks, online tutorials, etc.) would you recommend?

_Matthew:_ Any and all of the official [Go documents](http://golang.org/doc/), namely A Tour of Go, Getting Started, How to Write Go Code, Effective Go, FAQ, and [package documentation](http://golang.org/pkg/); [Go By Example](https://gobyexample.com/) as long as you don't just copy-paste; the [Go blog](http://blog.golang.org/) and [Going Go](http://www.goinggo.net/) for those who want to dissect patterns, unusual situations, and interesting tid-bits; then for those with some experience with Go, check out the [GopherCon videos](https://www.youtube.com/playlist?list=PLE7tQUdRKcyb-k4TMNm2K59-sVlUJumw7). The Go community is also really supportive and helpful; it's quite likely your questions have already been answered and can be found by searching.

**Qs**. What best practices are most important for a new Go programmer to learn and understand?

_Matthew:_ Go adopts a unique programming paradigm, so be prepared to change the way you design and write code. For many (most?) situations, the Go standard library is sufficient. Learn and stick to the Go conventions, especially those related to documentation, packages and naming. Use the go tool chain. Write tests. [Use interfaces](http://mwholt.blogspot.in/2014/08/maximizing-use-of-interfaces-in-go.html). Take version numbers seriously. Document your code for [godoc](http://blog.golang.org/godoc-documenting-go-code).

That sounds like a lot, but after just a few days of reading and a few weeks of tinkering, you can be somewhat proficient.

**Qs**. What are the pros and cons of Go that are being discussed in the development community and what is your opinion on that?

_Matthew:_ Go is touted for its performance, simplicity, and stability---all rightly so. On the flip-side, usually "the lack of _____" is a common complaint.

I feel most tech controversies are passing fads, so I try to stay aloof. You'll see the typical gripes about generics, dependency management, and frameworks. My response is usually "Go has another way."

**Qs**. Most beginners in Go would like to contribute their time, skills and expertise to a project, but invariably are unaware of where and how to do so. Could you suggest some?

_Matthew:_ Start with small packages. Even if a package seems finished, it probably needs more tests. New packages are frequently announced on [/r/golang](http://www.reddit.com/r/golang/) and [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts). Watch #golang on Google+ and Twitter. Scour GitHub and [SourceGraph](https://sourcegraph.com/) for code that you feel you could learn from or contribute to. Just make sure to open an issue before spending lots of time on the big changes that may not be in harmony with the author's vision.

**Qs**. What has been your biggest challenge while working with Go?

_Matthew:_ Changing the way I think about writing software. It's amazing how certain habits become so hard to change. They're not necessarily bad, they just don't work so well in the Go world. But once I adjust, I'm typically very happy with it.

**Qs**. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Matthew:_ There's tons of web services and DevOps tools being written in Go. I also get quite a kick checking out some experimental libraries like Azul3D (a 3D game engine) and GoBot (for programming robots!) which can do some really cool stuff but aren't your typical Go use cases. GopherCon even talked about using Go with embedded systems and BTLE.

It looks like Go has an exciting future, with an ARM port being actively developed and better garbage collection well on the way. Other than a wider variety of applications and internal improvements, I don't foresee the language itself changing much in the next couple years.

**Qs**. How do you see the market for Go Programmers in the work place? What is the future for Go?

_Matthew:_ I get the feeling that knowing Go is a very marketable trait. Go is seeing some incredible adoption, not just by startups, but also established corporations like Google (obviously), Dropbox, and Node.js and Java developers. Many people I've met at conferences or Meetups who are new to the language are exploring it as an option for their company or are trying to convince their company to start using it. Generally, those results are positive.

It will probably take a while to reach critical mass, but I believe that Go is, in many ways, really going places.

**Qs**. Do you have any other suggestions for our readers?

_Matthew:_ Stay or get involved with the community -- it's awesome! Be supportive, patient, and contribute where you can.

_Thanks Matthew for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Matthew would be glad to answer._

---
layout: post
title:  "Interview: Gopher Abhijit Hiremagalur"
tags: [Abhijit Hiremagalur, GopherConIndia, golang]
---

![Abhijit Hiremagalur]({{ site.github_project_name }}/images/speakers/abhijit_hiremagalur.jpg)

Qs. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about your self?

_Abhijit:_ I live in San Francisco and help build [Cloud Foundry](http://cloudfoundry.org/index.html) at [Pivotal](http://www.pivotal.io/). I've worked on BOSH, Cloud Foundry's elastic runtime and most recently [Diego](http://youtu.be/1OkmVTFhfLY) – a Go re-write of Cloud Foundry's runtime.

I grew up in Bangalore and lived in Melbourne for 10 years after that. I moved to San Francisco to work for [Pivotal Labs](http://pivotallabs.com/) in 2008. Before Cloud Foundry I helped various Silicon Valley startups build their web applications in Ruby and JavaScript. And before that I wrote Java in [very good company](http://www.cogent.co/).

Whether its Ruby, Go or TDD I've learned nearly everything I know about technology from people I've pair-programmed with.

**Qs**. Why and when did you decide to start working with Go?

_Abhijit:_ I started working with Go last year. I've long been OO-infected so when I read Nathan Youngman's post [Go Object Oriented Design](http://nathany.com/good/) it immediately resonated with me. 

Primarily a Ruby developer, concurrency has been a weak area for me. Go appears to excel in this regard so learning more about concurrent programming through Go is attractive.

Finally, it helps that my employer Pivotal has placed a big bet on Go. Practically this means I've been surrounded by people who can help and get to learn Go as part of my day job.

**Qs**. How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend?

_Abhijit:_ Embed yourself in a community of people using Go and cast aside preconceptions. Finding a community served me well when I transitioned from Java to Ruby and has also been effective as I learn Go.

I've been fortunate to find a Go community within Pivotal and a bigger one close by via the wonderful [GoSF meetups](http://www.meetup.com/golangsf/).

Of the languages I've learned, I'd say Go is one of the best described by its documentation. There's something to be said for systematically (and sequentially) working through the docs at [golang.org](http://golang.org/). Specifically, I began with [Getting Started in Go](http://golang.org/doc/install), then gradually worked through [A Tour of Go](http://tour.golang.org/#1) and finally I'm making my way through [Effective Go](http://golang.org/doc/effective_go.html).

This said, I've read recently that [learning is most effective if it is spaced and varied](http://goo.gl/nZH3ZQ). The more effort it takes to learn a concept the more likely it will stick. The more variety there is to practice, the more versatile the acquired skill. I try to read as many different examples of Go as possible and pair program with many different developers so I can learn by contrasting these experiences.

**Qs**. What best practices are most important for a new Go programmer to learn and understand?

_Abhijit:_ This is a hard question for me to answer since I'm new to Go myself. So far, I've looked to other, more experienced members of the Go community to learn this. For instance [Andrew Gerrand's closing keynote](http://youtu.be/dKGmK_Z1Zl0) at GopherCon in Denver was very illuminating. It's a talk I'd highly recommend to other recent Gophers.

Some areas I'm trying learn intentionally are:

* Error handing – Go's approach is different from Ruby, JavaScript or Java. I've found error handling an area where my prior experience hasn't helped, in fact it's one where I'm trying to cast aside what "I know".
* Concurrency – Again, Go's approach is unfamiliar and it's tempting to dive straight in to using Go routines and channels. It isn't hard not to come by concurrent Go code–so some learning is happening organically. I expect I'll take a more deliberate approach once I'm more adept with other aspects of using Go.
* Testing – I think this is probably one of the most interesting parts of learning to write Go. Having TDD'd nearly all the code I've written professionally, I'm interested in exploring the affect testing Go has on design. Ruby is so malleable it's sometimes easy to build complex test suites, ignoring opportunities to improve the code under test. My sense is that Go, with its combination of static typing and implied interfaces, naturally leads to suites that describe the most important aspects of the code under test, gently improving its design along the way.

**Qs**. What are the pros and cons of Go that are being discussed in the development community and what is your opinion on that?

_Abhijit:_ To be honest, I don't participate in the main Go community as much I'd like to at this point. GoSF, GopherCon, and now GopherConIndia are attempts at changing this.

**Qs**. Most beginners in Go would like to contribute their time, skills and expertise to a project but invariably are unaware of where and how to do so. Could you suggest some?

_Abhijit:_ What's worked for me is to work at a company that sees Go's potential and is committed to using it on many projects. It's meant that opportunities to apply my time, skill and expertise to a Go project have been easy to come by. Also, these opportunities haven't come at the cost of the other things I'd like to do in my spare time like spending it with my family.

Outside of work, GoSF and [Golang Weekly](http://www.golangweekly.com/) have been good avenues for learning what the broader community is doing with Go.

Finally, my sense is that Go is an excellent general purpose language. Opportunities to use it might be closer than you realize. For instance, I help maintain [a project to provision OSX workstations with Chef](https://github.com/pivotal-sprout). Historically our tooling has been in Ruby and this dependency has long been a pain point, especially on brand new machines. It turns out Go is perfectly suited to addressing this so we're looking to gradually [replace some of our Ruby code with Go](https://github.com/hiremaga/sprout).

**Qs**. What has been your biggest challenge while working with Go?

_Abhijit:_ As an otherwise experienced developer, I think my biggest challenge has been a bit of an identity crisis. I've been doing one kind of programming (writing Ruby/Rails apps) for a few years now and have gotten very productive with and consequently very dependent on a particular toolset.

As I learn Go, I've had to learn a completely new set of tools and in some cases I've discovered there aren't analogs for tools I'm used to. For instance dependency management appears to be a contentious topic in the Go community and I've come to rely heavily on Bundler when writing Ruby. It's taken a mind shift to learn to live without this in Go.

Another example is my editor. When writing Ruby I've primarily used Rubymine. Learning Go has been a good reason to finally learn how to use Vim. One thing I miss being new to the language and editor is not having a utility belt of moves at my fingertips. When I read Ruby, I tend to refactor along the way, this is harder for me with Go. Fortunately I pair program with engineers who are more experienced in both Go and Vim so my hope is these challenges are temporary.

The hardest part has to been remind myself I'm a beginner again and to learn to embrace this.

**Qs**. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Abhijit:_ I've seen two classes of applications written in Go recently:

* Performance sensitive applications, especially distributed applications, that might have otherwise been written in C. Go is more approachable than C without sacrificing performance like some other languages. Cloud Foundry uses Go for some of its HTTP router/load balancer and also for low-level code that interfaces with the Linux kernel for containerization.
* Cross-platform command line applications. Go's cross-compiler and static binaries make distribution much easier for command line applications like Cloud Foundry's CLI or provisioning tools like Packer.

Over the next year or two, I expect we'll see Go shine in a much wider variety of areas. I think we'll see web applications that might've otherwise been written in Ruby, Python or Node.js, being written in Go. As this happens and as platforms continue to commoditize the running of applications, we might see even small teams realize direct economic benefits from writing their code in Go – [this demo app](http://blog.pivotal.io/cloud-foundry-pivotal/features/running-elasticsearch-and-kibana-using-go-on-pivotal-web-services-for-less-than-1-per-mo) written in Go fronts ElasticSearch and Kibana for a mere 80 cents a month! 

In addition to its runtime performance, Go places great emphasis on readability. In time I think we'll hear many accounts of Go codebases that have aged very gracefully.

**Qs**. How do you see the market for Go Programmers in the work place? What is the future for Go?

_Abhijit:_ I think it's an excellent time to be a professional Gopher. The Go community is vibrant and has attracted talented engineers from many other communities. This makes for smart co-workers and diverse, talented teams. Many companies, my employer included, have noticed Go's advantages and the interest it has piqued amongst engineers.

I think the future is bright for those of us seeking to make a living writing Go, much like it was for those of us who decided to write Ruby 5-6 years ago or Java before that.

**Qs**. Do you have any other suggestions for our readers?

_Abhijit:_ Start writing Go if you've been thinking about it and haven't. Find company at your local Go meetup. Go is fun! And profitable if you'd like it to be.

_Thanks Abhijit for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Abhijit would be glad to answer._
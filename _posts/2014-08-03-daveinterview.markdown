---
layout: post
title:  "Interview: GopherConIndia Speaker Dave Cheney"
tags: [Dave Cheney, GopherConIndia, golang]
---

![Dave Cheney]({{ site.github_project_name }}/assets/dave.cheney.jpg)

[Dave](https://twitter.com/davecheney) is an Australian speaker, blogger, and open source author. He co-organises the Sydney Go Users group and has been an [active contributor to the Go project](https://www.ohloh.net/p/go/contributors/2037377866637292) since February 2011. Here, in this brief interview, the GopherConIndia team talks to Dave Cheney.

Qs. Why and when did you decide to start working with Go?

_Dave:_ I was first exposed to Go when I saw the [presentation by Rob Pike in 2009](http://youtu.be/rKnDgT73v8s). I was impressed by the language's goals of simplicity and pragmatism which were clear in that first presentation.

I rediscovered Go in 2010 with [this presentation](http://youtu.be/5kj5ApnhPAE) and soon after had an opportunity to use it for a project I was working on at the time. From that point I was hooked, spending as much free time as I could using the language, on the IRC channel, contributing to the mailing list and writing about Go on [my blog](http://dave.cheney.net/category/golang).

I became a contributor in February 2011 and a committer in April 2012.

**Qs**. What are you currently working on?

_Dave:_ By day I work on [Juju](https://juju.ubuntu.com/), Canonical's first public Go project.

Work at Canonical tends to align to our six monthly release cycle, and my major contribution for the last cycle, aside from my day to day roles as a Juju programmer, was to get Juju up and running on the [IBM PowerPC platform using gccgo](http://go-talks.appspot.com/github.com/davecheney/gosyd/gccgo.slide#1).

Last year I collaborated with Aram Hăvărneanu to port Go to Solaris, which shipped in April with the 1.3 release.

Outside my day job, my main focus is the port of Go to ARM. In addition, I try to help out by reviewing commits and triaging the bug queue. I also maintain quite a few of the dashboard builders which power Go's [home brew continuous integration system](http://build.golang.org/).

With Andrew Gerrand, I run the [Sydney Go users meetup group](http://www.meetup.com/golang-syd/), which doesn't meet as frequently as it should due to our travel schedules.

I'm off to Canberra in a few weeks to help them start a regular [Go meetup](https://plus.google.com/u/0/communities/114036877112593565975).

**Qs**. Where do you see Go in the foreseeable future?

_Dave:_ Go started as a language to write large software programs, or more correctly, a language where a large number of programmers could collaborate on a software project; at the time this meant the large distributed projects inside Google.

Since the 1.0 release in 2012, in addition to solidifying its usefulness on the server side, some other interesting use cases have emerged:

* Go appears to be attractive to the scientific and bioinformatic communities, displacing their use of scipy/numpy. Scientists appear to be a pragmatic bunch and I like to think that Go is a language that helps them get stuff done.
* The static binary story is very refreshing, considering the previous decade's focus on managed runtimes and dynamic languages, both of which have a complex and unwieldy distribution story. This appears to be very attractive to system administrators and others who identify with the 'devops' moniker.
* In this space we see projects like Docker and Hashicorp's stable of tools like Consul, Serf, and the recently released Terraform, leading the charge.
* One of the unexpected successes of Go is its applicability for programmers producing cross platform CLI tools, previously a domain of C and operating system distributions.
* I personally would like to see less of a reliance on cgo, and hope that over time the goal of "Pure Go" becomes an aspirational catch cry just as it did with Java (does anyone remember type 2 JDBC drivers ? yuk).
* Another recent surprise is the experimental support for Go on Android that David Crawshaw is working on for the 1.4 release.
* Lastly, I think the potential of Go as a language to teach the art and the profession of programming is enormous.

**Qs**. How should one go about acquiring knowledge and skills in Go? What's the best approach?

_Dave:_ I am told that people learn in a variety of ways, so I can only relate my own experiences.

I'm an experiential learner, and tend to show little interest for learning without a specific goal in mind. That said, when I do have a goal, I tend to engross myself in it, and that often leads to many diversions into related fields.

Although I've programmed in many languages throughout my life, I don't consider myself a polyglot, preferring instead to focus on one language at a time.

I think this is the best way to truly understand Go and learn to work within its strengths, and weaknesses, rather than being distracted by the continuous choice of an array of languages.

In summary, my advice would be:

* Do the [Go tour](http://tour.golang.org/#1) and read [Effective Go](http://golang.org/doc/effective_go.html) (especially if you have a background in another language).
* Have a project in mind that you want to use Go for.
* Stick with it, in my experience, having mentored several dozen programmers joining the Juju team at Canonical, you'll be productive in the language in a matter of weeks.

**Qs**. Which areas in Go should a would-be Go programmer concentrate on, in your opinion?

_Dave:_ This may be a little controversial, but my advice is to avoid, at least initially, the concurrent aspects of Go; channels and goroutines.

This may sound strange as these are one of the headline features of the language. This is not to say that the concurrent aspects of the language are too hard for new programmers to learn; they are not. However they are easy to overuse, and Go is a language which responds well to moderation.

If you were unfortunate enough to use the go.crypto/ssh library before Han-Wen Nienhuys and Jonathan Pittman cleaned up my egregious overuse of channels, you'll know what I mean.

Some concrete advice might be:

* Understand the power of interfaces, they are one of Go's great gifts, potentially more important than channels or goroutines.
* If you are coming from another language, be it a dynamic language like Python or Ruby, or a compiled language like Java or C#, leave your OO baggage at the door. Go is an object oriented language, but it is not a class based language and does not support inheritance.
* By removing inheritance from the language, the opportunity to practice the mantra of composition over inheritance is made manifest, and fighting it will only lead to frustration.
* If you're waiting for generic types and functions to be added to the language, my advice is to stop holding your breath and learn to love the language we have today.
* With the 3rd point release done and the 4th on the way in a few months the possibilities of a new language feature or syntax tweak are remote. The focus from here on out is tools, reliability, and performance.

**Qs**. How excited are you about GopherConIndia 2015?

_Dave:_ Over the last few years I've had the opportunity to visit and speak to Gophers in several countries. I've decided to make it my goal to visit each of the Go communities in the Asia Pacific region.

I am delighted to be invited to speak at GopherConIndia in 2015.

**Qs**. Do you have any parting words for our readers? Anything you would like to share with them?

_Dave:_ The Go community is clearly growing, but remains fractured by the tyrannies of distance and the barriers of language.

Conferences like GopherConIndia 2015 are an excellent opportunity to meet other Go enthusiasts, but there are many other ways that you can contribute to the growth of the community.

One way is if you are interested in Go, dabbling with it on the side, or using it professionally, consider visiting your local Go meetup if there is one, and consider speaking if that is something you are comfortable with.

If you have the opportunity to travel, and have the ability to, make the effort to visit the Go community at your destination.

Visiting user groups is a way to demonstrate to people who are considering the language that there exists a wider community of users, supporters, and employers, than are visible inside that room.

This really is a case where the whole of the Go community is greater than the sum of its constituent parts.

_Thanks Dave for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Dave would be glad to answer._

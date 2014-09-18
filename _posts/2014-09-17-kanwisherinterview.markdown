---
layout: post
title:  "Interview: GopherConIndia Speaker Matthew Campbell"
tags: [Matthew Campbell, GopherConIndia, golang]
---

![Matthew Campbell]({{ site.github_project_name }}/images/speakers/matthew.campbell.png)

Qs. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about your self?

_Matthew:_ Yeah I think there is a lot of fashion in programming, in the sense that programmers like new shinny toys. Every time a new programming language comes out everyone jumps to recreate the same apps (i.e. a blog). With new environments lets make new apps. I have been mostly working on realtime messaging apps and found Go to be superior for this application style.

**Qs**. Why and when did you decide to start working with Go?

_Matthew:_ 2 1/2 years ago I was bootstrapping a startup Errplane (pivoted to InfluxDB) which was largely scala backend, however we didn't like the complexity of scala.

**Qs**. How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend?

_Matthew:_ For beginners clearly [http://play.golang.org/](http://play.golang.org/) is the best. However once you get your feet wet, I suggest looking at the source code of one of the two really big and good pieces of Go backends. [ETCD](https://github.com/coreos/etcd) and [NSQ](https://github.com/bitly/nsq).

**Qs**. What best practices are most important for a new Go programmer to learn and understand?

_Matthew:_ [Go Race](http://blog.golang.org/race-detector), using automated race condition checker has saved our production environment a number of times and can't recommend it enough.

**Qs**. What are the pros and cons of Go that are being discussed in the development community and what is your opinion on that?

_Matthew:_ Pros: Easy to learn. Clean language and good base standard library for building most applications. Very fast.

Cons: Community still small, however this can be good if you want to make a name for your self. Garbage collector still needs work.

**Qs**. Most beginners in Go would like to contribute their time, skills and expertise to a project but invariably are unaware of where and how to do so. Could you suggest some?

_Matthew:_ Yeah I think the best way to start out is to make Go bindings or clients for existing servers. Like making simple wrappers for useful c libraries on unix is a quick way to get people interested in your project. Once you get a bit more experienced, try writing a protocol wrapper for something like memcache or redis, or hopefully a protocol that hasn't been covered by Go yet.

**Qs**. What has been your biggest challenge while working with Go?

_Matthew:_ Not having thread local variables. So making things like transparent transactions into your database library is quite difficult because your always passing hte context around.

**Qs**. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Matthew:_ Currently focused on building instant messaging servers. I can see Go to be a good future for game servers for mobile devices, looking to do more in this space next year.

**Qs**. How do you see the market for Go Programmers in the work place? What is the future for Go?

_Matthew:_ Market is great, we are still having trouble hiring good developers. Future is good. Go is swallowing up the high performance apps that Python, Ruby and Javascript are having trouble doing.

**Qs**. How excited are you about GopherConIndia 2015?

_Matthew:_ Incredibly excited. Really good to see a conference of this caliber in the region. I'm currently located in Bangkok and its quite good for the community here to come out to, also. I'm hoping we get more modern programming conferences in the area. 

**Qs**. Do you have any other suggestions for our readers?

_Matthew:_ Try building realtime communications into all your future applications, its the next ajax ;)

_Thanks Matthew for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Matthew would be glad to answer._

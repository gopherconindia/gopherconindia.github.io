---
layout: post
title:  "Interview: Gopher Ben Johnson"
tags: [Ben Johnson, GopherConIndia, golang]
---

![Ben Johnson]({{ site.github_project_name }}/images/speakers/benbjohnson.jpg)

**Qs**. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about your self?

_Ben:_ I'm an open source software developer working on database and distributed systems in Go. I'm the author of [Bolt](https://godoc.org/github.com/boltdb/bolt), [go-raft](https://github.com/goraft/raft), and a handful of other Go libraries. I also enjoy working in data visualization and I run the [Secret Lives of Data](http://thesecretlivesofdata.com/) project.

**Qs**. Why and when did you decide to start working with Go?

_Ben:_ I started writing Go in early 2013 on the recommendation of [Cory LaNou](https://twitter.com/corylanou) and [Levi Cook](https://twitter.com/levicook). I had written a high performance behavioral analytics database in C and wanted to move it to a language that was more maintainable.

**Qs**. How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend?

_Ben:_ I found [Effective Go](http://golang.org/doc/effective_go.html) and the language reference to be very accessible and quick to read. They gave me a good foundation for the language constructs. To learn idiomatic Go, I would suggest reading through the Go standard library.

**Qs**. What best practices are most important for a new Go programmer to learn and understand?

_Ben:_ Don't write Go in the style of another language. I originally tried to write Go in the same way I wrote Ruby or Java programs and it was painful. Usually if your Go solution is complex then you're approaching it wrong. I'd suggest finding more experienced Gophers that can help review code snippets and give feedback. That's how I've learned the most.

**Qs**. What are the pros and cons of Go that are being discussed in the development community and what is your opinion on that?

_Ben:_ I don't find the pro/con discussions very useful. Everyone's pro/con list is going to be different depending on their goals. Some people want to be expressive or minimize lines of code or have complex type systems. Go isn't for those people. I value simplicity, stability, and ease of debugging so Go fits perfectly for me. It's all a matter of taste.

**Qs**. Most beginners in Go would like to contribute their time, skills and expertise to a project but invariably are unaware of where and how to do so. Could you suggest some?

_Ben:_ I like keeping project scope to a bare minimum so I don't suggest developers seek out existing projects to contribute to. I find that porting libraries from other languages to Go is incredibly educational. It allows you to break apart someone else's code and glue it back together in a way that fits with the Go language. For example, I ported LMDB to what became Bolt and learned about database internals in the process.

**Qs**. What has been your biggest challenge while working with Go?

_Ben:_ Getting a sense of "idiomatic Go" is the hardest part about Go. After writing enough Go you really get a sense of when code doesn't feel right.

**Qs**. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Ben:_ Go mainly seems to be use in data processing and API servers. It's still painful to write web applications using Go but I think the ecosystem just needs better tools.

**Qs**. How do you see the market for Go Programmers in the work place? What is the future for Go?

_Ben:_ The market seems desperate for more Go programmers. There's huge demand and I only see the demand increasing in the near future.

**Qs**. Do you have any other suggestions for our readers?

_Ben:_ Keep coding!

_Thanks Ben for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Ben would be glad to answer._

---
layout: post
title:  "Interview: Gopher Fatih Arslan"
tags: [Fatih Arslan, GopherConIndia, golang]
---

![Fatih Arslan]({{ site.github_project_name }}/images/speakers/fatih_arslan_photo.jpg)

Q. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about yourself?

_Fatih:_ I'm a software developer working at [Koding](https://koding.com/Home) living in Ankara, Turkey and San Francisco, USA. I love developing software on Unix/Linux, contributing back to open source projects, using Vim and brewing Coffee! I'm the author of [vim-go](https://github.com/fatih/vim-go), currently a vim plugin for Go. I've also created several popular Go packages like structs, set, pool, color and many other which can be seen under my [Github profile](https://github.com/fatih). I like writing and sharing my experiences under my [blog](http://arslan.io/).

Q. Why and when did you decide to start working with Go?

_Fatih:_ It was late 2012. Previously I was dealing with a large legacy embedded C CodeBase that made me feel sad every day. After switching my job I saw that in the new company coding was heavily in Go. I had previously heard a lot about Go and here I had this opportunity to work immediately with Go. Usually I would have chosen Python, but somehow I liked the Go language very much. Go has the best of Python and C and I believe that I have found my dream language. Thanks to Koding I was living and breathing Go code.

Q. What are you currently working on?

_Fatih:_ By day, I work at Koding on various backend systems. We provide a virtual machine to every user and an advanced terminal with it (a real one with root access). All this is done at the backend with Go. The various systems are connected with our internal RPC library, which is user friendly and a very refreshing one. We already have open sourced some of our work and can be found under: [https://github.com/koding](https://github.com/koding). In my free time I'm mostly on #go-nuts and Github. I have several open source projects, which I maintain and discuss with the community about the changes, improvements and new features. The most popular one is vim-go, the defacto vim plugin for Go. My latest addition is the package [structs](https://github.com/fatih/structs) a tool to deal easily with struct types. However, I also spend time on various other open source projects.

Q. How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend?

_Fatih:_ I believe one can learn fast by reading/writing a lot of code. And without writing a single line of code, it's not even possible to learn something even if you spend months on reading stuff. Therefore, one must read a lot of, and write a lot of Go. For me these three links are sufficient to learn Go:

* [http://tour.golang.org/#1](http://tour.golang.org/#1)
* [https://gobyexample.com/](https://gobyexample.com/)
* [http://golang.org/doc/effective_go.html](http://golang.org/doc/effective_go.html)

[http://godoc.org/](http://godoc.org/) is one my favourites. I probably spend a lot of time here, to search for third party packages, jump from one package to another one and read them.

Q. What best practices are most important for a new Go programmer to learn and understand?

_Fatih:_ Don't try to emulate techniques from other programming languages. It's just not worth it. For example, there is no generics in Go, but people fight with the language and curse at every situation. Get over it. 

Know your tools. Go tools are very powerful yet simple by nature. It's one of the reasons why coding with editors is fun. `Gofmt` is one of the best, yet simple tool out there. Once used, you get addicted to it. 

Having said that, I wrote a very lengthy and popular [blog post](http://arslan.io/ten-useful-techniques-in-go) that describes some best practices.

Q. What has been your biggest challenge while working with Go?

_Fatih:_ It was interfaces at the beginning which was a new thing for me. It's not a big deal, but observing how the standard library was using interfaces (`http.HandlerFunc` type is one of those) was quite refreshing. Now I believe it's one of the best features of the language (even better than concurrency primitives).

Q. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Fatih:_ Mostly servers, RPC systems, CLI apps, DB abstractions and many other similar things. It plays nice with deployment processes and is a plus for distributed systems, in my opinion. We can see this with companies like CoreOS or HashiCorp. They are developing completely new (or advanced) solutions to current problems.

It's going to replace a lot of backend services with time. I've seen that first hand in Koding where we re-wrote most of the parts from Node.js to Go. This is not going to end, there are still hundreds of thousands of apps lying out there, waiting to be replaced with Go.

Q. How do you see the market for Go Programmers in the work place? What is he future for Go?

_Fatih:_ It's gaining traction. I think it's going to be better even more with time. 

Q. Do you have any other suggestions for our readers?

_Fatih:_ Love the simplicity of Go. Feel how the whole community is approaching Go with their own packages. The key here is simplicity and getting things done. 

_Thanks Fatih for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Fatih would be glad to answer._

---
layout: post
title:  "Interview: Gopher Derek Collison"
tags: [Derek Collison, GopherConIndia, golang]
---

![Derek Collison]({{ site.github_project_name }}/images/speakers/derek-collison.jpg)

Qs. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about your self?

_Derek:_ Sure, I am Derek Collison, founder and CEO of [Apcera](https://www.apcera.com/). Based in San Francisco, Apcera is a managed service technology company whose products optimize the deployment, orchestration and governance of a diverse set of workloads, on premise or on a public cloud provider. Prior to Apcera, I was a CTO at VMware where I created and architected the Cloud Foundry PaaS system. Prior to that, I was a Technical Director at Google for 5 years during which I co-designed the AJAX APIs (now part of the developers API group), the Javascript CDN initiative, and worked on the Gmail author photos. Before Google, I was SVP and Chief Architect at TIBCO, where I designed and architected their high-performance messaging systems.

Note: It was announced today that [Ericsson has purchased a majority stake in Apcera](https://www.apcera.com/press/2014-09-22-2/).

**Qs**. Why and when did you decide to start working with Go?

_Derek:_ When I started Apcera, I was considering both Go and Node.js languages. For Cloud Foundry, I'd selected Ruby for its speed of development, but it presented challenges in production. I liked Go for two main reasons: compiled static binaries and real stacks. In a production rollout, the single-binary-per-server component was very appealing, and the stacks being real and relieving pressure from the GC (Garbage Collection System) was something I had wanted since I abandoned Java many years ago. I always liked the idea of a GC in a modern language, but there were simply not enough good choices to relieve pressure from the GC system. Go had a simple and elegant solution for this. It's a great language in my opinion, and I predicted its rise as such in a [tweet](https://twitter.com/derekcollison/status/245522124666716160) over 2 years ago.

![Prediction]({{ site.github_project_name }}/images/predict.jpg)

There was also a good [article in Wired](http://www.wired.com/2013/03/tsuru/) on Go's rising popularity.

**Qs**. How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend?

_Derek:_ [tour.golang.org](http://tour.golang.org/#1) is always a good place to start. I also like this eBook, [https://leanpub.com/GoNotebook](https://leanpub.com/GoNotebook). [Effective Go](http://golang.org/doc/effective_go.html) is also a great source of information.

**Qs**. What best practices are most important for a new Go programmer to learn and understand?

_Derek:_ While Go is a simple language, mastering the basics is key. I recommend spending extra time on Channels and Interfaces, and gaining a solid understanding of Slices and how they are backed and work. 

**Qs**. What are the pros and cons of Go that are being discussed in the development community and what is your opinion on that?

_Derek:_ In my opinion, most of the discussions are positive. I think the pros heavily outweigh the cons. I really enjoy the language, and I have programmed in many, many different languages throughout my career. On the cons side, I think two stand out: generics and versioned dependencies. I don't miss or need generics, but I know others are pushing hard for this feature to be introduced to the language. I agree with versioned dependencies; the language should add some decorations to the `import` statement to declare exactly which version of a package you want. The language creators argue that you should simply vendor your package dependencies; while I agree with that statement, at least to some degree, I think adding a decorator to help the middle ground is a good idea worth considering. There are also some third-party solutions that are gaining traction like [Godeps](https://github.com/tools/godep/blob/master/Readme.md).

**Qs**. Most beginners in Go would like to contribute their time, skills and expertise to a project but invariably are unaware of where and how to do so. Could you suggest some?

_Derek:_ Well of course I may be a bit biased with suggestions to contribute to the [NATS](http://nats.io/) project whose [server](https://github.com/apcera/gnatsd) and [client](https://github.com/apcera/nats) are written in Go. There is also a great link that shows the popular projects on github, [https://github.com/trending?l=go](https://github.com/trending?l=go). Docker of course is great, as well as [CoreOS](https://coreos.com/) and [etcd](https://coreos.com/using-coreos/etcd/), along with some of [Hashicorp's](https://www.hashicorp.com/) projects, which are written in Go.

**Qs**. What has been your biggest challenge while working with Go?

_Derek:_ That is a good question, and I really don't have any. If anything, I would say some of the idiosyncrasies with channels, like panicking on a nil channel while releasing all readers on a closed one, etc. The language is simple yet powerful, and the tooling is great -- please take advantage of it!

**Qs**. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Derek:_ These days, quite a bit of infrastructure, orchestration and platform automation, and tooling applications are written in Go. I expect this trend to continue. I think you may also see Go move onto ARM-based devices and take a place in the Internet of Things, as well as in some web and mobile application services tiers.

**Qs**. How do you see the market for Go Programmers in the work place? What is the future for Go?

_Derek:_ It is still early, but each month more Go Programmers are coming online. I expect Go to gain quite a bit in popularity in the next few years.

**Qs**. Do you have any other suggestions for our readers?

_Derek:_ Really play with the language and tooling. The tooling is one of the best I have ever seen, and the standard library allows you to do quite a bit before needing to reach out to third parties. And above all, have fun, it's fun to program in Go. 

_Thanks Derek for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Derek would be glad to answer._
---
layout: post
title:  "Interview: Gopher Baron Schwartz"
tags: [Baron Schwartz, GopherConIndia, golang]
---

![Baron Schwartz]({{ site.github_project_name }}/images/speakers/baron.jpg)

Qs. Welcome and thanks for taking out time to share your thoughts. For the benefit of the readers, could you tell us something about your self?

_Baron:_ I'm best known as a MySQL performance expert, though I think my gluten-free waffles should be world-famous too. I am an author, coder, entrepreneur, and CrossFitter. I helped build Percona into a central presence in the MySQL community, then founded VividCortex to change the way people manage database performance.

**Qs**. Why and when did you decide to start working with Go?

_Baron:_ I have a lot of experience working in adverse conditions, dealing with software that needs to be installed fast, for example in an emergency consulting engagement. I learned that self-contained software is by far the best. When I founded VividCortex I knew that would be crucial for our agent programs. Ideally, they'd be statically compiled binaries in a language with efficient support for concurrency and high-performance computation. Realistically speaking, the options were only C, C++, and Go. I chose Go after experimenting with it for a month or so, and have never regretted it.

**Qs**. How should one go about learning the Go language? What material (books, eBooks, online tutorials etc.) would you recommend?

_Baron:_ Take something you'd usually write in another language and force yourself to do it in Go. This is the way I've always learned things: by eliminating any temptation to go back to the comfort zone. For example, I learned to type on a Dvorak layout by just changing my keyboard layout. I was writing a thesis at the time, so it was hard. But I learned Dvorak.

My previous go-to language was Perl. I suffered at first. I wanted to drop back to Perl for programs that could deal with word-oriented lines of text fluidly. I soon overcame the initial learning curve and started to build some proficiency, and I never looked back. The Go website made me a little intimidated, because it said something about how fast a programmer could learn Go. I think it said you could be productive in hours and expert in days. My learning curve was more like months and weeks. I suspect this is more realistic for most people.

I'd recommend the Go documentation, blog, tour, mailing list, and some of the community blogs as well, especially as you get more advanced. Dave Cheney, Jason Moiron, and Richard Crowley come to mind as insightful bloggers. The Gophercon videos are also great. And we share quite a bit about Go and other technical topics on our own [blog](https://vividcortex.com/blog/).

**Qs**. What best practices are most important for a new Go programmer to learn and understand?

_Baron:_ Do not complain about something you think is missing, wrong, or stupid. You are ignorant and new to the language, no matter how much of an expert you are on programming in general. Humble yourself, bite your tongue, and study. You will realize eventually that what you first thought was worth criticizing was actually a deep work of genius. I've seen a lot of criticism of Go's "shortcomings" from people who are true experts in many languages other than Go. I can't recall similar criticism from someone who's worked with Go at a very deep level for a year or two.

Take the time to work with, and understand, the conventions in Go. For example, use `gofmt` as-is, no matter what you think of tabs versus spaces. Learn the standard library. Learn about how packages and import paths work. Go is not a TMTOWTDI language. There is a Go way. Learn how Go does things and do it that way. You'll appreciate the benefits soon enough.

Learn about stack versus heap, and recognize that Go treats the stack differently from other languages. You'll work with the strengths of the languages more easily if you don't try to do C-like things (allocation on the heap, pointers to everything) and treat the stack and pass-by-value as cheap operations for most purposes. I've seen big performance improvements just by simplifying heap usage and replacing it with stack usage. Go is designed to do the right thing for programs that look very straightforward, so if you feel like you're doing something clever, it's potentially working against both you and the runtime.

**Qs**. What are the pros and cons of Go that are being discussed in the development community and what is your opinion on that?

_Baron:_ One of the areas where I found a lot of debate was in package versioning. The language and tools themselves don't enforce versions of imported packages. The two ways to deal with that are vendoring dependencies into your source code, and some kind of manifest file for managing non-vendored dependencies. I recognized early on from my open source experience that the debate over which is best would not be resolved, so VividCortex built and released [github.com/VividCortex/johnny-deps](https://github.com/VividCortex/johnny-deps). My opinion on things like that is that it's best to participate in debates and discussions when you have something truly important and unique to contribute; otherwise just focus on getting things done.

**Qs**. Most beginners in Go would like to contribute their time, skills and expertise to a project but invariably are unaware of where and how to do so. Could you suggest some?

_Baron:_ VividCortex and a few others have worked hard on a tutorial website for Go's database/sql interface. It's at [go-database-sql.org](http://go-database-sql.org/) and we always appreciate contributions!

**Qs**. What has been your biggest challenge while working with Go?

_Baron:_ There are a few areas where Go does allow things to be done more than one way. These include multiple declaration syntaxes and named return variables. This has caused a few subtle bugs for us at Vividcortex. We now try to avoid these. There are also a few minor things that are expected from a young project -- performance issues with garbage collection, minor bugs on various platforms, etc. Really, it's a very stable language, libraries, and runtime in comparison even with very mature languages. I've been very happy with Go.

**Qs**. What types of applications are currently being developed in Go and what changes do you foresee over the next year or two?

_Baron:_ Server programs. I do think we'll see toolkits and libraries for desktop application development. Maybe even mobile. Probably never web; the web is likely moving more and more to thin-client single-page apps (and native apps) talking to APIs. Go shines in APIs. 

**Qs**. How do you see the market for Go Programmers in the work place? What is the future for Go?

_Baron:_ Go programmers are very much in demand, especially those who really understand things like interfaces and don't impose "patterns" from other programming languages. This will only increase. Go is set to become the Java of the future, in my opinion. It's spreading like wildfire.

**Qs**. Do you have any other suggestions for our readers?

_Baron:_ I'd encourage everyone to attend and speak at conferences, and write blogs and books to share your knowledge. Even if it's unfamiliar to you, sharing what you know with others can be one of the most powerful things you do with your career.

_Thanks Baron for sharing your views with us. I am confident that your insights would help all the would-be Go programmers. In case you have any queries and/or questions, kindly post your questions here (as comments to this blog post) and Baron would be glad to answer._
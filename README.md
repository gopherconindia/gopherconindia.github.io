# GopherCon India

Official website for **GopherCon India**, hosted on [GitHub Pages](https://gopherconindia.org/) (`gopherconindia/gopherconindia.github.io`).

## Site layout

- **`index.html`** - GopherCon India 2026 landing page (static HTML, Tailwind CSS via CDN).
- **Root Jekyll pages** - Legacy content under `_layouts/`, `_includes/`, and top-level section folders (optional; used if you run Jekyll).

## Local development

### 2026 homepage (static)

Open `index.html` in a browser, or serve the repo root with any static file server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

### Archive sites (Jekyll)

1. Install Ruby and Bundler.
2. Install dependencies:

```bash
bundle install
```

3. Run Jekyll:

```bash
bundle exec jekyll serve
```

## Contributing

1. Fork [gopherconindia.github.io](https://github.com/gopherconindia/gopherconindia.github.io/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Open a new Pull Request

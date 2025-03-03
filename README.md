# Learn Holochain
A guide for self directed study through the [open holochain curriculum](https://github.com/CodeWithJV/open-holochain-curriculum)

📖 **[Read the book online](https://codewithjv.github.io/learn-holochain/)**

## Deployment

This book is automatically built and deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployed version can be accessed at:

https://codewithjv.github.io/learn-holochain/

The deployment is handled by a GitHub Actions workflow which:
1. Installs mdBook
2. Builds the book
3. Deploys the built files to GitHub Pages

## Building Locally

This book is built using [mdBook](https://github.com/rust-lang/mdBook), a command-line tool for creating books with Markdown.

### Prerequisites

- [Rust and Cargo](https://www.rust-lang.org/tools/install)

### Build Instructions

1. Build the book:
   ```
   ./build.sh
   ```

2. The built book will be available in the `book` directory. Open `book/index.html` in your browser to view it.

### Development

For live editing, you can:

1. Install mdBook globally: `cargo install mdbook`
2. Use the watch server: `mdbook serve --open`

This will launch a local server and open the book in your default web browser. Any changes you make to the markdown files will automatically trigger a rebuild.

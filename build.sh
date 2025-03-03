#!/bin/bash

echo "Building the Holochain book..."

# Check if cargo is installed
if ! command -v cargo &> /dev/null; then
    echo "Cargo is not installed. Please install Rust and Cargo from https://rustup.rs/"
    exit 1
fi

# Check if mdbook is available in PATH or user's cargo bin
if command -v mdbook &> /dev/null; then
    MDBOOK_CMD="mdbook"
elif [ -f "$HOME/.cargo/bin/mdbook" ]; then
    MDBOOK_CMD="$HOME/.cargo/bin/mdbook"
else
    echo "Installing mdbook..."
    cargo install mdbook
    MDBOOK_CMD="$HOME/.cargo/bin/mdbook"
fi

# Build the book with mdbook
echo "Running mdbook build..."
$MDBOOK_CMD build

echo "Book built successfully! You can open it at:"
echo "learn-holochain/book/index.html"
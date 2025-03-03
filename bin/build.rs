use std::path::Path;
use std::process;

fn main() {
    let book_dir = Path::new(".");
    
    // Load the MDBook from the current directory
    let mdbook = mdbook::MDBook::load(book_dir)
        .unwrap_or_else(|e| {
            eprintln!("Error loading book: {}", e);
            process::exit(1);
        });

    // Build the book
    if let Err(e) = mdbook.build() {
        eprintln!("Error building book: {}", e);
        process::exit(1);
    }

    println!("Book built successfully!");
}
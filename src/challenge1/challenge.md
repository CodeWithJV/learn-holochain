# Challenge: Joke App

## Overview

Your challenge is to build a simple joke application that implements basic CRUD operations (Create, Read, Update, Delete) using Holochain's Actions and Entries model.

## Key Learning Goals

Through this challenge, you'll gain practical experience with:
- Working with Entry and Action types
- Understanding how data is referenced through hashes
- Implementing basic CRUD operations
- Experiencing Holochain's immutable history model

## Getting Started

The starter code and detailed instructions are available in the challenge repository:

[Joke App Challenge Repository](https://github.com/CodeWithJV/holochain-challenge-1)

You can view the difference between the starter code and the sample solution [here](https://github.com/CodeWithJV/holochain-challenge-1/compare/main...sample-solution).

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/CodeWithJV/holochain-challenge-1
cd holochain-challenge-1

# Enter the nix shell for development
nix develop
```

### Tips

- Take time to understand the structure of the project before diving into implementation
- Pay attention to how ActionHash and EntryHash are used differently
- Test your implementation at each step using the provided test suite
- Remember that in Holochain, entries are never truly deleted - they're marked as deleted

## Requirements

1. **Create a Joke Entry Type**
   - Define a `Joke` entry type with fields for content and optional metadata
   - Implement a function to create new jokes

2. **Implement Read Operations**
   - Create a function to get a joke by its ActionHash
   - Add a function to get a joke by its EntryHash
   - Observe the differences between these two approaches

3. **Update Functionality**
   - Implement a function to update an existing joke
   - Ensure only the original author can update their jokes
   - Understand how updates create new records while preserving history

4. **Delete Operation**
   - Create a function to delete jokes
   - Understand that deletion in Holochain marks entries as deleted rather than removing them
# Challenge: Blog App

## Overview

Your challenge is to build a blog application that implements relationships between different types of data using Holochain's Links and Collections features.

## Key Learning Goals

Through this challenge, you'll gain practical experience with:
- Creating and managing links between entries
- Using Paths to create collections
- Retrieving data through relationship queries
- Designing a relational data structure in a distributed environment

## Getting Started

The starter code and detailed instructions are available in the challenge repository:

[Blog App Challenge Repository](https://github.com/CodeWithJV/holochain-challenge-2)

You can view the difference between the starter code and the sample solution [here](https://github.com/CodeWithJV/holochain-challenge-2/compare/main...sample-solution).

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/CodeWithJV/holochain-challenge-2
cd holochain-challenge-2

# Enter the nix shell for development
nix develop
```

### Tips

- Pay attention to how links are established between different entry types
- Remember that Paths are a powerful way to create predictable locations in the DHT
- When updating entries, make sure to update any relevant links as well
- Test your link queries thoroughly to ensure they return the expected data
- Use the tag field in links to store additional metadata when needed

## Requirements

1. **Create Blog Post Entry Types**
   - Define a `Post` entry type with title, content, and timestamp
   - Implement functions to create and retrieve posts

2. **Implement Comments**
   - Create a `Comment` entry type
   - Link comments to their parent post
   - Create functions to add and retrieve comments for a post

3. **Author Relationships**
   - Link posts to their authors (agents)
   - Create functions to get all posts by a specific author

4. **Collections with Paths**
   - Create a collection of all posts using a Path
   - Implement a function to get all posts in the system
   - Add a function to get the latest posts

5. **Updating Linked Content**
   - Allow updating posts while maintaining comment links
   - Ensure updates preserve the relationship structure
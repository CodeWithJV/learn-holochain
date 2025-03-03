# Actions and Entries

Module 1 introduces the fundamental data model of Holochain applications. In Holochain, all data is organized around two core concepts: Entries (the nouns) and Actions (the verbs).

## What You'll Learn

- **Entries**: The basic units of data in Holochain
- **Actions**: Operations that create or modify entries
- **Records**: Combined Actions and Entries that form the immutable history
- **CRUD Operations**: How to create, read, update, and delete data
- **Hash Types**: Understanding ActionHash vs EntryHash for data referencing

## The Joke App

In this module, you'll build a simple joke application that demonstrates core Holochain data operations. You'll implement:

- Creating new jokes
- Reading existing jokes
- Updating joke content
- Deleting jokes
- Understanding how the DHT preserves history even after updates

This foundational knowledge forms the basis for all Holochain development, as you'll learn how data flows from an agent's source chain to the distributed hash table (DHT).

The challenge is designed to give you hands-on experience with Holochain's agent-centric data model, which differs significantly from both traditional databases and other distributed systems like blockchains.
# Core Concepts

To effectively develop applications with Holochain, you need to understand several fundamental concepts. This chapter explains the key building blocks that make up the Holochain architecture.

## The Agent-Centric Model

At the heart of Holochain is its **agent-centric** paradigm, which differs significantly from both centralized systems and blockchain technologies.

### Source Chains

Each agent (user or device) in a Holochain network maintains their own **source chain**. This is a private, local, append-only log that records all the agent's actions and data entries. 

Key characteristics:
- Cryptographically signed by the agent's private key
- Tamper-evident (any changes would break cryptographic verification)
- Completely controlled by the agent
- Follows specific validation rules defined by the application

### The Author-Validation Pattern

In Holochain, data integrity is maintained through a pattern called **author-validation**:

1. **Author**: The agent creates and signs entries to their source chain
2. **Validation**: The network validates these entries according to shared rules
3. **Publication**: Valid entries are published to the DHT for other agents to access

This approach ensures that agents can only add valid data to the network, without requiring global consensus.

## Distributed Hash Table (DHT)

The DHT is the shared, distributed database where data from individual source chains is published and can be accessed by other agents in the network.

### DHT Architecture

- Data is distributed across all participating nodes
- Each piece of data is stored by multiple nodes for redundancy
- Nodes are responsible for different sections of the hash space
- Validation happens when data is published to the DHT

### Content-Addressable Storage

The DHT uses **content-addressable storage**, where data is referenced by the hash of its content:

- The hash serves as a unique identifier and address for the data
- Data integrity is verifiable by rehashing the content
- References to data (links) use these hash-based addresses

## DNA: Application Definition

A Holochain **DNA** defines the rules and logic of a specific application. It's comparable to a smart contract in blockchain systems, but with significant differences.

Components of a DNA:
- **Zomes**: Modules containing business logic and validation rules
- **Entry Types**: Definitions of data structures the application can store
- **Functions**: Operations that agents can perform
- **Validation Rules**: Criteria for valid actions and data

## Zomes: Modular Components

Zomes (short for "chromosomes") are the modular code components that make up a DNA. Each zome is responsible for a specific aspect of the application's functionality.

Characteristics of zomes:
- Written in languages that compile to WebAssembly (primarily Rust)
- Can be composed together to create complex applications
- Define entry types and their validation rules
- Expose functions that can be called by the UI or other zomes

## Entries and Entry Types

**Entries** are the basic units of data in Holochain. Each entry has a specific **entry type** that defines its structure and validation rules.

Common entry types include:
- **App Entries**: Application-specific data (posts, comments, profiles, etc.)
- **AgentID Entries**: Represent identities of agents in the network
- **Capability Grants**: Permission tokens for function calls

## Actions and Activity Records

When agents interact with a Holochain application, they create **actions** (formerly known as headers). Actions represent operations on the DHT and are recorded on the agent's source chain.

Types of actions include:
- **Create**: Adding a new entry
- **Update**: Modifying an existing entry
- **Delete**: Marking an entry as deleted
- **Link**: Creating a relationship between entries

## Links: Relationships Between Entries

**Links** create connections between entries in the DHT, enabling querying and traversal of related data. Links have:
- A base (the entry being linked from)
- A target (the entry being linked to)
- A tag (optional metadata about the relationship)

Links are crucial for building queryable collections and relationships in applications.

## Validation Rules

**Validation rules** define what constitutes valid data and actions in a Holochain application. These rules are executed by every node that holds the data, ensuring data integrity across the network.

Validation happens at multiple levels:
- **Entry Validation**: Checks if an entry's content is valid
- **Link Validation**: Ensures relationships between entries are valid
- **Action Validation**: Verifies that operations like updates or deletes are legitimate

## Signals: Real-Time Communication

**Signals** allow for real-time communication between agents in a Holochain application. Unlike other data operations, signals don't get written to source chains or the DHT. They're useful for notifications, chat messages, and other ephemeral communications.

## Capabilities: Access Control

The **capability-based security model** in Holochain controls access to functions. Capabilities can be:
- **Unrestricted**: Available to anyone
- **Transferable**: Can be shared with other agents
- **Assigned**: Granted to specific agents

## The Network Layer

The Holochain network layer handles peer discovery, connection management, and data exchange between nodes. It includes:
- **Gossip Protocol**: For efficient data propagation
- **Peer Discovery**: Finding other nodes in the network
- **Transport Security**: Encrypted communications
- **NAT Traversal**: Connecting nodes across network boundaries

## Understanding the Data Flow

The complete data flow in a Holochain application typically follows this pattern:

1. An agent creates an entry and corresponding action
2. The entry and action are validated locally against the DNA's rules
3. They are signed and added to the agent's source chain
4. They are published to the DHT
5. Validator nodes verify the data matches the DNA's validation rules
6. If valid, the data is stored by the responsible nodes
7. Other agents can retrieve the data by its hash or through links

This architecture creates a system that's both highly scalable and resilient, with no central points of failure.
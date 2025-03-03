# Glossary

This glossary provides definitions for key terms used in Holochain development.

## A

### Action
An operation recorded on an agent's source chain, such as creating an entry, updating an entry, or creating a link. Actions (formerly called "headers") contain metadata about the operation and are cryptographically signed by the agent.

### Agent
A participant in a Holochain network, typically representing a person or device. Each agent has a unique cryptographic identity and maintains their own source chain.

### Agent-centric
A design philosophy where applications are built around autonomous agents rather than centralized databases or global ledgers. In Holochain, each agent has authority over their own data.

### AppInfo
A data structure containing information about the current Holochain application, including its DNA hash, agent public key, and instance name.

## B

### Base
In the context of links, the entry that is being linked from. Links create connections between a base entry and a target entry.

## C

### Capability
A permission token that governs access to functions in a Holochain application. Capabilities can be unrestricted, transferable, or assigned to specific agents.

### Cell
The combination of a DNA (application code) and an agent (identity). Each cell has its own source chain and DHT shard.

### Conductor
The runtime environment that executes Holochain applications. The conductor manages cells, handles networking, and provides interfaces for UIs to connect to.

### Coordinator Zome
A type of zome that contains business logic and can be updated without breaking data compatibility. Coordinator zomes can call any HDK function and implement application APIs.

## D

### DHT (Distributed Hash Table)
The shared, distributed database where data from individual source chains is published. The DHT is maintained collectively by all participants in a Holochain network.

### DNA
The code and configuration that defines a Holochain application. A DNA contains zomes, which in turn contain entry type definitions, validation rules, and application logic.

### DNA Hash
A unique cryptographic identifier for a specific DNA. The DNA hash is derived from the content of the DNA and changes if the DNA is modified.

## E

### Entry
A unit of data in a Holochain application. Entries can represent various types of information, such as user profiles, posts, comments, or any application-specific data.

### Entry Type
A definition of a specific kind of entry, including its structure and validation rules. Entry types are defined in integrity zomes.

### ExternIO
A special type in Holochain used for passing data between the host and the WASM guest. It's used for function parameters and return values.

## H

### hApp (Holochain Application)
A complete application built on Holochain, typically consisting of one or more DNAs bundled with a user interface.

### HDI (Holochain Development Interface)
A library used in integrity zomes that provides access to validation context and basic Holochain functionality without allowing state-changing operations.

### HDK (Holochain Development Kit)
A library used in coordinator zomes that provides access to all Holochain functionality, including state-changing operations.

### Header
See "Action" (the term "header" is deprecated in favor of "action").

### Holonix
A Nix-based development environment for Holochain that ensures consistent tooling across different machines.

## I

### Integrity Zome
A type of zome that defines entry types and validation rules. Integrity zomes cannot call state-changing HDK functions and ensure data consistency across the network.

## L

### Link
A directional connection between two entries in the DHT. Links have a base (the entry being linked from), a target (the entry being linked to), and an optional tag containing metadata about the relationship.

### Link Tag
Metadata attached to a link that can describe the relationship between the base and target entries. Link tags can be used for categorization and filtering.

## P

### Path
A hierarchical address in the DHT that can be used to organize and discover entries. Paths can be used to create directory-like structures.

### Provenance
The origin or authorship of data in a Holochain application. All data in Holochain has cryptographically verifiable provenance.

## R

### Record
The combination of an action and an entry (when the action includes an entry). Records are the fundamental units stored in the DHT.

## S

### Signal
A real-time message sent between agents in a Holochain application. Unlike other operations, signals don't get recorded on source chains or in the DHT.

### Source Chain
A private, append-only log of all actions and entries created by an agent. The source chain is cryptographically secured and serves as the authoritative record of an agent's activity.

## T

### Target
In the context of links, the entry that is being linked to. Links create connections between a base entry and a target entry.

### Tryorama
A testing framework for Holochain applications that allows developers to simulate network scenarios with multiple agents.

## V

### Validation
The process of verifying that entries, actions, and links conform to the rules defined in the application's integrity zomes. Validation occurs both when data is created locally and when it is received from the network.

## W

### WASM (WebAssembly)
A binary instruction format used by Holochain to execute application code. Holochain DNAs are compiled to WASM, enabling secure, sandboxed execution.

### Webhapp
A package that combines a Holochain application (hApp) with a web-based user interface, ready for deployment.

## Z

### Zome
A modular component of a Holochain DNA (like a "chromosome"). Zomes contain code that defines entry types, validation rules, and application logic. Holochain applications typically have one or more integrity zomes and one or more coordinator zomes.
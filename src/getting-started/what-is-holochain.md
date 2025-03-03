# What is Holochain?

Holochain is a framework for building **distributed applications** with a fundamentally different approach than traditional centralized systems or blockchain technologies.

## Beyond Blockchain

While blockchain technologies use global consensus to maintain a single, universal truth across all participants, Holochain takes a **agent-centric** approach:

- Each participant (agent) maintains their own local chain of cryptographically signed records
- Data is shared and validated across the network via a Distributed Hash Table (DHT)
- Applications define their own validation rules that all participants follow
- There is no need for global consensus, mining, or tokens

This architecture makes Holochain applications:
- Highly scalable (capacity increases with user adoption)
- Energy-efficient (no mining or consensus mechanisms)
- Resilient to central points of failure
- Adaptable to various use cases where data ownership matters

## Key Concepts

### Source Chains

Each agent in a Holochain network maintains their own **source chain** - a tamper-evident log of all their actions and data. This chain is cryptographically signed, ensuring that only the owner can add to it.

### Distributed Hash Table (DHT)

The **DHT** serves as the shared storage layer where data from individual source chains is published, making it available to other participants in the network.

### Validation Rules

Each Holochain application includes **validation rules** that define what constitutes valid data and actions. These rules are enforced by the network, ensuring data integrity without requiring global consensus.

### Zomes and DNAs

Holochain applications are composed of modular components called **zomes** (from "chromosomes"), which are bundled together into **DNAs**. These elements define the structure, logic, and validation rules of the application.

## Agent-Centric vs. Data-Centric

Traditional applications (including blockchains) are data-centric, focusing on managing data as a primary concern. Holochain shifts to an agent-centric perspective:

| Aspect | Traditional Systems | Holochain |
|--------|---------------------|-----------|
| Data Ownership | Centralized in databases or global ledger | Each agent owns their data |
| Trust Model | Trust the platform/consensus | Trust the validation rules |
| Scalability | Limited by central resources | Scales with number of participants |
| Privacy | Dependent on platform policies | Built into the architecture |

## Use Cases

Holochain is particularly well-suited for applications where:

- Data ownership and user agency are important
- Cooperation and coordination are needed without centralized control
- Scalability is a concern
- Communities want to define their own rules of engagement

Examples include:
- Social networks
- Supply chain tracking
- Collaborative tools
- Peer-to-peer marketplaces
- Community governance systems
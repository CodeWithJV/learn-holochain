# Project Structure

Understanding the structure of a Holochain application is essential for effective development. This chapter explores the standard organization of a Holochain project and the purpose of each component.

## Overview of a Holochain Application

A complete Holochain application (often called a "hApp") typically consists of:

1. **Backend (DNA)**: The Holochain DNA containing the application logic
2. **Frontend**: A user interface that interacts with the DNA
3. **Configuration**: Files that define how components work together

## Standard Project Directory Structure

A typical Holochain project follows this structure:

```
my_happ/
├── dnas/                      # Contains one or more DNA directories
│   └── my_dna/                # A specific DNA
│       ├── zomes/             # Zome code directories
│       │   ├── integrity/     # Integrity zomes (validation rules and entry definitions)
│       │   │   └── src/       # Rust source code
│       │   └── coordinator/   # Coordinator zomes (business logic)
│       │       └── src/       # Rust source code
│       └── workdir/           # Working directory for the DNA
│           ├── dna.yaml       # DNA configuration
│           └── my_dna.dna     # Compiled DNA package
├── ui/                        # Frontend application
│   ├── src/                   # Frontend source code
│   ├── package.json           # Frontend dependencies
│   └── index.html             # Main HTML file
├── tests/                     # Integration tests
│   └── src/                   # Test source code
├── workdir/                   # Application working directory
│   ├── happ.yaml              # hApp configuration
│   └── my_happ.happ           # Compiled hApp package
├── Cargo.toml                 # Rust dependencies and project config
├── package.json               # Project scripts and dependencies
└── README.md                  # Project documentation
```

## Key Components in Detail

### DNA Structure

The DNA is the core of a Holochain application, containing all the backend logic and rules.

#### Zomes

Zomes are divided into two types:

1. **Integrity Zomes**: Define entry types and validation rules
   - Contain entry type definitions
   - Include validation logic for entries, actions, and links
   - Cannot call HDK functions that modify state

2. **Coordinator Zomes**: Implement application business logic
   - Expose functions that can be called from the UI
   - Implement CRUD operations
   - Can call any HDK function

#### DNA Configuration (dna.yaml)

The `dna.yaml` file defines the DNA's properties:

```yaml
---
manifest_version: "1"
name: my_dna
integrity:
  uuid: 00000000-0000-0000-0000-000000000000
  properties: ~
  origin_time: 1677649200000000
  zomes:
    - name: my_integrity
      hash: ~
      bundled: true
      dependencies: ~
coordinator:
  zomes:
    - name: my_coordinator
      hash: ~
      bundled: true
      dependencies:
        - name: my_integrity
```

### UI Structure

The frontend of a Holochain application can be built with any web technology. Common choices include:
- Svelte
- React
- Vue
- Lit

The frontend communicates with the Holochain conductor using the `@holochain/client` library.

### Application Configuration

#### hApp Configuration (happ.yaml)

The `happ.yaml` file defines how DNAs are combined into a complete application:

```yaml
---
manifest_version: "1"
name: my_happ
description: My Holochain Application
roles:
  - name: my_role
    provisioning:
      strategy: create
      deferred: false
    dna:
      bundled: true
      path: ../dnas/my_dna/workdir/my_dna.dna
      properties: ~
      uuid: ~
      version: ~
      clone_limit: 0
```

#### Web hApp Configuration (web-happ.yaml)

For web-based applications, the `web-happ.yaml` file combines the UI with the hApp:

```yaml
---
manifest_version: "1"
name: my_web_happ
ui:
  bundled: true
  path: ../ui/dist
happ:
  bundled: true
  path: my_happ.happ
```

## Development Dependencies

### Cargo.toml

The `Cargo.toml` file defines Rust dependencies for the DNA:

```toml
[workspace]
members = [
  "dnas/*/zomes/coordinator/*",
  "dnas/*/zomes/integrity/*",
]

[workspace.dependencies]
hdi = "0.2.0"
hdk = "0.1.0"
serde = "1.0.151"

[profile.dev]
opt-level = "z"

[profile.release]
opt-level = "z"
```

### package.json

The root `package.json` file defines scripts and dependencies for the entire project:

```json
{
  "name": "my-happ",
  "private": true,
  "workspaces": [
    "ui",
    "tests"
  ],
  "scripts": {
    "start": "npm run network",
    "network": "hc s clean && npm run build:happ && hc s generate workdir/my_happ.happ --run=8888",
    "build:happ": "npm run build:dnas && hc app pack workdir",
    "build:dnas": "npm run build:zomes && hc dna pack dnas/my_dna/workdir",
    "build:zomes": "CARGO_TARGET_DIR=target cargo build --release --target wasm32-unknown-unknown",
    "test": "npm run build:happ && cd tests && npm test"
  },
  "devDependencies": {
    "@holochain/hc-spin": "^0.10.3"
  }
}
```

## The Role of WebAssembly (WASM)

Holochain DNAs are compiled to WebAssembly (WASM), which enables:
- Cross-platform compatibility
- Security through sandboxing
- Efficient execution
- Language flexibility (though Rust is most common)

The WASM modules are bundled into the DNA package during the build process.

## Understanding the Two-Layer Architecture

Holochain's architecture separates concerns into two main layers:

1. **Integrity Layer**: 
   - Defines data structures and validation rules
   - Changes rarely once established
   - Ensures data consistency across the network

2. **Coordinator Layer**:
   - Implements application business logic
   - Can be updated more frequently
   - Provides the interface for UI interaction

This separation allows for more flexible application evolution while maintaining data integrity.

## Next Steps

Now that you understand the basic structure of a Holochain project, the next chapter will explore how to define and work with entries and actions - the fundamental data units in Holochain.
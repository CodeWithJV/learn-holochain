# Setting Up Your Environment

Before you can begin developing Holochain applications, you'll need to set up your development environment. This guide walks you through the process step by step.

## Prerequisites

Holochain development requires:

- **Rust programming language** and its package manager, Cargo
- **Node.js** and npm (for UI development and testing)
- Various Holochain-specific tools

## Installation Options

There are several ways to set up your Holochain development environment:

1. **Using Holonix (Recommended)**: A Nix-based environment that ensures consistent tooling
2. **Manual Installation**: Installing each component separately
3. **Using the Holochain Development Kit**: A simplified setup for beginners

## Option 1: Using Holonix (Recommended)

Holonix provides a complete, consistent development environment using the Nix package manager.

### 1. Install Nix

```bash
sh <(curl -L https://nixos.org/nix/install)
```

Follow the prompts to complete the installation.

### 2. Set Up Holonix

Create a `default.nix` file in your project directory:

```nix
let
  holonixPath = builtins.fetchTarball {
    url = "https://github.com/holochain/holonix/archive/main.tar.gz";
  };
  holonix = import (holonixPath) {
    include = {
      holochainBinaries = true;
      rustup = true;
      node = true;
    };
  };
in holonix.main
```

### 3. Enter the Development Environment

```bash
nix-shell
```

This drops you into a shell with all necessary tools installed.

## Option 2: Manual Installation

If you prefer not to use Nix, you can install the components manually.

### 1. Install Rust and Cargo

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Add the WebAssembly target:

```bash
rustup target add wasm32-unknown-unknown
```

### 2. Install Holochain and Related Tools

```bash
cargo install --force holochain_cli
cargo install --force hc
```

### 3. Install Node.js and npm

Download and install from [nodejs.org](https://nodejs.org/) or use your system's package manager.

## Option 3: Holochain Development Kit

For a simplified setup, you can use the Holochain Development Kit.

```bash
npm install -g @holochain/hc-scaffold
```

## Verifying Your Installation

To verify your installation is working correctly:

```bash
holochain --version
hc --version
node --version
npm --version
```

## Creating Your First Project

Once your environment is set up, you can create a new Holochain project:

```bash
hc scaffold web-app my-first-app
cd my-first-app
```

This creates a new Holochain application with both backend (DNA) and frontend scaffolding.

## Development Workflow Tools

Some additional tools that are helpful for Holochain development:

- **hc**: The Holochain command-line tool
- **holochain**: The Holochain conductor
- **sim2h_server**: A simulation network server for testing
- **hc-scaffold**: A scaffolding tool for creating new projects

## Next Steps

With your environment set up, you're ready to learn about the core concepts of Holochain development. The next chapter will introduce you to these fundamental ideas.
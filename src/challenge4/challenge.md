# Challenge: Messaging App

## Overview

Your challenge is to build a real-time messaging application using Holochain's scaffolding tools and signals functionality.

## Key Learning Goals

Through this challenge, you'll gain practical experience with:
- Using Holochain's scaffolding tools for rapid development
- Implementing real-time communication with signals
- Building interactive features in a distributed application
- Creating secure messaging between agents

## Getting Started

The starter code and detailed instructions are available in the challenge repository:

[Messaging App Challenge Repository](https://github.com/CodeWithJV/holochain-challenge-4)

You can view the difference between the starter code and the sample solution [here](https://github.com/CodeWithJV/holochain-challenge-4/compare/main...sample-solution).

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/CodeWithJV/holochain-challenge-4
cd holochain-challenge-4

# Enter the nix shell for development
nix develop
```

### Tips

- The `hc scaffold` command can save you lots of time on boilerplate code
- Signal handlers must be registered during initialization
- Test signals with multiple agent scenarios to ensure they work properly
- For typing indicators, consider using a debounce function to avoid sending too many signals
- Remember that signals are not guaranteed to be delivered, so design your application accordingly
- Use the scaffolding tool's generated code as a reference, but customize it to fit your specific needs

## Requirements

1. **Use Scaffolding Tools**
   - Use the `hc scaffold` command to generate entry types and CRUD operations
   - Create a message entry type with scaffolding
   - Generate appropriate validation callbacks

2. **Implement Direct Messaging**
   - Create functionality for sending messages between agents
   - Implement conversation threads
   - Add support for retrieving message history

3. **Real-time Notifications with Signals**
   - Send signals when new messages are created
   - Implement handlers to receive signals from other agents
   - Create real-time notifications for message delivery

4. **Enhanced Features**
   - Add typing indicators using signals
   - Implement read receipts
   - Create user presence indicators (online/offline status)

5. **Security and Validation**
   - Ensure message privacy between participants
   - Validate message content appropriately
   - Implement proper error handling for signals
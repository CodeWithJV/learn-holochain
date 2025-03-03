# Challenge: Blog App with Validation & Tests

## Overview

Your challenge is to enhance the blog application from Module 2 by adding validation rules and comprehensive tests to ensure data integrity and verify functionality.

## Key Learning Goals

Through this challenge, you'll gain practical experience with:
- Implementing various types of validation rules
- Writing comprehensive tests for Holochain applications
- Creating multi-agent test scenarios
- Ensuring data integrity in a distributed application

## Getting Started

The starter code and detailed instructions are available in the challenge repository:

[Blog App Validation Challenge Repository](https://github.com/CodeWithJV/holochain-challenge-3)

You can view the difference between the starter code and the sample solution [here](https://github.com/CodeWithJV/holochain-challenge-3/compare/main...sample-solution).

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/CodeWithJV/holochain-challenge-3
cd holochain-challenge-3

# Enter the nix shell for development
nix develop
```

### Tips

- Focus on the validation callbacks in the integrity zome
- Remember that validation must be deterministic across the network
- Use the `ValidationPackage` to access necessary context for validation
- Write test cases that specifically target your validation rules
- For rate limiting, you'll need to retrieve the agent's previous actions
- Test both successful and failing scenarios to ensure validation works correctly

## Requirements

1. **Content Validation**
   - Add character limits for posts (min/max length)
   - Implement validation for comment content
   - Create validation for post titles (no empty titles, reasonable length)

2. **Privilege Validation**
   - Ensure only the original author can update or delete their posts
   - Implement validation for comment authorship
   - Add validation to prevent tampering with author links

3. **Rate Limiting**
   - Create validation rules to prevent spam (limit posts per timeframe)
   - Implement rate limiting for comments

4. **Tests with Tryorama**
   - Write tests to verify all CRUD operations
   - Create multi-agent test scenarios
   - Test validation rules to ensure they properly reject invalid data
   - Implement tests for edge cases

5. **Test Coverage**
   - Ensure tests cover all main functionality
   - Include both positive tests (valid operations) and negative tests (operations that should fail)
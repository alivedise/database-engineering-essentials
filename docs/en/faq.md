---
title: DEE FAQ
state: draft
---

# Frequently Asked Questions

## General Questions

### What is DEE?

DEE (Database Engineering Essentials) is a numbered collection of database design guidelines. See [DEE-0](0) for the full overview.

### Who is DEE for?

Application developers who work with databases -- from beginners learning schema design to experienced engineers looking for a reference on advanced topics like sharding and migration strategies.

### Is DEE specific to a particular database?

No. DEE principles are database-agnostic where possible. When a principle is specific to a database engine (e.g., PostgreSQL GIN indexes), it is clearly noted.

### Can I propose a new DEE?

Yes. Follow the structure described in [DEE-0](0) and submit a pull request.

## Content Questions

### Why RFC 2119 keywords (MUST, SHOULD, MAY)?

These keywords provide precise guidance levels. MUST means the principle is non-negotiable. SHOULD means follow it unless you have a documented reason not to. MAY means it is optional.

### How are DEE numbers assigned?

DEEs are numbered by category range. See the category table in [DEE-0](0) for the full mapping.

### What if my design needs to deviate from a DEE?

Document the reason. DEEs are guidelines, not laws. The goal is to make informed decisions, not to blindly follow rules.

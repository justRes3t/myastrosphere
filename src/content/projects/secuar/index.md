---
title: "SecUAR"
summary: "An open-source user access review engine for the GRC community. Python CLI that runs locally by default, with optional model assistance."
date: "Nov 14 2026"
draft: false
tags:
- Python
- GRC
- Open Source
- Security Automation
---

SecUAR is an open-source engine for running user access reviews. It matches accounts from tools like Okta, Google Workspace, GitHub, AWS, Salesforce and Slack to the people in your HR directory, flags access that needs attention, and produces an audit-ready report.

- **Runs locally.** A Python package and command-line tool. By default nothing leaves your machine; a model (Anthropic or any OpenAI-compatible endpoint, including self-hosted) is optional.
- **Code first, model second.** Plain rules settle every account they can. Model suggestions are checked against name evidence before they're accepted.
- **Transparent and testable.** Review policy lives in a TOML file, and a built-in eval command scores reviews against a labelled answer key.
- **MIT licensed.**

**Status:** Alpha, with the public repo coming soon. Read more in [SecUAR Is Going Open Source](/blog/13-secuar-open-source).

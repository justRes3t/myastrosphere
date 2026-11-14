---
title: "SecUAR Is Going Open Source"
summary: "I'm turning SecUAR, my AI-assisted user access review tool, into an open-source UAR engine for the GRC community. Here's why, and where it stands."
date: "Nov 14 2026"
draft: false
tags:
- Cybersecurity
- GRC
- Open Source
- SecUAR
---

If you've worked in GRC, you know the user access review. Every quarter someone exports user lists from Okta, Google Workspace, GitHub, AWS, Salesforce and Slack, lines them up against the HR directory, and works out who has access they shouldn't. It's one of the controls auditors test most often, and one of the most tedious to run.

SecUAR started as my answer to that: upload your directory and tool exports, let a model match accounts to people across systems, flag the risks, and get an audit-ready report in minutes instead of hours. I built it as a hosted product with a React front end, a FastAPI backend on AWS Lambda, and Terraform for all of it.

## Why open source

Somewhere along the way the ground shifted. General-purpose models can now do a rough version of this matching on their own, so a paid wrapper around a model isn't where the value is. The hard part of a UAR is the part an auditor cares about: why an account was tied to a person, which rule flagged it, and whether you can trust the answer. That's the framework, and it's more useful shared than locked inside a product. So I'm no longer pursuing SecUAR as a business. Instead I'm releasing the engine, under the MIT license, for the GRC community.

## What's changing

The open-source version is a Python package and command-line tool, not a hosted app. The highlights:

- **No model required.** By default nothing leaves your machine. You can opt in to Anthropic's API or any OpenAI-compatible endpoint, including a model you run on your own hardware.
- **Code first, model second.** Reviewer decisions, declared bots, exact email matches and external domains are all settled by plain code. A model only sees accounts that are still ambiguous, and only the employees whose names actually appear in that account's data.
- **Guarded answers.** Every model proposal is checked against the name evidence and refused if another employee fits just as well. A refused suggestion isn't thrown away; the reviewer sees it along with the reason it was refused.
- **Transparent rules.** Review policy lives in a TOML file, and the CLI will print the full rule set in force and the exact prompt a model receives.
- **Measured, not claimed.** An eval command scores a review against a labelled answer key, so accuracy is something you can test and gate a build on.
- **Built for HR data.** Reports are written so only their owner can read them, and API keys come from the environment only.

It can also compare two reviews to show what changed since last quarter, and it ships with fictional example companies so you can try it without touching real data.

## Where it stands

The restructure is well underway. The hosted-app pieces are gone, the engine has been rebuilt as a standalone package with a CLI, and a new test suite covers the parser, guards, resolver, model providers, rules, exports and CLI. It's at version 0.3.0 and still alpha. Next up are the docs, the contributing and security policies, and the public repo. I'll link it here when it's live.

If you run UARs and have opinions about what a good one looks like, I'd love to hear them. Reach out through the links on the home page.

Thanks for reading, cheers!

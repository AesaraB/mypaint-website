+++
title = "Git Workflow"
summary = "How to use Git when Working with MyPaint"
+++

This page describes contributor and maintainer workflows for contributing patches using git.

# TL;DR
MyPaint uses:
- Git for version control
- [GitHub][github] to host our Git repository
- [Pull requests][pull-request] to incorporate patches
- The [Git Flow][git-flow] branching strategy

If you're a code contributor:
- [Use branches appropriately]({{< relref "#on-branches" >}})
- [Use this structure to write commit messages]({{< relref "#how-to-write-commit-messages" >}})

# What is Git?
MyPaint uses a program called [git][git] to keep a [history of how MyPaint's code changes](https://en.wikipedia.org/wiki/Distributed_version_control) through the life of the codebase.
MyPaint is more than a decade old, and with git our developers can see changes everywhere from a year old, to 15. The goal of this page isn't to teach you how to use git, there are dozens of guides online already.

## What is GitHub?
GitHub is the site that hosts various repositories for the MyPaint project. As of writing, it also hosts this website.

# Workflow for contributors
1. [Fork][fork] the relevant [MyPaint repository][github]
2. Make changes using [git][git]
3. Create a [pull request][pull-request] or draft pull request on the relevant MyPaint repository and branch.
4. A project maintainer will review your code and accept it, reject it, or make suggestions.
    - If your pull request is incompatible with the development branch, we'll guide you through rebasing or force pushing it.

## Why pull requests?
Pull requests are a good organisational unit that ensures contributed code that isn't merged won't be forgotten.
On our side, it makes it easier to review changes you make.

## On branches
- Use separate branches per each fix or enhancement.
    - This helps the maintainers keep understand how the pull request's topic relates to changes in the code.
- Split commits logically, either by being selective with files, or [staging interactively][interactive-staging].

## How to write commit messages
Each commit you contribute should have a good commit message. Here's an example of a good MyPaint commit message:

```
Splarp view: fix rotation direction.

The direction of rotation for the splarp was incorrect.
When the user turned it clockwise, it went anticlockwise
and vice versa. This commit swaps the two directions.

Closes mypaint/mypaint#666.
Makes mypaint/libmypaint#999 a little better.
```

### Formatting commit messages
- Firstly, [this][commit-messages] is a good read on how commit messages work.
- Format commits so that each line is less than 72 characters long.
- Make sure that the summary line is 50 characters or less.
- Separate the summary line from the body with a blank line.

### Structure of a commit message
- Summary line: “\<thing-you-changed\>: \<what-you-did-to-it\>”. Not every commit summary follows the convention, but many do.
- If a commit fixes or refers to an issue, please refer to the issue by number, either as `mypaint/mypaint#nnn` or as `mypaint/libmypaint#nnn`.
    - This issue reference notation will allow the main repository to receive mentions from your forked repository.
- If a commit fixes an issue, write a message that [automatically closes the issue][closing-issues] when merged.

# Workflow for Maintainers
- Check [licenses]({{< relref "licenses" >}})

[git]: https://git-scm.com/
[github]: https://github.com/mypaint/
[git-flow]: https://www.gitkraken.com/learn/git/git-flow
[fork]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
[pull-request]:https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
[interactive-staging]: https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging
[commit-messages]: https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging
[closing-issues]: https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue

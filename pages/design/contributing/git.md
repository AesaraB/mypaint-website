+++
title = "Git Workflow"
summary = "How to use Git when Working with MyPaint"
+++

This page describes contributor and maintainer workflows for contributing patches using git.

# TL;DR
MyPaint uses:
- Git for version control
- [GitHub][github-mypaint] to host our Git repository
- [Pull requests][github-pr] to incorporate patches
- The [Git Flow][git-flow] branching strategy

If you're a code contributor:
- [Use branches appropriately]({{< relref "#on-branches" >}})
- [Use this structure to write commit messages]({{< relref "#how-to-write-commit-messages" >}})

# What is Git?
MyPaint uses a program called [git][git] to keep a [history of how MyPaint's code changes][wiki-dvcs]
through the life of the codebase. MyPaint is more than a decade old, and with git
our developers can see changes everywhere from a year old, to 15. The goal of this
page isn't to teach you how to use git, there are dozens of guides online already.

The MyPaint project uses [GitHub][github] to host its [git repositories][github-mypaint].
As of writing, it also hosts this website.


# Workflow for Contributors
1. [Fork][github-fork] and [branch][git-branch] the relevant [MyPaint repository][github-mypaint]
2. Commit changes using [git][git]
3. Create a [pull request][github-pr] or draft pull request on the relevant MyPaint
repository and branch.
4. A project maintainer will review your code and accept it, reject it, or make suggestions.
    - If your pull request is incompatible with the development branch, we'll guide
you through rebasing or force pushing it.

## On Branches
- Use separate branches per each fix or enhancement.
    - This helps the maintainers keep understand how the pull request's topic relates
to changes in the code.
- Split commits logically, either by being selective with files, or [staging interactively][git-interactive-staging].

## Don't Commit Dead Code
Dead code, also known as commented-out code, has the potential to cause a lot of
harm as commented-out code quickly becomes out of date and misleading. We have version
control anyway, so people can just look at the commit log.

## How to Write Commit Messages
Each commit you contribute should have a good commit message. Here's an example
of a good MyPaint commit message:

```
Splarp view: fix rotation direction.

The direction of rotation for the splarp was incorrect.
When the user turned it clockwise, it went anticlockwise
and vice versa. This commit swaps the two directions.

Closes mypaint/mypaint#666.
Makes mypaint/libmypaint#999 a little better.
```

### Formatting Commit Messages
- Firstly, [this][commit-advice] is a good read on how commit messages work.
- Format commits so that each line is less than 72 characters long.
- Make sure that the summary line is 50 characters or less.
- Separate the summary line from the body with a blank line.

### Structure of a Commit Message
- Summary line: ``<thing-you-changed>: <what-you-did-to-it>``. Not every commit
summary follows the convention, but many do.
- If a commit fixes or refers to an issue, please refer to the issue by number,
either as `mypaint/mypaint#nnn` or as `mypaint/libmypaint#nnn`.
    - This issue reference notation will allow the main repository to receive mentions
from your forked repository.
- If a commit fixes an issue, write a message that [automatically closes the
issue][github-close-issue] when merged.

# Workflow for Maintainers
This section is a draft.

## Git Branches
Even the development branch should stay clear of obvious bugs and glitches all the
time.

## Pull Requests
### Why Pull Requests?
Pull requests are a good organisational unit that ensures contributed code that
isn't merged won't be forgotten. On our side, it makes it easier to review changes you make.

### Merging Pull Requests
- Check [licenses]({{< relref "licenses" >}})
- Merge to ``development`` or a feature branch. **Do not** merge to main unless
releasing a new version.
- Review the files changed.
- Test the changes locally.

[git]: https://git-scm.com/
[git-branch]: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
[git-flow]: https://www.gitkraken.com/learn/git/git-flow
[git-interactive-staging]: https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging
[github]: https://github.com
[github-close-issue]: https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue
[github-fork]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
[github-mypaint]: https://github.com/mypaint/
[github-pr]:https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
[wiki-dvcs]: https://en.wikipedia.org/wiki/Distributed_version_control
[commit-advice]: https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

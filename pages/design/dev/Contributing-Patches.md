> :bouquet: _New to github and pull requests?_ We're happy to walk you through the steps.  
> :star: These are the conventions we use for MyPaint [[contributions|Contributing]].

### Making pull requests

:bookmark: _See also:_ <https://help.github.com/articles/fork-a-repo/>, and <http://makeapullrequest.com/>!  
:seedling: _TODO:_ this section could use some video instructions or screengrabs.

We prefer changes to be sent as Github “pull requests”. That way they won't get forgotten, and it's easy for us to review them.

The best way of doing this is to “fork” the mypaint or libmypaint repository within Github, then clone it locally so you can fiddle with the code and test it. When you're ready, commit your changes onto a new working branch in your local clone, and push the committed branch back into your forked repository on Github. When your branch is ready, you can send a request to us asking us to pull it onto the master branch.

Please keep your branch's commit history clean. For each change you want to propose, use a separate branch which contains only the relevant commits

Make sure your commits apply cleanly to the latest master branch version. If master has moved on since you started work on your branch, we may ask you to “rebase” and do a “forced push” to catch up. If we do, we'll walk you through the process because it's quite involved.

Please split your commits into logical changes, one per commit.

### Commit messages

> :bookmark: _See also:_ <http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html>  

Each commit you contribute should have a good commit message. Please format it so that each line is less than 72 characters long, and make sure that the summary line is 50 characters or less. The summary line must always be separated from the body by a blank line.

```
Splarp view: fix rotation direction.

The direction of rotation for the splarp was incorrect.
When the user turned it clockwise, it went anticlockwise
and vice versa. This commit swaps the two directions.

Closes mypaint/mypaint#666.
Makes mypaint/libmypaint#999 a little better.
```

The summary line normally has a particular format: “\<thing-you-changed\>: \<what-you-did-to-it\>”. Not every commit summary follows the convention, but many do.

If a commit fixes or refers to an issue, please refer to the issue by number, either as `mypaint/mypaint#nnn` or as `mypaint/libmypaint#nnn`. Using the full issue reference notation means that when you commit to a branch in a forked repository you own, a note about it will appear in the main repository's bug.

Write your commit messages so they automatically close any related issues when we merge your pull request. See Github's own docs about [closing issues via commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/).

--------------------------------------------

#### Licensing

We don't (yet) have a Contributor License Agreement, but we probably should. For now, you must make sure that your code or artwork is licensed so that we, and others, can redistribute it. See the [[Licensing Policy]] for more.

#### Coding style

In general, please follow the coding conventions of the files you are editing. New Python code should follow the [[Python Style Guide for MyPaint]].

#### Documenting code

See [[Python Style Guide for MyPaint#docstrings]].

#### Automated tests

See [[Python Style Guide for MyPaint#automated-tests]].
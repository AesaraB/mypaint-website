There are several aspects to handing bugs properly.

* [[Triage|Fixing Bugs#triage]] new and old issues. Close stale bugs.
* [[Classify issues|Fixing Bugs#classifying]]
* Reproduce the issue on hardware you own.
* [[Diagnose bugs|Fixing Bugs#diagnosing]], and fix them if you can.
* If we find it can't be fixed, document a workaround in the issue or update the [[FAQ]]. Then close the issue.
* If it can be fixed, [[send us a patch or a pull request|Contributing Patches]] containing your fix. The issue should then be closed.

## Triage

* Get involved: find bugs and triage them in the [issue tracker](https://github.com/mypaint/mypaint/issues)
* Automate it: <http://www.codetriage.com/mypaint/mypaint>
* Further reading: <http://words.steveklabnik.com/how-to-be-an-open-source-gardener>

Triaging is the process of reviewing new and old issues to make sure they are as complete as they can be, and are still relevant to the current phase of development. 

## Classifying

MyPaint development happens in phases. The currently planned releases all have [milestones](https://github.com/mypaint/mypaint/milestones) associated with them.

We use labels extensively in the tracker:

* General Type:
  * [bug](https://github.com/mypaint/mypaint/labels/bug) - a confirmed, reproducible software bug in MyPaint.
  * [docs](https://github.com/mypaint/mypaint/labels/docs) - an issue whose closure involved updating documentation.
  * [enhancement](https://github.com/mypaint/mypaint/labels/enhancement) - a feature request.
  * [performance](https://github.com/mypaint/mypaint/labels/performance) - slowdowns, excessive memory consumption, etc.
  * [ux](https://github.com/mypaint/mypaint/labels/UX) - issues especially relevant to the user experience.
  * [project](https://github.com/mypaint/mypaint/labels/project) - relates to the MyPaint project as a whole.
  * [translation](https://github.com/mypaint/mypaint/labels/translation) - general problems with program internationalization, or reports about specific translations.
* Platform:
  * [windows](https://github.com/mypaint/mypaint/labels/windows) - Windows-specific issues.
  * [osx](https://github.com/mypaint/mypaint/labels/osx) - issues specific to Mac OS X ports.
* State tags:
  * [user-support](https://github.com/mypaint/mypaint/labels/user-support) - user support requests. The tracker is not really for these, but they can turn into enhancement requests.
  * [bitesize](https://github.com/mypaint/mypaint/labels/bitesize) - small issues especially suited for new contributors.
  * [needs-info](https://github.com/mypaint/mypaint/labels/needs-info) - incomplete issues, ones we can't reproduce.
  * [works-for-me](https://github.com/mypaint/mypaint/labels/works-for-me) - issues which remain unreproducible despite good information.
  * [upstream](https://github.com/mypaint/mypaint/labels/upstream) - issues caused by an upstream project.
  * [duplicate](https://github.com/mypaint/mypaint/labels/duplicate) - duplicate issues should be closed speedily, with links to the bugs they are duplicates of.
  * [stale](https://github.com/mypaint/mypaint/labels/stale) - issues which haven't been made workable for some time. These should be closed after a reasonable period if they're not progressing.
  * [wontfix](https://github.com/mypaint/mypaint/labels/wontfix) - closure reason, indicates that a decision has been made not to fix an issue.

## Diagnosing

See [DEBUGGING.md](https://github.com/mypaint/mypaint/blob/master/DEBUGGING.md) in the code for details of
how to debug MyPaint most effectively
or run the profiler.

## See Also

* [[Reporting Bugs]]
* [[Contributing Patches]]
* [[Debugging crashes on Windows]]
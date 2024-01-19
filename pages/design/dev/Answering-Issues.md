> :books: This page is part of a series on [[how you can take part in the MyPaint project|Contributing]]  
> :chart_with_upwards_trend: Status: DRAFT  

### Answering Issues

Sometimes a user support request comes in
without very much substantive information in it,
despite our best efforts to educate people about what makes a good bug report!
These reports can be maddeningly vague,
but should be dealt with as carefully as reports  When handling these,

* Thank the reporter for reporting the issue.
* Gently point them at the [[bug reporting guidelines|Reporting Bugs]].
* Be kind.
  Remember the user may not be technically inclined,
  and that this may be the first report they make.
  We'd like _every_ user to get involved, and not to be discouraged.
* Be honest.
  We may not be able to help every installation,
  but tell them that's a possibility.
  Provide pointers to other forums which may be more helpful.
* Encourage detail, especially about versions and build information.
* No jargon.
* Write simply, at a level comprehensible to a 12 to 14 year old.
  Use the conventions and tools described in our [[writing guide|Writing Documentation#language]].
* Consider making [[FAQ]] entries as a result of the conversation.
* Discourage thread drift, encourage anyone who chimes in with anything
  not confirmed as related to make new issues.
* Triage notes are great as summaries of what's been going on,
  but they are blunt tools.
  Take care to keep them separate from replies, and try not to discourage the reporter.

[guide.reporting]: https://github.com/mypaint/mypaint/wiki/Reporting-Bugs
[guide.contributing]: https://github.com/mypaint/mypaint/blob/master/CONTRIBUTING.md

## Issue Labels

* See [[Fixing Bugs#classifying]]

## Sample messages

Triagers and other project members now have access to a number of saved texts in Github.

* **Needs More Info** - looks like a `bug` but there's too little information to allow it to be confirmed or reproduced. Issue should probably be tagged `needs-info` too.
* **User Support Request** - if it's a straight-up user support request, our initial goal is to point the reporter at better sources of information and close the report fairly quickly. The issue should probably be labelled `user-support` too. Sometimes issues in this state turn out to be `bug`s or `enhancement` requests in disguise though.
  * There is also a `(triage note)` version, which is a bit stuffier and less friendly, but clearer that the issue tracker is the wrong forum. Don't use it by itself, use the fluffy version too :smile_cat: 
* **Piggybacked Issue** - these are multiple sub-issues in one big ball of yarn. Reporters should be strongly discouraged from bundling multiple reports together.
  * Try to disentangle the report into its main areas.
  * Link the reporter to existing issue threads that look relevant.
  * If it has just one clear main topic that doesn't have its own issue yet
and all the other sub-issues look like duplicates,
retitle it and let it become the main report.
  * Otherwise, close the issue, and tag it as `duplicate` if any of the sub-issues look like duplicates.
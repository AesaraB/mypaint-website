+++
title = "UX/UI Specifications"
summary = "Developer reference describing and discussing MyPaint's UX/UI"
mypaintver = "v3.0.0"
+++

On creating MyPaint, Martin Renold dreamt of a drawing application that could let you ["Scribble Without Thinking"][mklink]. These days, MyPaint has a more powerful toolset than what Martin originally imagined for the application, yet his original philosophies have stopped MyPaint's UX/UI experience from feeling bloated and confusing.

As MyPaint continues to grow and expand its feature set, the project needs to ensure that MyPaint is *simple to use*, and *intuitive* from the perspective of the user. The UX/UI documentation, alongside the [Human Interface Guidelines][hig], are the primary source of reference for developers and designers when suggesting, discussing, and prototyping new user-facing features for MyPaint.

# UX/UI Philosophy
- MyPaint is for painting and sketching from scratch.
- Keep the interface simple. Advanced features should not grab any attention of users who are happy without them.
- Excellent fullscreen workflow. GUI elements can appear only on demand and directly at the cursor.
- Frequently used interactions should be fine tuned. Think about usability in milliseconds, react to every sensible input, and optimize the presented information for fast recognition. Allow the user to work in flow.

- MyPaint should make the act of drawing as simple as possible.
	- A new user should immediately know how find to every feature in MyPaint.
		- Deduction test: Get a new user, describe a feature to them, and ask them where they might find it.
		- Induction test: The user wants to do something that is a capability of MyPaint, but has never used the capability before. Can they find our implementation of the capability?
- The user should be able to tailor their workflow
	- The capabilities of MyPaint should scale with the needs of the user
	- Every part of the UI with few exceptions should be able to be moved or hidden



[hig]: {{ .ref "/design/hig" }}
[mklink]: https://web.archive.org/web/20080517111220/http://mypaint.intilinux.com:80/?page_id=3

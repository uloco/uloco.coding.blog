> :Hero src=https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1900&h=600&fit=crop,
> target=desktop,
> leak=156px

> :Hero src=https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=600&fit=crop,
> target=mobile,
> leak=156px

> :Title shadow=0 0 8px black, color=white
>
> Git Cleanup Unused Branches

> :Author src=github

<br>
TODO: Author
TODO: Setup Home Page

## The Workflow

A popular approach to work with git repositories is the so called _feature
branch strategy_. Here basically every developer on your team opens a branch
for a feature or bugfix they are working on locally and also on a remote
service like e.g. Github or Gitlab.

After a lot of commits and pushes you will have a working example of your
feature which gets reviewed by some of your peers most of the time and is
ready to be merged into main branch, where all code lives finally.

## The Problem

As you can see this workflow leads to a lot of branches on your laptop and
also on the remote service, which need to be deleted once in a while. It's
way more convenient to have some local branches you are actually working on
and easily find them with `git branch` instead of having loads of
branches that you are already finished working with.

You can automatically delete the branches on your remote Github / Gitlab via
the browser interface once the branch is merged or setup some automation
rules, but locally there is no convenient way of doing that.

## The Solution

Here is a simple bash script to delete all local branches, that are already
**merged** into your _main branch_ and also **deleted** from your _remote
repository_.

```bash
#!/usr/bin/env bash

default_branch() {
  git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@'
}

git fetch --all &>/dev/null
git checkout "$(default_branch)" &>/dev/null
git remote prune origin
git branch -vv | grep "origin/.*: gone]" | awk "{print \$1}" | xargs git branch -d
```

> :Buttons
>
> > :CopyButton

To make this command look like a native git command, we can make use of a
neat little trick I found out about git commands in the shell. If you prefix
the script file with `git-`, so in this case for example
`git-cleanup-branches`, you can just run the script as any other git command.

You even get tab completion for that!

```
git cleanup-branches
```

You just need to make sure to add the file somewhere in your path.
I decided to make a dedicated directory just for custom scrips like these
and put them in `${HOME}/.local/bin`. Also you will have to make the script
runnable with `chmod` to make it work properly.

```
mkdir -p "${HOME}/.local/bin"
touch "${HOME}/.local/bin/git-cleanup-branches"
chmod u+x "${HOME}/.local/bin/git-cleanup-branches"
```

> :Buttons
>
> > :CopyButton

Now you just need to copy and paste the script from above into
`"${HOME}/.local/bin/git-cleanup-branches"` and add the following lines to
your shell `rc` file, like `.bash_profile`, `.bashrc`, or `.zshrc` (whatever
you are using), which are usually located in your home directory.

```
# Add local binaries to path
export PATH="${PATH}:${HOME}/.local/bin"
```

> :Buttons
>
> > :CopyButton

Now just open a new terminal and the command should work fine.

Done, happy cleaning! 😊

### Sidenote

Take note, that not fully merged branches won't be deleted and need to be
deleted manually _only_ if you are sure about it.

You can do this with `git branch -D <branchname>`.

**Please only do this, if you know what you are doing, or progress could be lost!**

---

> :DarkLight
>
> > :InDark
> >
> > _Hero image by [Yancy Min](https://unsplash.com/@yancymin) from [Unsplash](https://unsplash.com)_
>
> > :InLight
> >
> > _Hero image by [Yancy Min](https://unsplash.com/@yancymin) from [Unsplash](https://unsplash.com)_

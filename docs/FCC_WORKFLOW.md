[&laquo; Back to TOC](../CONTRIBUTING.md#table-of-contents)  
[&lt; Previous](FORK_AND_PULL.md)
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
[Next &gt;](WHAT_TO_CONTRIBUTE.md)
***

# FCC-MANILA BLOG DEVELOPMENT WORKFLOW

Development in this project will follow [Github Fork and Pull Request Workflow](FORK_AND_PULL.md).

*Special workflow guidelines specific to our project are reflected in this document.*

## COMMAND LINE COMMANDS

- `npm run build` - Builds HTML, CSS, JS and assets. This needs to be run after initial project set-up and after adding a new article.

- `npm start` - Starts development web server on your local machine. Local FCC Blog website can then be accessed in your web browser at [`http://localhost:8000`](http://localhost:8000).

- `npm test` - Runs tests. Currently only runs linting on all markdown (\*.md) and javascript (\*.js) files. Complete JS and React tests will be added in the future. **Make sure tests pass before executing `git commit`.**

- `npm run lint:js` - Runs linting on javascript files (\*.js). Execute after every change made in any javascript file.

- `npm run lint:md` - Runs linting on markdown files (\*.md). Execute after every change made in any markdown file.

- `npm run deploy` (**Admin Only**) - Instructs Gatsby to push changes to Github Pages. Run this inside the original repository to update [fccmanila.github.io](fccmanila.github.io). **Make sure you are in `master` branch before deploying.**

- `npm version [ major | minor | patch ]` (**Admin Only**) - Bumps project version. See [Official NPM Docs](https://docs.npmjs.com/cli/version) and [Semver Docs](http://www.semver.org) for details. **Should only be run in `staging` branch**

## SPECIAL BRANCHES

- `staging` branch serves as main branch for all development. All pull requests, feature branches, and version branches will be merged to this branch.

- `master` branch contains the latest version of the blog.

- `gh-pages` branch contains all the build files for serving content in Github Pages. This is automatically generated and should not be tampered with.

- Version branches (major versions only) will have the format `v#` (i.e. `v1`).

## RELEASE SCHEDULE

To be determined

***
[&lt; Previous](FORK_AND_PULL.md)
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
[Next &gt;](WHAT_TO_CONTRIBUTE.md)  
[&laquo; Back to TOC](../CONTRIBUTING.md#table-of-contents)

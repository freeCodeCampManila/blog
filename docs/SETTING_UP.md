[&laquo; Back to TOC](../CONTRIBUTING.md#table-of-contents)  
[&lt; Previous](INSTALLATION.md)
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
[Next &gt;](FORK_AND_PULL.md)
***

# SETTING UP

By now, you should have a web development server running. Next, we have to create a link from the original repository (which we will call `upstream`) to your local repository.

This section assumes basic Git knowledge. If you are not familiar with Git, kindly refer to [REQUIREMENTS.md](REQUIREMENTS.md).

1. `$ git remote add upstream https://github.com/FCCManila/blog.git`

2. `$ git remote set-url --push upstream no_push` _(This prevents you from
  accidentally pushing changes on your local repo into `upstream`.)_

3. `$ git fetch upstream` _(Fetches changes from `upstream`)_

4. `$ git merge upstream/<branch_name>` _(Merges changes from `upstream/<branch_name>` into your current local working branch, i.e. to merge `upstream/staging` into your local `staging` branch, `$ git checkout staging` then `$ git merge upstream/staging`)_

5. `$ git push` _(Updates your remote Github repository--i.e. `https://github.com/<your_username>/blog`--which we will call `origin`, with changes merged from `upstream` through your local machine repository.)_

Note: Steps `3-5` are part of the Github Fork and Pull-Request Workflow, which will be discussed [here](FORK_AND_PULL.md).

***
[&lt; Previous](INSTALLATION.md)
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
[Next &gt;](FORK_AND_PULL.md)  
[&laquo; Back to TOC](../CONTRIBUTING.md#table-of-contents)

[&laquo; Back to TOC](../CONTRIBUTING.md#table-of-contents)  
[&lt; Previous](REQUIREMENTS.md)
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
[Next &gt;](SETTING_UP.md)
***

# INSTALLATION

1. Login to [Github](https://www.github.com/login).

2. Go to [`https://github.com/FCCManila/blog`](https://github.com/FCCManila/blog).

3. Click on `Fork` button on the upper right side of the page.

4. Select your profile on the `Where should we fork this repository?` popup. Github will proceed on copying (or forking) the FCCManila Blog repository to a repository under your profile. After Github finishes forking the repository, it will take you to `https://github.com/<your_username>/blog`.

5. Find and click the `Clone or download` button. Copy the link provided in the dropdown.

6. Open up your command line terminal _(usually Bash for Linux/MacOS and Powershell or Bash for Windows)_.

_NEWBIE NOTE: For terminal commands, you don't need to include the dollar (`$`) sign. The dollar sign represents the command prompt and just means you have to enter the text succeeding it in your command line terminal._

7. Enter `$ cd ~` then `$ mkdir sites` _(Optional if you want your web projects to reside under the `~/sites` directory)_

8. Enter `$ git clone <paste-the-link-you-copied-earlier> fccmanila-blog` _(This will download all the files from Github into your local machine under the folder `fccmanila-blog`.)_

9. After the cloning has finished, `$ cd fccmanila-blog`

10. Do an `$ npm install` _(This will download and install all the package dependencies that our project needs on your machine.)_

11. Once the installation completes, test your local repository via `$ npm start` to start up the web development server.

12. If terminal reports no error, open up your internet browser and head on to `http://localhost:8000`. You should be seeing the blog's front page. _(If there are errors in your installation, kindly seek for a solution in our [FAQs](FAQS.md) or in our [Facebook group](https://www.facebook.com/group/free.code.camp.manila).)_

**Congratulations! You now have a copy of the FCC-Manila Blog running on a server on your own computer!**

***
[&lt; Previous](REQUIREMENTS.md)
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
[Next &gt;](SETTING_UP.md)  
[&laquo; Back to TOC](../CONTRIBUTING.md#table-of-contents)

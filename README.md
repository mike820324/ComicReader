# Comic Reader
---
## Introduction:

A very simple comic reader or image viewer application that will blow your mind. The following are libraries and framework that I used to create this application:
- [electron](https://github.com/atom/electron)
- [Reactjs](http://facebook.github.io/react/) 
- [alt](https://github.com/goatslacker/alt)

> This application will not download the images for you. Please purchase the legal copys if you love the comics.

## Motivations:

I'm a comic lover. But sometimes I just think that the user interface and the image loading time are quite unacceptable in most of the online resources. And don't mentioned the **ads and popup**. Totally ruined the wonderful or exciting moment when I'm enjoying my comics.

That is why I have started this project that will provide the following features to the users.

#### 1. Better User Interface: 
Can't endure the user interface that most of the websites provide? ***WE HEAR YOUR VOICE.*** The most important goal of this projec is to provide a better user interface for the users.

#### 2. Ad Free: 
Do I mentioned **Ad Free**, ya that's right, ***no more ads and popup*** that will disturb you while you're reading your favorite comics.

#### 3. No More Waiting:
Have you ever encounter a situation that when you click the next page, and you need to wait the page to rerender? Your nightmare is gone, there will be no more waiting when you click the next page cuz it will preload it for you.

#### 4. Multiple Comic Websites Support:
We have support many differnt websites. The following are the websites that we currently suppor:
- [99comic](http://99comic.com/)
- [comicvip](http://www.comicvip.com/)
- [dmeden](http://dmeden.net/)

## Todo List:
Currently this project is still under **heavy developmnet**. The following are the unfinished items that will be added in the first release version.

- [ ] Documentation
  - [ ] How to use this application
  - [x] project description
- [ ] Show the comic info that the user want to follow
- [ ] Two different image viewer for the user.
  - [x] scroll viewer
  - [x] click viewer
  - [ ] toggle these two viewers
- [x]  Performance enhancement for image viewer
  - [x] do not load all the image at a time for **scroll viewer**.
  - [x] do not load all the image at a time for **click viewer**.
- [ ] Comic Websites Support
  - [x] getting images from a given issue url
    - [x] 99770
    - [x] dmeden
    - [x] comicvip
  - [ ] getting issue info from a given issue url
    - [ ] 99770
    - [ ] dmeden
    - [ ] comicvp
  - [ ] getting comic info from a given comic url
    - [ ] 99770
    - [ ] dmeden
    - [ ] comicvip
  - [ ] getting issue list from a given comic url
    - [ ] 99770
    - [ ] dmeden
    - [ ] comicvip
- [ ] UI tweeks
- [ ] Add distribution script for electron. 

## Changelog:
**0.5.3**: Comic parser enhancement
- add issueNum support for all the comic parser
- add comicName support for 99comic
- add issueList support for 99comic
- change issueAction to adapt the new parser api

**0.5.2**: add toggle viewer feature and small refactors
- add toggle between click viewer and scroll viewer
- change imageAction to issueAction
- change imageStore to issueStore
- change App.js to IssueViewer
- change HeaderBar to SearchBar

**0.5.1**: Add smart load support to scroll image viewer and small bug fix
- Add smart load to ImageList
- modify the calLoadRange so that it will output the correct range when the nearing the end of the issue

**0.5.0**: Add new image viewer
- Add Click Image Viewer
- Add two new components: ShiftImageList and PageNavigator
- Add two actions to imageActions: prevPage and nextPage
- Add new fields to imageStore: currentIndex and imageLoadRange
- Add new methods to imageStore: handlePrevPage, handleNextPage and calLoadRange


**0.4.4**: Add README and LICENSE

**0.4.3**: UI Enhancement:
- Change the HeaderBar title margin to zero
- Change the HeaderBar Button style
- Change the height and top of the ImageList container style

**0.4.2**: UI Enhancement:
- Add inline css style for react component
  - HeaderBar
  - ImageList

**0.4.1**: Code cleanup:
- adding displayName and propTypes for react component

**0.4.0**: New comic site support:
- 99comic support

**0.3.0**: New comic site support and better development environment setup
- dmeden support
- add eslint to help us check the error
- add gitignore

**0.2.0**: Some bug fix and flux support
- start using [alt](https://github.com/goatslacker/alt), a flux framework for event handling
- fix a bug that will cause error for comicvip parser 
- Code cleanup

**0.1.0**: The very first commit
- Basic Image Viewer components
- comicvip support

## License
The MIT License (MIT)

Copyright (c) 2015 RueiMin Jiang \<mike820324@gmail.com\>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

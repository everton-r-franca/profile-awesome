# profile-awesome

A profile picture generator for lazy users who don't upload a photo.
A lightweight and very costumezable javascript profile image generator to execute in browsers.
Don't spend your time, Optimize it.

## features

- Create your application images, like a boss.
- Do not spend a lot of time chossing pictures for testing design of your application.
- If a user don't upload a photo, we create a custom picture to him.
- Customize your pictures

## Installing

If you just want use for development purposes use the command bellow:\
\
`npm i --save-dev profile-awesome`

But, if you want for production purposes, use:\
\
`npm i profile-awesome`

## Usage

After install, you need import to your project the core of `profile-awesome`:
\
`import ProfileAwesome from "profile-awesome"`\
\
now we must define a config object who contains the global rules.
\
`const config = {target: "profile-awesome", theme: 'dark', contrast: 5, type: 'auto'};`
\
after the above step, just:\
\
`ProfileAwesome(config).then(picture => { /* Save on server */ }); /* picture is a object with id of img tag and a base64 encoded png file */`
\
Now every `img` tag with `class="profile-awesome"` and `src="#noimage" || src="noimageloader.svg"` will be
replaced with a beautiful and custom picture.\
The `src` of a img tag **must** be `#noimage` or `noimageloader.svg` it is for when a user already has a profile
picture, so we don't replaced it.

## Config Properties

### target

The class of img tag must be searched by profile-awesome.

### theme

the color pallete of pictures, can be assume two different values:

#### dark

basicly the background color with luminosiness and content with more lumosity (just works with a `type: text`)

#### light

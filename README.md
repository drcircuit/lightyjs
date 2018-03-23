# lightyjs
A small lightweight MVC framework 

I wrote this little thing to show you do not always need a framework.
Let's say all you want to do is load data from an external source, process that data, and update a template with those values.
Do you really need to use React to to that? Or Angular? Or JQuery?

Offcourse, you can do that using any of those frameworks, but if your only requirement is to update a view with some data, just
writing it yourself could actually be a better solution.

Think of this, you do not have to learn anything new. All you need to say is "Screw it, let's do it!" and get cracking. 

This little example framework shows you that just hacking together some vanilla Javascript, you can do a lot of the regular
stuff you would use a framework for in a lot less code than you would think. Also it requires a lot less effort than learning 
a whole new set of tools to achieve basically the same thing.

Well my little example just shows how to bind data to a view. But you could easilly extend it to do interaction, iteration,
conditionals and so on. Doing this yourself also teaches you how these problems are actually solved, where the performence 
critical stuff happens, and what and where to optimize. It may also give you better insight into some of the frameworks
you might be using. 

If all you want to do is:
```html
<div>{{key}}</div>
```
to become 
```html
<div>Roses</div> 
```
then look at this example, you can make that happen 
in just a few lines of code. No need to bring in a cannon like AngularJS just to do that.

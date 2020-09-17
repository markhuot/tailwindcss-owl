Note: this has been superceeded by https://tailwindcss.com/docs/space#app. You should use the first party spacing classes wherever possible.

Lobotomized Owl Selector for Tailwind CSS
==

Introduced way ahead of its time the [labotomized owl selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls) is a magnificent way to structure component spacing so that the individual component does not have to worry about its surrounding context.

Given a stereotypical example of a blog showing 10 posts the question is: how do you apply a uniform space between each of the 10 snippets without requiring each snippet to know where it falls in the list.

With out-of-the-box Tailwind you could do this with the following classes,

```
+------------------------+
|                        |
|  div.blog-post         |
|                        |
+------------------------+

2.5rem spacing

+------------------------+
|                        |
|  div.blog-post.mt-10   |
|                        |
+------------------------+

2.5rem spacing

+------------------------+
|                        |
|  div.blog-post.mt-10   |
|                        |
+------------------------+
```

In a React components you may have,

```jsx
export default (props) => <div className={[!props.isFirst && 'mt-10', 'p-6', 'bg-black'].filter(className => className == true).join(' ')}>
  {/* blog post */}
</div>
```

Here we have a contextual class of `.mt-10` applied to all posts that aren't the "first".

But that contextual class is mixed up with the component classes of `.p-6`, etc… it's confusing.

The owl selector allows you to ignore all that and apply a "spacing context" _around_ the repeating items so their spacing will be defined by where the component is used. The new flow now looks like this,

```
+------------------------------+
|  div.o-10                    |
|                              |
|  +------------------------+  |
|  |                        |  |
|  |  div.blog-post         |  |
|  |                        |  |
|  +------------------------+  |
|                              |
|  same 2.5rem spacing         |
|                              |
|  +------------------------+  |
|  |                        |  |
|  |  div.blog-post         |  |
|  |                        |  |
|  +------------------------+  |
|                              |
|  same 2.5rem spacing         |
|                              |
|  +------------------------+  |
|  |                        |  |
|  |  div.blog-post         |  |
|  |                        |  |
|  +------------------------+  |
|                              |
+------------------------------+
```

The Owl utility for Tailwind CSS uses the `margin` config so a default install will have access to the following utility classes,

```css
.o-0 > * + * { margin-top: 0; }
.o-1 > * + * { margin-top: 0.25rem; }
.o-2 > * + * { margin-top: 0.5rem; }
.o-3 > * + * { margin-top: 0.75rem; }
.o-4 > * + * { margin-top: 1rem; }
.o-5 > * + * { margin-top: 1.25rem; }
.o-6 > * + * { margin-top: 1.5rem; }
.o-8 > * + * { margin-top: 2rem; }
.o-10 > * + * { margin-top: 2.5rem; }
.o-12 > * + * { margin-top: 3rem; }
.o-16 > * + * { margin-top: 4rem; }
.o-20 > * + * { margin-top: 5rem; }
.o-24 > * + * { margin-top: 6rem; }
.o-32 > * + * { margin-top: 8rem; }
.o-40 > * + * { margin-top: 10rem; }
.o-48 > * + * { margin-top: 12rem; }
.o-56 > * + * { margin-top: 14rem; }
.o-64 > * + * { margin-top: 16rem; }
.o-px > * + * { margin-top: 1px; }
``` 

## Installation

```bash
$ npm i --save-dev tailwindcss-owl
```

## Usage

Within your `tailwind.config.js` file,

```js
plugins: [
  // ... other plugins
  require('tailwindcss-owl')
  // ... other plugins
],
```

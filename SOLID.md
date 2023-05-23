# SolidJS

*The world beyond components*

*by Ryan Carniato*

[https://github.com/solidjs/solid](https://github.com/solidjs/solid)

## Todo example

With react no matter what you do with the component: the component re-render but it's ok because we have the virtual dom

## React vs Svelte 

![React vs Svelte](https://pbs.twimg.com/media/E_VrKIOWEAUA4hC.jpg)
Svelte: let count = 0

## Hello world

* Signals - atomic state
* Derivation
* Effects

With the 3 pieces you can model whatever you like

### create Signal

function greet(name) {

}

...

### create Effect

push to the stack

look at the top of the stack and pop out the last item pushed

Three states:
* Still
* Possibly Still
* ???

### Primitives

1. createMemo
2. createStore
3. createResource

### Hands on

update the textContent is faster

create a simple function that return a JSX

document.getElementById('myapp').append(...Myfunction());

SolidJS is about primitives not framework

## Things to look at

* [ExcaliDraw](https://excalidraw.com/)
* [Solid Movie](https://solid-movies.app)
* [tastejs movie](https://tastejs.com/movies/)
* [Astro](https://astro.build/)

## Next

* Create an universal router that works accross framework

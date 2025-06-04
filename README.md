# Overview
 This library provides a wrapper around HTML5 elements that allows you to pass in a `tailwind` property for className rollups.
 This allows us to remove duplicate classNames while allowing you to override base classNames through inheritance.
 The end result is fewer libraries (no need for clsx or classnames) and an HTML-library built for a composable, and organized, DX.

## Prerequisites
- Node
- React
- Tailwind

## Quickstart
- npm i @ehubbell/html

## Usage
```tsx
import { Button } from '@ehubbell/html';

const Btn = ({ type, onClick, tailwind, className }) => (
  <Button
    type={type}
    onClick={onClick}
    tailwind={{
      bgColor: 'bg-blue-500',
      color: 'text-white',
      fontSize: 'text-sm',
      hover: 'hover:bg-blue-400',
      spacing: 'px-3 py-1.5',
      ...tailwind
    }}
    className={className ? className : 'btn-primary'}>
    Click me
  </Button>
);
```

## How it works
- The library wraps core HTML5 element
- Every element accepts it's standard HTML attributes
- Every element also accepts two additional properties `[name, tailwind]`
- The `name` property gets converted to the `data-name` attibute for better DOM tree navigation
- The `tailwind` property accepts an arbitrary object, defined by you, containing tailwind className values
- The library will then rollup that object into a `className` string and pass it to the HTML element while removing duplicates
- The end result is a fun, composable and organized DX bjuilt for tailwind projects.


## Supported HTML Elements

| HTML Elements (A–C)      | HTML Elements (D–H)      | HTML Elements (I–M)      | HTML Elements (N–S)       | HTML Elements (T–Z)        |
|--------------------------|--------------------------|---------------------------|----------------------------|-----------------------------|
| `<a>`                    | `<data>`                 | `<iframe>`                | `<nav>`                    | `<table>`                   |
| `<abbr>`                 | `<datalist>`             | `<img>`                   | `<noscript>`               | `<tbody>`                  |
| `<address>`              | `<dd>`                   | `<input>`                 | `<object>`                 | `<td>`                      |
| `<area>`                 | `<del>`                  | `<ins>`                   | `<ol>`                     | `<template>`               |
| `<article>`              | `<details>`              | `<kbd>`                   | `<optgroup>`               | `<textarea>`               |
| `<aside>`                | `<dfn>`                  | `<label>`                 | `<option>`                 | `<tfoot>`                  |
| `<audio>`                | `<dialog>`               | `<legend>`                | `<output>`                 | `<th>`                      |
| `<b>`                    | `<div>`                  | `<li>`                    | `<p>`                      | `<thead>`                  |
| `<base>`                 | `<dl>`                   | `<link>`                  | `<param>`                  | `<time>`                   |
| `<bdi>`                  | `<dt>`                   | `<main>`                  | `<picture>`                | `<title>`                  |
| `<bdo>`                  | `<em>`                   | `<map>`                   | `<pre>`                    | `<tr>`                      |
| `<blockquote>`           | `<embed>`                | `<mark>`                  | `<progress>`               | `<track>`                  |
| `<body>`                 | `<fieldset>`             | `<menu>`                  | `<q>`                      | `<u>`                       |
| `<br>`                   | `<figcaption>`           | `<meta>`                  | `<rp>`                     | `<ul>`                      |
| `<button>`               | `<figure>`               | `<meter>`                 | `<rt>`                     | `<var>`                     |
| `<canvas>`               | `<footer>`               |                           | `<ruby>`                   | `<video>`                  |
| `<caption>`              | `<form>`                 |                           | `<s>`                      | `<wbr>`                     |
| `<cite>`                 | `<h1>` to `<h6>`         |                           | `<samp>`                   |                             |
| `<code>`                 | `<head>`                 |                           | `<script>`                 |                             |
|                          | `<header>`               |                           | `<section>`                |                             |
|                          | `<hr>`                   |                           | `<select>`                 |                             |
|                          |                          |                           | `<small>`                  |                             |
|                          |                          |                           | `<source>`                 |                             |
|                          |                          |                           | `<span>`                   |                             |
|                          |                          |                           | `<strong>`                 |                             |
|                          |                          |                           | `<style>`                  |                             |
|                          |                          |                           | `<sub>`                    |                             |
|                          |                          |                           | `<summary>`                |                             |
|                          |                          |                           | `<sup>`                    |                             |

## Development
- git clone
- npm install
- npm start
- npm link
- switch to project
- npm link <package_name>

## Deployment
- npm version [major|minor|patch]
- npm run build
- npm publish
- npm run git

## Inspiration
- tailwind
- @playbooks/ui
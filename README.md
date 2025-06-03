# Overview
 An HTML component library with Tailwind rollups.

 ## Description
 This library provides a wrapper around core HTML5 elements so you can pass in a `tailwind` property.
 The library offers a type system for the `tailwind` property so we can properly rollup the provided
 classNames and remove duplicates. The benefit is fewer libraries (no need for `classnames` or `clsx`)
 and a smarter, better rollup system that's tailwind-friendly and highly composable.

## Prerequisites
- Node
- React
- Tailwind

## Quickstart
- npm i @ehubbell/html --save-dev

## Usage
```tsx
import { Button, classBuilder } from '@ehubbell/html';

const Btn = ({ type, onClick, tailwind, className }) => (
  <Button
    type={type}
    onClick={onClick}
    tailwind={{
      bgColor: 'bg-blue-500',
      color: 'text-gray-700 dark:text-gray-300',
      fontSize: 'text-sm',
      spacing: 'px-3 py-1.5',
      ...tailwind
    }}
    className={className ? className : 'btn-primary'}>
    Click me
  </Button>
);
```

## How it works
- The library wraps core HTML element
- Every element comes with an optional `base` value powered by your theme
- Every element computes three core properties `[name, tailwind, className]`
- Every element also accepts it's standard properties
- The library then builds your class schedule, per element, using a simple roll up system

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
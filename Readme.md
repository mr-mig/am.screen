Structural abstraction for ambitious framework.

Build on top of AngularJS.

Represents a top-level 'single page' screen.  
Consists of a controller, template and route url binding.

## What is 'screen'?

Screen is a high-level building block for your page.  
It represents a **single page** in your SPA application, related to some URL.

Screen is basically everything you see on your screen.

It is made of a template (with composites) and a controller, bounded to some URL in it's angular.module.
 
## How do I use it?

You should use screen to define a single addressable page of your application.

## Conventions

* Screen MUST contain composites, but no elements (controlled by user).
* Screen MUST bind itself to some URL (controlled by framework).
* Screen MUST contain a controller (controlled by framework).
* Screen MUST register all channels used on this page (controlled by framework. Warning will be issued for misused channels).
* Screen CAN have global `channel` definitions.
* Screen CAN have `link` definitions to control composites' relations.

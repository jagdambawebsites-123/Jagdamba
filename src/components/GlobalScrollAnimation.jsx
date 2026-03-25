"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalScrollAnimation() {
    const pathname = usePathname();

    useEffect(() => {
        // 1. Initial Styles Setup
        const styleId = "global-scroll-animation-styles";
        if (!document.getElementById(styleId)) {
            const style = document.createElement("style");
            style.id = styleId;
            style.innerHTML = `
        .global-fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.4s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
        }
        .global-fade-in.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .global-fade-in {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `;
            document.head.appendChild(style);
        }

        // 2. Intersection Observer for scroll triggers
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -50px 0px', // trigger slightly before bottom
            threshold: 0.05
        });

        // 3. Keep track of observed elements so we don't observe multiple times
        const observedElements = new WeakSet();

        const addAnimationToElement = (el) => {
            if (observedElements.has(el)) return;

            // Skip nav/header elements to avoid weird UI behavior at the top
            if (el.closest('nav') || el.closest('header')) return;

            // Skip elements that might already have other conflicting animations or shouldn't be animated
            // For instance, SVGs inside icons, etc. The querySelector already limits this.

            el.classList.add('global-fade-in');
            intersectionObserver.observe(el);
            observedElements.add(el);
        };

        // 4. Find all existing elements and observe them
        const initElements = () => {
            const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, img');
            elements.forEach(addAnimationToElement);
        };

        // Delay initial check slightly to let React render completely
        const timeoutId = setTimeout(initElements, 100);

        // 5. Setup MutationObserver to catch dynamically added elements (e.g. from React Suspense, infinite scrolling, etc.)
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // ELEMENT_NODE
                        // Check the node itself
                        if (node.matches('h1, h2, h3, h4, h5, h6, p, img')) {
                            addAnimationToElement(node);
                        }
                        // Check its children
                        const children = node.querySelectorAll('h1, h2, h3, h4, h5, h6, p, img');
                        children.forEach(addAnimationToElement);
                    }
                });
            });
        });

        // Start observing DOM changes safely
        if (document.body) {
            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
        }

        return () => {
            clearTimeout(timeoutId);
            intersectionObserver.disconnect();
            mutationObserver.disconnect();
        };
    }, [pathname]);

    return null;
}

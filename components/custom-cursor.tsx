"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isOverDescription, setIsOverDescription] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseOut = () => setIsVisible(false)
    const handleDescriptionEnter = () => setIsOverDescription(true)
    const handleDescriptionLeave = () => setIsOverDescription(false)

    // Add event listeners
    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseleave", () => {
      setIsHovering(false);
      setIsOverDescription(false);
      setIsVisible(false);
    });
    document.addEventListener("mousedown", () => {
      setIsHovering(false);
      setIsOverDescription(false);
    });
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Function to attach hover listeners
    const attachHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-interactive',
      )
      const descriptionElements = document.querySelectorAll(
        'p, .description, [data-description="true"]',
      )
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })
      descriptionElements.forEach((el) => {
        el.addEventListener("mouseenter", handleDescriptionEnter)
        el.addEventListener("mouseleave", handleDescriptionLeave)
      })
      return { interactiveElements, descriptionElements }
    }

    // Initial attach
    let listeners = attachHoverListeners();

    // MutationObserver to re-attach listeners on DOM changes
    const observer = new MutationObserver(() => {
      // Remove old listeners
      listeners.interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      listeners.descriptionElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleDescriptionEnter)
        el.removeEventListener("mouseleave", handleDescriptionLeave)
      })
      // Attach new listeners
      listeners = attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mouseleave", () => {
        setIsHovering(false);
        setIsOverDescription(false);
        setIsVisible(false);
      });
      document.removeEventListener("mousedown", () => {
        setIsHovering(false);
        setIsOverDescription(false);
      });
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      listeners.interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      listeners.descriptionElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleDescriptionEnter)
        el.removeEventListener("mouseleave", handleDescriptionLeave)
      })
      observer.disconnect();
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        className={`custom-cursor ${isClicking ? "click" : ""} ${isOverDescription ? "hidden" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      <div
        className={`cursor-shadow ${isHovering || isOverDescription ? "expanded" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  )
}

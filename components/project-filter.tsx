"use client"

import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"

interface FilterOption {
  id: string
  label: string
}

interface ProjectFilterProps {
  filters: FilterOption[]
  onFilterChange: (selectedFilters: Set<string>) => void
  className?: string
  title?: string
}

function useIsDark() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return false
  }

  return resolvedTheme === "dark"
}

function badgeClass({ active = false, useDark = false }) {
  const base =
    "rounded-full px-3 py-1.5 text-sm whitespace-nowrap inline-flex items-center justify-center select-none transition-all duration-200 transform cursor-interactive"
  const focus =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400"

  // LIGHT theme styles
  const lightSolidActive = "bg-orange-500 text-white ring-1 ring-orange-500/30 hover:bg-orange-600"
  const lightSolidInactive = "filter-btn-inactive"

  // DARK theme styles
  const darkSolidActive = "bg-orange-500 text-white ring-1 ring-orange-500/30 hover:bg-orange-600"
  const darkSolidInactive = "filter-btn-inactive"

  let style = ""
  if (!useDark) style = active ? lightSolidActive : lightSolidInactive
  else style = active ? darkSolidActive : darkSolidInactive

  return [base, style, focus].join(" ")
}

function FilterBadge({ 
  id, 
  label, 
  active, 
  onToggle 
}: { 
  id: string
  label: string
  active: boolean
  onToggle: (id: string) => void
}) {
  const isDark = useIsDark()

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onToggle(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onToggle(id)
        }
      }}
      className={badgeClass({ active, useDark: isDark })}
    >
      {label}
    </button>
  )
}

export default function ProjectFilter({ 
  filters, 
  onFilterChange, 
  className = "",
  title 
}: ProjectFilterProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  function toggleFilter(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function clearFilters() {
    setSelected(new Set())
  }

  useEffect(() => {
    onFilterChange(selected)
  }, [selected, onFilterChange])

  return (
    <div className={`space-y-4 ${className}`}>
      {title && (
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      )}
      
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <FilterBadge
            key={filter.id}
            id={filter.id}
            label={filter.label}
            active={selected.has(filter.id)}
            onToggle={toggleFilter}
          />
        ))}
      </div>

      {selected.size > 0 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {selected.size} filter{selected.size !== 1 ? 's' : ''} active
          </div>
          <button
            onClick={clearFilters}
            className="text-sm text-orange-500 hover:text-orange-600 transition-colors cursor-interactive"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  )
}
"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { translations } from "@/lib/i18n"
import { useEffect, useState } from "react"

export default function AnalyticsGuide() {
  const [open, setOpen] = useState(false)
  const [hasSeenGuide, setHasSeenGuide] = useLocalStorage("has-seen-analytics-guide", true) // Default to true, dialog won't show
  const language = "en" // Set language default to English
  const t = translations[language] // Use English translations

  useEffect(() => {
    if (!hasSeenGuide) {
      setOpen(true)
    }
  }, [hasSeenGuide])

  const handleClose = () => {
    setOpen(false)
    setHasSeenGuide(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{t.welcomeToAnalytics}</DialogTitle>
          <DialogDescription>{t.analyticsDescription}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">1. {t.timeAnalytics}</h3>
            <p className="text-sm text-muted-foreground">{t.timeAnalyticsDesc}</p>
          </div>
          <div>
            <h3 className="font-medium">2. {t.importExport}</h3>
            <p className="text-sm text-muted-foreground">{t.importExportDesc}</p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleClose}>{t.getStarted}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
"use client"

import { useEffect, useState } from "react";

export type Language = "en" | "bn";

export const translations = {
  en: {
    calendar: "Calendar",
    oneCalendar: "Pocket Calendar",
    createEvent: "Create Event",
    myCalendars: "My Calendars",
    addNewCalendar: "Add New Calendar",
    day: "Day",
    week: "Week",
    month: "Month",
    analytics: "Analytics",
    searchEvents: "Search events",
    title: "Title",
    startTime: "Start Time",
    endTime: "End Time",
    endTimeError: "End time must be after start time",
    allDay: "All Day",
    location: "Location",
    participants: "Participants",
    participantsPlaceholder: "Enter email addresses separated by commas",
    description: "Description",
    color: "Color",
    notification: "Notification",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    update: "Update",
    minutesBefore: "{minutes} minutes before",
    hourBefore: "{hours} hour before",
    sunday: "Sunday",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    settings: "Settings",
    language: "Language",
    firstDayOfWeek: "First Day of Week",
    timezone: "Timezone",
    selectCalendar: "Select calendar",
    selectColor: "Select color",
    selectNotification: "Select notification time",
    atEventTime: "At event time",
    customTime: "Custom time",
    customTimeMinutes: "Minutes before event",
    eventAt: "Event at",
    view: "View",
    notificationSound: "Notification Sound",
    telegramSound: "Telegram",
    telegramSfxSound: "Telegram SFX",
    today: "Today",
    // Analytics translations
    timeAnalytics: "Time Analytics",
    timeAnalyticsDesc: "Analyze how you spend your time",
    timeDistribution: "Time Distribution",
    categoryTime: "Category Time (Hours)",
    totalEvents: "Total Events",
    mostProductiveDay: "Most Productive Day",
    mostProductiveHour: "Most Productive Hour",
    noData: "No data",
    week: "Week",
    month: "Month",
    year: "Year",
    thisWeek: "This Week",
    thisMonth: "This Month",
    thisYear: "This Year",
    createCategories: "Create Categories",
    categoryName: "Category Name",
    keywords: "Keywords",
    addKeyword: "Add Keyword",
    addCategory: "Add Category",
    existingCategories: "Existing Categories",
    importExport: "Import & Export",
    importCalendar: "Import Calendar",
    exportCalendar: "Export Calendar",
    fileImport: "File Import",
    urlImport: "URL Import",
    selectCalendarFile: "Select Calendar File",
    calendarUrl: "Calendar URL",
    supportedFormats: "Supported formats: .ics (iCalendar), .json and .csv",
    enterUrl: "Enter URL to .ics or .json file",
    debugMode: "Enable Debug Mode",
    debugInfo: "Debug Info",
    importing: "Importing...",
    import: "Import",
    exportFormat: "Export Format",
    dateRange: "Date Range",
    allEvents: "All Events",
    futureEvents: "Future Events",
    pastEvents: "Past Events",
    last30Days: "Last 30 Days",
    last90Days: "Last 90 Days",
    includeCompleted: "Include Completed Events",
    exporting: "Exporting...",
    export: "Export",
    importSuccess: "Successfully imported {count} events",
    exportSuccess: "Successfully exported {count} events",
    importWarning: "No events could be parsed from the file, please check the format",
    importError: "Error importing calendar data: {error}",
    exportError: "Error exporting calendar data",
    googleCalendarGuide: "Google Calendar Import Guide",
    googleCalendarGuideText:
      "When importing from Google Calendar, first select 'Settings > Import & Export > Export' in Google Calendar, download the .ics file and import it here. Do not use the 'Get Public URL' option as that is for sharing, not exporting.",
    iCalendarFormat: "iCalendar Format",
    backupData: "Backup Your Data",
    crossPlatformSync: "Cross-Platform Sync",
    iCalendarFormatDesc: "Standard format compatible with Google Calendar, Outlook, and Apple Calendar.",
    backupDataDesc: "Export your calendar data as a backup to ensure you don't lose important events.",
    crossPlatformSyncDesc:
      "Sync your calendar data across different devices and applications to maintain consistent scheduling.",
    importExportTips: "Import & Export Tips",
    tip1: "Exported iCalendar (.ics) files can be directly imported into most calendar applications",
    tip2: "CSV format is suitable for data exchange with spreadsheet applications",
    tip3: "JSON format contains the most complete event data, suitable for backup",
    tip4: "Importing a large number of events may take some time, please be patient",
    tip5: "Regularly exporting your calendar data as a backup is a good habit",
    dateAndTime: "Date and Time",
    copy: "Copy",
    eventDuplicated: "Event duplicated",
    welcomeToOneCalendar: "Welcome to Pocket Calendar",
    powerfulCalendarApp:
      "This is a powerful calendar application that helps you manage your schedule and import/export calendar data.",
    basicFeatures: "Basic Features",
    importExportFeatures: "Import & Export",
    createEventGuide: "Create Event",
    createEventDesc:
      'Click the "Create Event" button at the top of the sidebar, or directly click on a time slot in the calendar to create a new event.',
    switchViewGuide: "Switch View",
    switchViewDesc:
      "Use the dropdown menu in the top navigation bar to switch between day, week, month, and analytics views.",
    manageCalendarCategoriesGuide: "Manage Calendar Categories",
    manageCalendarCategoriesDesc:
      'In the "My Calendars" section of the sidebar, you can add, edit, and delete different calendar categories.',
    setReminderGuide: "Set Reminders",
    setReminderDesc:
      "When creating or editing an event, you can set a reminder time, and the system will notify you before the event starts.",
    importExportGuide: "Import & Export Calendar Data",
    importExportDesc:
      "Exchange data with other calendar applications, import or export your calendar events in various formats.",
    mainFeatures: "Main features",
    importExportFeaturesList1: "Import events from iCalendar (.ics), JSON, and CSV files",
    importExportFeaturesList2: "Export your calendar data in different formats for backup or sharing",
    importExportFeaturesList3:
      "Sync with other calendar applications like Google Calendar, Outlook, and Apple Calendar",
    getStarted: "Get Started",
    nextStep: "Next",
    previousStep: "Previous",
    startUsing: "Start Using",
    hours: "hours",
    events: "events",
    uncategorized: "Uncategorized",
    loading: "Loading...",
    welcomeToAnalytics: "Welcome to Advanced Analytics",
    analyticsDescription: "We've added powerful features to help you better manage your time and schedule",
    unnamedEvent: "Unnamed Event",
    enableShortcuts: "Enable Keyboard Shortcuts",
    availableShortcuts: "Available Shortcuts",
    defaultView: "Default View",
    newEvent: "New Event",
    searchEvents: "Search Events",
    today: "Today",
    dayView: "Day View",
    weekView: "Week View",
    monthView: "Month View",
    nextPeriod: "Next Period",
    previousPeriod: "Previous Period",
    userProfile: "User Profile",
    backupData: "Backup Data",
    restoreData: "Restore Data",
    backupDescription: "Create a backup of your calendar data. You'll need this password to restore your data later.",
    restoreDescription: "Restore your calendar data from a previous backup. This will replace your current data.",
    password: "Password",
    confirmPassword: "Confirm Password",
    enterPassword: "Enter a password",
    confirmYourPassword: "Confirm your password",
    passwordRequirements:
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
    passwordRequirementsHint:
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
    passwordsDoNotMatch: "Passwords do not match",
    passwordRequired: "Password is required",
    backupSuccessful: "Backup Successful",
    dataBackedUpSuccessfully: "Your data has been backed up successfully.",
    backupFailed: "Backup Failed",
    restoreSuccessful: "Restore Successful",
    dataRestoredSuccessfully: "Your data has been restored successfully.",
    restoreFailed: "Restore Failed",
    backupNotFound: "Backup not found. Please check your password.",
    unknownError: "An unknown error occurred",
    cancel: "Cancel",
    backup: "Backup",
    restore: "Restore",
    processing: "Processing...",
    enterBackupPassword: "Enter your backup password",
    restoreWarning: "Warning: This will replace all your current data with the backup data.",
    replaceExistingData: "Replace existing data?",
    mergeData: "Merge with existing data",
    autoBackupTitle: "Enable Auto-Backup?",
    autoBackupDescription:
      "Would you like to automatically backup your data with this password whenever changes are made?",
    enableAutoBackup: "Enable Auto-Backup",
    autoBackupEnabled: "Auto-Backup Enabled",
    autoBackupDisabled: "Auto-Backup Disabled",
    logout: "Logout",
    share: "Share",
    shareEvent: "Share Event",
    nickname: "Nickname",
    enterNickname: "Enter your nickname",
    shareLink: "Share Link",
    copyLink: "Copy Link",
    linkCopied: "Link copied to clipboard",
    manageShares: "Manage Shares",
    deleteShare: "Delete Share",
    sharedBy: "Shared by",
    noShares: "No shared events",
    shareDeleted: "Share deleted successfully",
    bookmarks: "Bookmarks",
    bookmarked: "Bookmarked",
    bookmark: "Bookmark",
    unbookmark: "Remove Bookmark",
    bookmarkAdded: "Event bookmarked",
    bookmarkRemoved: "Bookmark Removed",
    noBookmarks: "You haven't bookmarked any events yet",
    searchBookmarks: "Search bookmarks...",
    noMatchingBookmarks: "No matching bookmarks found",
    manageBookmarks: "Manage Bookmarks",
    eventRemovedFromBookmarks: "Event has been removed from your bookmarks",
    tip: "Tip",
    dontShowAgain: "Don't show again",
    qrCode: "QR Code",
    downloadQRCode: "Download QR Code",
    qrCodeDownloaded: "QR Code Downloaded",
    savedToDevice: "Saved to your device",
    scanQRCodeToView: "Scan this QR code to view the event",
    autoSyncEnabled: "Auto-Sync Enabled",
    autoSyncEnabledDesc: "Your data will be automatically synced every 5 minutes",
    autoSyncDisabled: "Auto-Sync Disabled",
    autoSyncDisabledDesc: "Your data will no longer be automatically synced",
  },
  bn: {
    calendar: "ক্যালেন্ডার",
    oneCalendar: "পকেট ক্যালেন্ডার",
    createEvent: "ইভেন্ট তৈরি করুন",
    myCalendars: "আমার ক্যালেন্ডার",
    addNewCalendar: "নতুন ক্যালেন্ডার যোগ করুন",
    day: "দিন",
    week: "সপ্তাহ",
    month: "মাস",
    analytics: "বিশ্লেষণ",
    searchEvents: "ইভেন্ট খুঁজুন",
    title: "শিরোনাম",
    startTime: "শুরুর সময়",
    endTime: "শেষের সময়",
    endTimeError: "শেষের সময় শুরুর সময়ের পরে হতে হবে",
    allDay: "সারাদিন",
    location: "অবস্থান",
    participants: "অংশগ্রহণকারী",
    participantsPlaceholder: "কমা দিয়ে আলাদা করে ইমেইল ঠিকানা লিখুন",
    description: "বিবরণ",
    color: "রঙ",
    notification: "বিজ্ঞপ্তি",
    save: "সংরক্ষণ করুন",
    cancel: "বাতিল করুন",
    delete: "মুছুন",
    update: "আপডেট করুন",
    minutesBefore: "{minutes} মিনিট আগে",
    hourBefore: "{hours} ঘন্টা আগে",
    sunday: "রবিবার",
    monday: "সোমবার",
    tuesday: "মঙ্গলবার",
    wednesday: "বুধবার",
    thursday: "বৃহস্পতিবার",
    friday: "শুক্রবার",
    saturday: "শনিবার",
    settings: "সেটিংস",
    language: "ভাষা",
    firstDayOfWeek: "সপ্তাহের প্রথম দিন",
    timezone: "টাইমজোন",
    selectCalendar: "ক্যালেন্ডার নির্বাচন করুন",
    selectColor: "রঙ নির্বাচন করুন",
    selectNotification: "বিজ্ঞপ্তির সময় নির্বাচন করুন",
    atEventTime: "ইভেন্টের সময়",
    customTime: "কাস্টম সময়",
    customTimeMinutes: "ইভেন্টের কয়েক মিনিট আগে",
    eventAt: "ইভেন্ট সময়",
    view: "দেখুন",
    notificationSound: "বিজ্ঞপ্তির শব্দ",
    telegramSound: "টেলিগ্রাম",
    telegramSfxSound: "টেলিগ্রাম এসএফএক্স",
    today: "আজ",
    // Analytics translations
    timeAnalytics: "সময় বিশ্লেষণ",
    timeAnalyticsDesc: "আপনার সময় কীভাবে ব্যয় করেন তা বিশ্লেষণ করুন",
    timeDistribution: "সময় বন্টন",
    categoryTime: "বিভাগ সময় (ঘন্টা)",
    totalEvents: "মোট ইভেন্ট",
    mostProductiveDay: "সবচেয়ে উৎপাদনশীল দিন",
    mostProductiveHour: "সবচেয়ে উৎপাদনশীল ঘন্টা",
    noData: "কোন ডেটা নেই",
    week: "সপ্তাহ",
    month: "মাস",
    year: "বছর",
    thisWeek: "এই সপ্তাহ",
    thisMonth: "এই মাস",
    thisYear: "এই বছর",
    createCategories: "বিভাগ তৈরি করুন",
    categoryName: "বিভাগের নাম",
    keywords: "কীওয়ার্ড",
    addKeyword: "কীওয়ার্ড যোগ করুন",
    addCategory: "বিভাগ যোগ করুন",
    existingCategories: "বিদ্যমান বিভাগ",
    importExport: "ইমপোর্ট এবং এক্সপোর্ট",
    importCalendar: "ক্যালেন্ডার ইমপোর্ট করুন",
    exportCalendar: "ক্যালেন্ডার এক্সপোর্ট করুন",
    fileImport: "ফাইল ইমপোর্ট",
    urlImport: "ইউআরএল ইমপোর্ট",
    selectCalendarFile: "ক্যালেন্ডার ফাইল নির্বাচন করুন",
    calendarUrl: "ক্যালেন্ডার ইউআরএল",
    supportedFormats: "সমর্থিত ফরম্যাট: .ics (আইক্যালেন্ডার), .json এবং .csv",
    enterUrl: ".ics বা .json ফাইলের ইউআরএল লিখুন",
    debugMode: "ডিবাগ মোড সক্রিয় করুন",
    debugInfo: "ডিবাগ তথ্য",
    importing: "ইমপোর্ট হচ্ছে...",
    import: "ইমপোর্ট",
    exportFormat: "এক্সপোর্ট ফরম্যাট",
    dateRange: "তারিখের পরিসর",
    allEvents: "সব ইভেন্ট",
    futureEvents: "ভবিষ্যতের ইভেন্ট",
    pastEvents: "অতীতের ইভেন্ট",
    last30Days: "গত ৩০ দিন",
    last90Days: "গত ৯০ দিন",
    includeCompleted: "সম্পূর্ণ ইভেন্ট অন্তর্ভুক্ত করুন",
    exporting: "এক্সপোর্ট হচ্ছে...",
    export: "এক্সপোর্ট",
    importSuccess: "{count}টি ইভেন্ট সফলভাবে ইমপোর্ট করা হয়েছে",
    exportSuccess: "{count}টি ইভেন্ট সফলভাবে এক্সপোর্ট করা হয়েছে",
    importWarning: "ফাইল থেকে কোন ইভেন্ট পার্স করা যায়নি, ফরম্যাট চেক করুন",
    importError: "ক্যালেন্ডার ডেটা ইমপোর্ট করতে ত্রুটি: {error}",
    exportError: "ক্যালেন্ডার ডেটা এক্সপোর্ট করতে ত্রুটি",
    googleCalendarGuide: "Google Calendar Import Guide",
    googleCalendarGuideText:
      "When importing from Google Calendar, first select 'Settings > Import & Export > Export' in Google Calendar, download the .ics file and import it here. Do not use the 'Get Public URL' option as that is for sharing, not exporting.",
    iCalendarFormat: "iCalendar Format",
    backupData: "Backup Your Data",
    crossPlatformSync: "Cross-Platform Sync",
    iCalendarFormatDesc: "Standard format compatible with Google Calendar, Outlook, and Apple Calendar.",
    backupDataDesc: "Export your calendar data as a backup to ensure you don't lose important events.",
    crossPlatformSyncDesc:
      "Sync your calendar data across different devices and applications to maintain consistent scheduling.",
    importExportTips: "Import & Export Tips",
    tip1: "Exported iCalendar (.ics) files can be directly imported into most calendar applications",
    tip2: "CSV format is suitable for data exchange with spreadsheet applications",
    tip3: "JSON format contains the most complete event data, suitable for backup",
    tip4: "Importing a large number of events may take some time, please be patient",
    tip5: "Regularly exporting your calendar data as a backup is a good habit",
    dateAndTime: "Date and Time",
    copy: "Copy",
    eventDuplicated: "Event duplicated",
    welcomeToOneCalendar: "Welcome to Pocket Calendar",
    powerfulCalendarApp:
      "This is a powerful calendar application that helps you manage your schedule and import/export calendar data.",
    basicFeatures: "Basic Features",
    importExportFeatures: "Import & Export",
    createEventGuide: "Create Event",
    createEventDesc:
      'Click the "Create Event" button at the top of the sidebar, or directly click on a time slot in the calendar to create a new event.',
    switchViewGuide: "Switch View",
    switchViewDesc:
      "Use the dropdown menu in the top navigation bar to switch between day, week, month, and analytics views.",
    manageCalendarCategoriesGuide: "Manage Calendar Categories",
    manageCalendarCategoriesDesc:
      'In the "My Calendars" section of the sidebar, you can add, edit, and delete different calendar categories.',
    setReminderGuide: "Set Reminders",
    setReminderDesc:
      "When creating or editing an event, you can set a reminder time, and the system will notify you before the event starts.",
    importExportGuide: "Import & Export Calendar Data",
    importExportDesc:
      "Exchange data with other calendar applications, import or export your calendar events in various formats.",
    mainFeatures: "Main features",
    importExportFeaturesList1: "Import events from iCalendar (.ics), JSON, and CSV files",
    importExportFeaturesList2: "Export your calendar data in different formats for backup or sharing",
    importExportFeaturesList3:
      "Sync with other calendar applications like Google Calendar, Outlook, and Apple Calendar",
    getStarted: "Get Started",
    nextStep: "Next",
    previousStep: "Previous",
    startUsing: "Start Using",
    hours: "hours",
    events: "events",
    uncategorized: "Uncategorized",
    loading: "Loading...",
    welcomeToAnalytics: "Welcome to Advanced Analytics",
    analyticsDescription: "We've added powerful features to help you better manage your time and schedule",
    unnamedEvent: "Unnamed Event",
    enableShortcuts: "Enable Keyboard Shortcuts",
    availableShortcuts: "Available Shortcuts",
    defaultView: "Default View",
    newEvent: "New Event",
    searchEvents: "Search Events",
    today: "Today",
    dayView: "Day View",
    weekView: "Week View",
    monthView: "Month View",
    nextPeriod: "Next Period",
    previousPeriod: "Previous Period",
    userProfile: "User Profile",
    backupData: "Backup Data",
    restoreData: "Restore Data",
    backupDescription: "Create a backup of your calendar data. You'll need this password to restore your data later.",
    restoreDescription: "Restore your calendar data from a previous backup. This will replace your current data.",
    password: "Password",
    confirmPassword: "Confirm Password",
    enterPassword: "Enter a password",
    confirmYourPassword: "Confirm your password",
    passwordRequirements:
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
    passwordRequirementsHint:
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
    passwordsDoNotMatch: "Passwords do not match",
    passwordRequired: "Password is required",
    backupSuccessful: "Backup Successful",
    dataBackedUpSuccessfully: "Your data has been backed up successfully.",
    backupFailed: "Backup Failed",
    restoreSuccessful: "Restore Successful",
    dataRestoredSuccessfully: "Your data has been restored successfully.",
    restoreFailed: "Restore Failed",
    backupNotFound: "Backup not found. Please check your password.",
    unknownError: "An unknown error occurred",
    cancel: "Cancel",
    backup: "Backup",
    restore: "Restore",
    processing: "Processing...",
    enterBackupPassword: "Enter your backup password",
    restoreWarning: "Warning: This will replace all your current data with the backup data.",
    replaceExistingData: "Replace existing data?",
    mergeData: "Merge with existing data",
    autoBackupTitle: "Enable Auto-Backup?",
    autoBackupDescription:
      "Would you like to automatically backup your data with this password whenever changes are made?",
    enableAutoBackup: "Enable Auto-Backup",
    autoBackupEnabled: "Auto-Backup Enabled",
    autoBackupDisabled: "Auto-Backup Disabled",
    logout: "Logout",
    share: "Share",
    shareEvent: "Share Event",
    nickname: "Nickname",
    enterNickname: "Enter your nickname",
    shareLink: "Share Link",
    copyLink: "Copy Link",
    linkCopied: "Link copied to clipboard",
    manageShares: "Manage Shares",
    deleteShare: "Delete Share",
    sharedBy: "Shared by",
    noShares: "No shared events",
    shareDeleted: "Share deleted successfully",
    bookmarks: "Bookmarks",
    bookmarked: "Bookmarked",
    bookmark: "Bookmark",
    unbookmark: "Remove Bookmark",
    bookmarkAdded: "Event bookmarked",
    bookmarkRemoved: "Bookmark Removed",
    noBookmarks: "You haven't bookmarked any events yet",
    searchBookmarks: "Search bookmarks...",
    noMatchingBookmarks: "No matching bookmarks found",
    manageBookmarks: "Manage Bookmarks",
    eventRemovedFromBookmarks: "Event has been removed from your bookmarks",
    tip: "Tip",
    dontShowAgain: "Don't show again",
    qrCode: "QR Code",
    downloadQRCode: "Download QR Code",
    qrCodeDownloaded: "QR Code Downloaded",
    savedToDevice: "আপনার ডিভাইসে সংরক্ষিত",
    scanQRCodeToView: "ইভেন্ট দেখতে এই QR কোডটি স্ক্যান করুন",
    autoSyncEnabled: "অটো-সিঙ্ক সক্রিয় করা হয়েছে",
    autoSyncEnabledDesc: "আপনার ডেটা প্রতি ৫ মিনিটে স্বয়ংক্রিয়ভাবে সিঙ্ক করা হবে",
    autoSyncDisabled: "অটো-সিঙ্ক নিষ্ক্রিয় করা হয়েছে",
    autoSyncDisabledDesc: "আপনার ডেটা আর স্বয়ংক্রিয়ভাবে সিঙ্ক করা হবে না",
  },
}

// 检测系统语言
function detectSystemLanguage(): Language {
  if (typeof window === "undefined") {
    return "en" // Default to English
  }

  // Get browser language
  const browserLang = navigator.language.toLowerCase()

  // If browser language is Bengali (bn or bn-BD)
  if (browserLang.startsWith("bn")) {
    return "bn"
  }

  // Otherwise return English
  return "en"
}

export function useLanguage(): [Language, (lang: Language) => void] {
  const [language, setLanguageState] = useState<Language>("en") // Default to English

  // Update readLanguageFromStorage
  const readLanguageFromStorage = () => {
    const storedLanguage = localStorage.getItem("preferred-language")
    if (storedLanguage === "en" || storedLanguage === "bn") {
      return storedLanguage as Language
    }
    return detectSystemLanguage()
  }

  useEffect(() => {
    // 初始化时读取语言设置
    const storedLanguage = readLanguageFromStorage()
    setLanguageState(storedLanguage)

    // 创建一个事件监听器，当localStorage变化时触发
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "preferred-language") {
        const newLanguage = e.newValue as Language
        if (newLanguage === "en" || newLanguage === "bn") {
          setLanguageState(newLanguage)
        }
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("preferred-language", lang)
    // 触发一个自定义事件，通知其他组件语言已更改
    window.dispatchEvent(new Event("languagechange"))
  }

  return [language, setLanguage]
}

// Remove duplicate properties
const removeDuplicates = (obj: any) => {
  const seen = new Set();
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => {
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
  );
};

// Clean up translations
Object.keys(translations).forEach(lang => {
  translations[lang] = removeDuplicates(translations[lang]);
});


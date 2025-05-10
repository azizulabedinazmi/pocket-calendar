import { toast } from "sonner";

let notificationInterval: NodeJS.Timeout | null = null;

export type NOTIFICATION_SOUNDS = "telegram";

const notificationSounds: Record<NOTIFICATION_SOUNDS, string> = {
  telegram: "https://cdn.xyehr.cn/source/Voicy_Telegram_notification.mp3",
};

// Clear all notification timers
export const clearAllNotificationTimers = () => {
  if (notificationInterval) {
    clearInterval(notificationInterval);
    notificationInterval = null;
  }
};

// Send email notification
const sendEmailNotification = async (event: any) => {
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: event.participants.join(', '),
        subject: `Reminder: ${event.title}`,
        html: `
          <h2>Event Reminder</h2>
          <p><strong>Event:</strong> ${event.title}</p>
          <p><strong>Time:</strong> ${new Date(event.startDate).toLocaleString()}</p>
          <p><strong>Location:</strong> ${event.location || 'No location specified'}</p>
          ${event.description ? `<p><strong>Description:</strong> ${event.description}</p>` : ''}
          <p>This is a reminder that this event will start in ${event.notification} minutes.</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email notification');
    }
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
};

// Check pending notifications
export const checkPendingNotifications = () => {
  const now = Date.now();
  const pendingEvents = getPendingEvents(now);

  pendingEvents.forEach((event) => {
    triggerNotification(event);
    showToast(event);
    sendEmailNotification(event);
    
    // Remove the notification time after triggering to prevent duplicate notifications
    const events = JSON.parse(localStorage.getItem("events") || "[]");
    const updatedEvents = events.map((e: any) => {
      if (e.id === event.id) {
        return { ...e, notificationTime: null };
      }
      return e;
    });
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  });
};

// Get pending events
const getPendingEvents = (currentTime: number) => {
  const events = JSON.parse(localStorage.getItem("events") || "[]");
  return events.filter((event: any) => {
    // Check if the event has a notification time and if it's time to notify
    return event.notificationTime && event.notificationTime <= currentTime;
  });
};

// Play notification sound
const triggerNotification = (event: any) => {
  const sound = notificationSounds["telegram"];
  new Audio(sound).play();
};

// Show toast notification
const showToast = (event: any) => {
  toast(`${event.title}`, {
    description: event.description || "No content",
    duration: 4000,
  });
};

export const startNotificationChecking = () => {
  if (!notificationInterval) {
    notificationInterval = setInterval(() => {
      checkPendingNotifications();
    }, 30000);
  }
};

export const stopNotificationChecking = () => {
  if (notificationInterval) {
    clearInterval(notificationInterval);
    notificationInterval = null;
  }
};
// function downloadRecurringICSFile(eventDetails) {
//   const {
//     title,
//     description,
//     location,
//     startTime,
//     endTime,
//     daysOfWeek,
//     alarmMinutesBefore,
//     color,
//   } = eventDetails;

//   // Format time to the iCalendar format (HHmmss)
//   const formatTime = (time) => time.replace(":", "") + "00";

//   // Days of the week in iCalendar format
//   const daysMap = {
//     Monday: "MO",
//     Tuesday: "TU",
//     Wednesday: "WE",
//     Thursday: "TH",
//     Friday: "FR",
//     Saturday: "SA",
//     Sunday: "SU",
//   };

//   // Convert daysOfWeek to iCalendar format
//   const repeatDays = daysOfWeek.map((day) => daysMap[day]).join(",");

//   const startDateTime = `20250122T${formatTime(startTime)}`; // Start date example: Jan 22, 2025
//   const endDateTime = `20250122T${formatTime(endTime)}`;

//   // Alarm offset
//   const alarmTrigger = `-PT${alarmMinutesBefore}M`;

//   const icsContent = `
//   BEGIN:VCALENDAR
//   VERSION:2.0
//   PRODID:-//Your Organization//Your Product//EN
//   CALSCALE:GREGORIAN
//   BEGIN:VEVENT
//   SUMMARY:${title}
//   DESCRIPTION:${description}
//   LOCATION:${location}
//   DTSTART:${startDateTime}
//   DTEND:${endDateTime}
//   RRULE:FREQ=WEEKLY;BYDAY=${repeatDays}
//   BEGIN:VALARM
//   TRIGGER:${alarmTrigger}
//   ACTION:DISPLAY
//   DESCRIPTION:Reminder for ${title}
//   END:VALARM
//   COLOR:${color}  <!-- This is not standard, but supported in some systems -->
//   END:VEVENT
//   END:VCALENDAR`.trim();

//   // Create a Blob object
//   const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });

//   // Create a download link
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = "math141.ics";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }

// // Event details
// const eventDetails = {
//   title: "Math 141",
//   description: "This is math class room 10",
//   location: "Room 10",
//   startTime: "13:30", // 1:30 PM
//   endTime: "14:45", // 2:45 PM
//   daysOfWeek: ["Monday", "Wednesday", "Friday"],
//   alarmMinutesBefore: 30, // Alarm 30 minutes before
//   color: "red", // Optional (not standard in iCalendar)
// };

// // Call the function to create and download the .ics file
// downloadRecurringICSFile(eventDetails);

function downloadRecurringICSFile(eventDetailsList, fileName) {
  const formatTime = (time) => time.replace(":", "") + "00";

  const daysMap = {
    Monday: "MO",
    Tuesday: "TU",
    Wednesday: "WE",
    Thursday: "TH",
    Friday: "FR",
    Saturday: "SA",
    Sunday: "SU",
  };

  const generateEvent = (eventDetails) => {
    const {
      title,
      description,
      location,
      startTime,
      endTime,
      daysOfWeek,
      alarmMinutesBefore,
    } = eventDetails;

    const startDateTime = `20250122T${formatTime(startTime)}`; // Start date
    const endDateTime = `20250122T${formatTime(endTime)}`;
    const repeatDays = daysOfWeek.map((day) => daysMap[day]).join(",");
    const alarmTrigger = `-PT${alarmMinutesBefore}M`;

    return `
    BEGIN:VEVENT
    SUMMARY:${title}
    DESCRIPTION:${description}
    LOCATION:${location}
    DTSTART:${startDateTime}
    DTEND:${endDateTime}
    RRULE:FREQ=WEEKLY;BYDAY=${repeatDays}
    BEGIN:VALARM
    TRIGGER:${alarmTrigger}
    ACTION:DISPLAY
    DESCRIPTION:Reminder for ${title}
    END:VALARM
    END:VEVENT
    `.trim();
  };

  // Combine all events
  const events = eventDetailsList.map(generateEvent).join("\n");

  const icsContent = `
  BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//Your Organization//Your Product//EN
  CALSCALE:GREGORIAN
  ${events}
  END:VCALENDAR
  `.trim();

  // Create a Blob object
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });

  // Create a download link
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Array of event details for multiple courses
const events = [
  {
    title: "Math 141",
    description: "This is math class room 10",
    location: "Room 10",
    startTime: "13:30", // 1:30 PM
    endTime: "14:45", // 2:45 PM
    daysOfWeek: ["Monday", "Wednesday", "Friday"],
    alarmMinutesBefore: 30,
  },
  {
    title: "ENGR 57",
    description: "Engineering class in room 12",
    location: "Room 12",
    startTime: "10:30", // 10:30 AM
    endTime: "11:20", // 11:20 AM
    daysOfWeek: ["Monday", "Wednesday"],
    alarmMinutesBefore: 15,
  },
];

// Generate a single .ics file with all events
downloadRecurringICSFile(events, "combined_calendar.ics");

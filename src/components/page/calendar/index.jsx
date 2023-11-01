import { useState } from "react";
import { tokens } from "@/src/theme";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../common/Header";

import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import dayjs from "dayjs";

export default function CalendarPage() {
  const dateNow = dayjs(new Date());

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([
    {
      id: "12315",
      title: "1st Interview",
      start: dateNow.add(3, "day").format("YYYY-MM-DD"),
      backgroundColor: colors.greenAccent[500],
      borderColor: colors.greenAccent[500],
      allDay: true,
    },
    {
      id: "5123",
      title: "2nd Interview",
      start: dateNow.add(14, "day").format("YYYY-MM-DD"),
      backgroundColor: colors.blueAccent[500],
      borderColor: colors.blueAccent[500],
      allDay: true,
    },
  ]);

  const handleDateClick = (selected) => {
    const title = prompt(
      `Please enter the title for ${dayjs(selected.startStr).format(
        "D MMMM YYYY"
      )} event`
    );
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        allDay: true,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(`Are you sure you want to delete ${selected.event.title}`)
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box>
      <Header title="calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* Calendar Sidebar / Event Placeholder */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  bgcolor: event.backgroundColor || colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar Grid */}
        <Box
          flex="1 1 80%"
          ml="15px"
          sx={{
            ".fc": {
              "&.fc-theme-standard .fc-list-day-cushion": {
                backgroundColor: colors.primary[500],
              },
              "& .fc-list-event:hover td": {
                backgroundColor: colors.primary[300],
              },
            },
          }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "dayGridMonth,timeGridWeek,listMonth",
              center: "title",
              right: "today prev,next",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={currentEvents}
          />
        </Box>
      </Box>
    </Box>
  );
}

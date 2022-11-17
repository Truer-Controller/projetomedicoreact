import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  Toolbar,
  MonthView,
  DateNavigator,
  TodayButton,
  WeekView,
  ViewSwitcher,
  AppointmentTooltip,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2018-11-01";
const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
    id: 1,
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
    id: 2,
  },
];

export default () => {
  const [data, setData] = React.useState(schedulerData);

  const [currentViewNameChange, setCurrentViewNameChange] =
    React.useState("work-week");

  const [changeAddedAppointment, setChangeAddedAppointment] =
    React.useState({});
  const [changeAddedAppointmentChanges, setChangeAddedAppointmentChanges] =
    React.useState({});
  const [changeEditingAppointment, setChangeEditingAppointment] =
    React.useState(null);

  const commitChangess = ({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;
      setData([...data, { id: startingAddedId, ...added }]);
    }
    if (changed) {
      setData(
        data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        )
      );
    }
    if (deleted !== undefined) {
      setData(data.filter((appointment) => appointment.id !== deleted));
    }
  };

  // commitChanges({ added, changed, deleted }) {
  //   this.setState((state) => {
  //     let { data } = state;
  //     if (added) {
  //       const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
  //       data = [...data, { id: startingAddedId, ...added }];
  //     }
  //     if (changed) {
  //       data = data.map(appointment => (
  //         changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
  //     }
  //     if (deleted !== undefined) {
  //       data = data.filter(appointment => appointment.id !== deleted);
  //     }
  //     return { data };
  //   });
  // }

  return (
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState
          defaultCurrentDate="2018-07-25"
          currentViewName={currentViewNameChange}
          onCurrentViewNameChange={(currentViewName) => {
            setCurrentViewNameChange(currentViewName);
          }}
        />

        <WeekView startDayHour={10} endDayHour={19} />
        <WeekView
          name="work-week"
          displayName="Work Week"
          excludedDays={[0, 6]}
          startDayHour={9}
          endDayHour={19}
        />
        <MonthView />
        <DayView />

        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton />
        <AppointmentForm />
        <Toolbar />
        <DateNavigator />
        <TodayButton />

        <ViewSwitcher />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

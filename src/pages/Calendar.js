import React, { useRef } from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import CalendarAddEventModal from "./CalendarAddEventModal";
import multiMonthplugin from "@fullcalendar/multimonth";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 0;
  padding: 0 15px 15px 0;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  background-color: #1c244b;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #313f83;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
`;



function Calendar(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [dateClicked, setDateClicked] = useState('not defined');
  const calendarRef = useRef(null);
  const propfunc = (data) => setDateClicked(data);   
  const onEventAdded = (event) => {
    
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(event);
  };
  
  return (
    <>
      <Title>Calendar</Title>
      <StyledButton onClick={() => setModalOpen(true)}>Add Event</StyledButton>
      <Wrapper >
        <FullCalendar
          // events={[
          //   { title: 'event 1', start: '2023-09-29T05:30:00', end: '2023-09-29T14:30:00' },
          // ]}
          //style={{overflow: 'hidden', ZIndex: 1}}

          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthplugin]}
          height={"100%"}
          initialView="dayGridMonth"
          multiMonthMaxColumns={3}
          select={(strt) => {
            //alert(strt.start + " selected"  + strt.end + " end selected");
            propfunc(strt);
            setModalOpen(true)
            
          }}
          
          
          selectable={true}
          selectMirror={true}
          navLinks={true} 
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,multiMonthYear",
          }}
        />

        <CalendarAddEventModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onEventAdded={(event) => onEventAdded(event)}
          dateClicked={dateClicked}

        />
      </Wrapper>
    </>
  );
}

export default Calendar;

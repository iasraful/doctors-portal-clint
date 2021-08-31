import React, {useContext} from "react";
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'
import { CalenderContext } from "../../App";

const ReactCalender = () => {
  const calenderData = useContext(CalenderContext)
  const calan = calanderDate.div.value
  const onChange = date => calenderData.setDate(date)

  return (
        <div className="my-calender">
            <Calendar
              onChange={onChange}
              value={calenderData.value}
              valueTwo={calan}
            />
        </div>
    
  );
};

export default ReactCalender;

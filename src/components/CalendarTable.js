import { Container, Table } from "react-bootstrap";
import constant from "../constants.json";
import "./styles/CalendarTable.css";

export default function CalendarTable() {
  return (
    <Container className="table-container">
      <Table className="custom-table" striped bordered>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event Name</th>
            <th>Location</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {constant.calendar.map((event, index) => (
            <tr key={index}>
              <td>{event.date}</td>
              <td>{event.event}</td>
              <td>{event.location}</td>
              <td>{event.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

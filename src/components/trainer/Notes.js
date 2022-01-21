import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'

const Notes = () => {
  return (
    <Accordion className='bg-dark'>
      <Accordion.Item className='bg-dark' eventKey='0'>
        <Accordion.Header>Century Anchor Days</Accordion.Header>
        <Accordion.Body>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Century</th>
                <th>Anchor Day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1700 - 1799</td>
                <td>Sunday</td>
              </tr>
              <tr>
                <td>1800 - 1899</td>
                <td>Friday</td>
              </tr>
              <tr>
                <td>1900 - 1999</td>
                <td>Wednesday</td>
              </tr>
              <tr>
                <td>2000 - 2099</td>
                <td>Tuesday</td>
              </tr>

              <tr>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>2100 - 2199</td>
                <td>Sunday</td>
              </tr>
              <tr>
                <td>2200 - 2299</td>
                <td>Friday</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item
        className='bg-dark'
        eventKey='1'>
        <Accordion.Header>Memorable Doomsdays</Accordion.Header>
        <Accordion.Body>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Doomsdays</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>January</td>
                <td>1/3 in common years and 1/4 in leap years</td>
              </tr>
              <tr>
                <td>February&#39;s Last Day</td>
                <td>2/28 or 2/29 in a leap year</td>
              </tr>
              <tr>
                <td>Pi Day</td>
                <td>3/14</td>
              </tr>
              <tr>
                <td>Double Dates</td>
                <td>4/4, 6/6, 8/8, 10/10, and 12/12</td>
              </tr>

              <tr>
                <td>9-to-5 at 7-11</td>
                <td>5/9, 7/11, 9/5, and 11/7</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className='bg-dark' eventKey='2'>
        <Accordion.Header className='bg-dark'>Weekdays As Numbers</Accordion.Header>
        <Accordion.Body>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Day</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sunday</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>6</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

  )
}
export default Notes

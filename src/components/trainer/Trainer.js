/* eslint-disable no-undef */
import React, { useState, useRef, useEffect } from 'react'
import heroStyles from '../../styles/heroStyles'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Notes from './Notes'
import { Button, ButtonGroup } from 'react-bootstrap'

const isOdd = num => num % 2 === 1

// https://stackoverflow.com/a/9035732
function randomDate (start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const newDate = () => {
  const date = randomDate(new Date('1700-01-01T12:00:00'), new Date('2299-12-31T12:00:00'))
  const century = Math.floor(date.getFullYear() / 100) * 100

  date.setFullYear(century + date.getFullYear() % 50)
  return date
}

const Trainer = ({ msgAlert }) => {
  const [date, setDate] = useState(newDate())
  const [startingNumber, setStartingNumber] = useState('')
  const [firstOddOrEven, setFirstOddOrEven] = useState('')
  const [afterDivision, setAfterDivision
  ] = useState('')
  const [secondOddOrEven, setSecondOddOrEven] = useState('')
  const [modulo7, setModulo7] = useState('-1')
  const [subtractFrom7, setSubtractFrom7] = useState('-1')
  const [anchorDay, setAnchorDay] = useState('')
  const [dayOfWeek, setDayOfWeek] = useState('')
  const [startedTimestamp, setStartedTimestamp] = useState(performance.now())
  const [completedTimestamp, setCompletedTimestamp] = useState(null)

  const refs = {
    startingNumber: useRef(null),
    firstOddOrEven: useRef(null),
    afterDivision: useRef(null),
    secondOddOrEven: useRef(null),
    modulo7: useRef(null),
    subtractFrom7: useRef(null),
    anchorDay: useRef(null),
    dayOfWeek: useRef(null)
  }

  const month = date.toLocaleString('default', { month: 'long' })
  const startingNumberAnswer = date.getFullYear() % 100
  const firstOddOrEvenAnswers = isOdd(startingNumberAnswer)
    ? [startingNumberAnswer + 11, startingNumberAnswer - 17]
    : [startingNumberAnswer]
  const afterDivisionAnswers = firstOddOrEvenAnswers.map(n => n / 2)

  const secondOddOrEvenAnswers = []
  for (const answer of afterDivisionAnswers) {
    if (isOdd(answer)) {
      secondOddOrEvenAnswers.push(answer + 11, answer - 17)
    } else {
      secondOddOrEvenAnswers.push(answer)
    }
  }
  const modulo7Answers = secondOddOrEvenAnswers.map(n => n % 7)
  const subtractFrom7Answers = modulo7Answers.map(n => 7 - n)
  const anchorDayAnswer = new Date(`${date.getFullYear()}-04-04T12:00:00`).toLocaleString('en-us', { weekday: 'long' })
  const dayOfWeekAnswer = date.toLocaleString('en-us', { weekday: 'long' })

  // set focus
  useEffect(() => {
    let refToFocus
    if (startingNumber !== startingNumberAnswer) {
      refToFocus = refs.startingNumber
    } else if (!firstOddOrEvenAnswers.includes(firstOddOrEven)) {
      refToFocus = refs.firstOddOrEven
    } else if (!afterDivisionAnswers.includes(afterDivision)) {
      refToFocus = refs.afterDivision
    } else if (!secondOddOrEvenAnswers.includes(secondOddOrEven)) {
      refToFocus = refs.secondOddOrEven
    } else if (!modulo7Answers.includes(modulo7)) {
      refToFocus = refs.modulo7
    } else if (!subtractFrom7Answers.includes(subtractFrom7)) {
      refToFocus = refs.subtractFrom7
    } else if (anchorDay.toLowerCase() !== anchorDayAnswer.toLowerCase()) {
      refToFocus = refs.anchorDay
    } else if (dayOfWeek.toLowerCase() !== dayOfWeekAnswer.toLowerCase()) {
      refToFocus = refs.dayOfWeek
    }
    refToFocus?.current?.focus()
    if (startingNumber === startingNumberAnswer) {
      refToFocus?.current?.scrollIntoView(true)
    }
  })

  if (dayOfWeek.toLowerCase() === dayOfWeekAnswer.toLowerCase() && !completedTimestamp) {
    setCompletedTimestamp(performance.now())
  }

  const reset = () => {
    setDate(newDate())
    setStartingNumber('')
    setFirstOddOrEven('')
    setAfterDivision('')
    setSecondOddOrEven('')
    setModulo7('-1')
    setSubtractFrom7('-1')
    setAnchorDay('')
    setDayOfWeek('')
    setStartedTimestamp(performance.now())
    setCompletedTimestamp(null)
  }

  return (
    <div style={heroStyles}>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-10 col-lg-7 mx-auto'>
            <Card className='text-center mt-4 pb-2' bg='dark' text='white'>
              <Card.Body>
                <Card.Title>
                  <h2>
        What day of the week is{' '}
                    <span className='text-secondary'>
                      {month}&nbsp;{date.getDate()}&nbsp;{date.getFullYear()}
                    </span>{' '}
        on?
                  </h2>
                </Card.Title>

                <h2>
      First find the <span className='text-primary'>anchor day</span>
                </h2>
                <Form>
                  <Form.Group className='my-3' controlId='startingNumber'>
                    <Form.Label>Enter the starting number</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
          The starting number is the last two digits of the year.
                    </Form.Text>

                    <Form.Control
                      className='mt-2 bg-dark text-primary'
                      type='number'
                      placeholder='Enter Starting Number'
                      value={startingNumber}
                      onChange={e => setStartingNumber(parseInt(e.target.value))}
                      disabled={startingNumber === startingNumberAnswer}
                      ref={refs.startingNumber}
                    />
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${
                      startingNumber === startingNumberAnswer ? '' : 'd-none'
                    }`}
                    controlId='oddOrEven1'
                  >
                    <Form.Label>Odd or Even?</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
          If the number is odd add 11 or subtract 17 (whichever is easier).
                    </Form.Text>
                    <Form.Control
                      className='mt-2 bg-dark text-primary'
                      type='number'
                      placeholder='Enter Answer'
                      value={firstOddOrEven}
                      onChange={e => setFirstOddOrEven(parseInt(e.target.value))}
                      disabled={firstOddOrEvenAnswers.includes(firstOddOrEven)}
                      ref={refs.firstOddOrEven}
                    />
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${
                      firstOddOrEvenAnswers.includes(firstOddOrEven) ? '' : 'd-none'
                    }`}
                    controlId='divide'
                  >
                    <Form.Label>Divide by 2</Form.Label>
                    <Form.Control
                      className='mt-2 bg-dark text-primary'
                      type='number'
                      placeholder='Enter Answer'
                      value={afterDivision}
                      onChange={e => setAfterDivision(parseInt(e.target.value))}
                      disabled={afterDivisionAnswers.includes(afterDivision)}
                      ref={refs.afterDivision}
                    />
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${afterDivisionAnswers.includes(afterDivision) ? '' : 'd-none'}`}
                    controlId='oddOrEven2'
                  >
                    <Form.Label>Odd or Even?</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
    If the number is odd add 11 or subtract 17 (whichever is easier).
                    </Form.Text>
                    <Form.Control
                      className='mt-2 bg-dark text-primary'
                      type='number'
                      placeholder='Enter Answer'
                      value={secondOddOrEven}
                      onChange={e => setSecondOddOrEven(parseInt(e.target.value))}
                      disabled={secondOddOrEvenAnswers.includes(secondOddOrEven)}
                      ref={refs.secondOddOrEven}
                    />
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${secondOddOrEvenAnswers.includes(secondOddOrEven) ? '' : 'd-none'}`}
                    controlId='modulo7'
                  >
                    <Form.Label>Modulo 7</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
                        Find the remainder after dividing by 7
                    </Form.Text>
                    <br />
                    <ButtonGroup className="mt-2 text-white" aria-label="First group"
                      ref={refs.modulo7}>
                      {[0, 1, 2, 3, 4, 5, 6].map(num => (
                        <Button
                          key={num}
                          variant={modulo7Answers.includes(modulo7) && modulo7 === num
                            ? 'primary'
                            : 'outline-primary'}
                          disabled={modulo7Answers.includes(modulo7)}
                          onClick={() => setModulo7(num)}
                        >
                          {num}
                        </Button>
                      ))}

                    </ButtonGroup>
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${
                      modulo7Answers.includes(modulo7) ? '' : 'd-none'
                    }`}
                    controlId='subract7'
                  >
                    <Form.Label>Subtract from 7</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
                        Subtract result from 7
                    </Form.Text>
                    <br/>
                    <ButtonGroup className="mt-2 text-white" aria-label="First group"
                      ref={refs.subtractFrom7}>
                      {[1, 2, 3, 4, 5, 6, 7].map(num => (
                        <Button
                          key={num}
                          disabled={subtractFrom7Answers.includes(subtractFrom7)}
                          variant={subtractFrom7Answers.includes(subtractFrom7) && subtractFrom7 === num
                            ? 'primary'
                            : 'outline-primary'}
                          onClick={() => setSubtractFrom7(num)}>{num}</Button>
                      ))}
                    </ButtonGroup>
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${subtractFrom7Answers.includes(subtractFrom7) ? '' : 'd-none'}`}
                    controlId='modulo7'
                  >
                    <Form.Label>Count Forward {subtractFrom7Answers.length && subtractFrom7Answers[0]} Days</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>Count forward {subtractFrom7Answers.length && subtractFrom7Answers[0]} days from the century&#39;s anchor day to get the year <span className='text-secondary'>{date.getFullYear()}</span>&#39;s anchor day.</Form.Text>
                    <br />
                    <ButtonGroup className="mt-2 text-white" aria-label="First group"
                      ref={refs.anchorDay}>
                      {['Sunday', 'Monday', 'Tuesday', 'Wednesday'].map((day, index) => (
                        <Button
                          key={index}
                          variant={anchorDay.toLowerCase() === anchorDayAnswer.toLowerCase() && anchorDay.toLowerCase() === day.toLowerCase()
                            ? 'primary'
                            : 'outline-primary'}
                          disabled={anchorDay.toLowerCase() === anchorDayAnswer.toLowerCase()}
                          onClick={() => setAnchorDay(day)}>{day}</Button>
                      ))}
                    </ButtonGroup>
                    <ButtonGroup className="mt-2 text-white" aria-label="First group">
                      {['Thursday', 'Friday', 'Saturday'].map((day, index) => (
                        <Button
                          key={index}
                          variant={anchorDay.toLowerCase() === anchorDayAnswer.toLowerCase() && anchorDay.toLowerCase() === day.toLowerCase()
                            ? 'primary'
                            : 'outline-primary'}
                          disabled={anchorDay.toLowerCase() === anchorDayAnswer.toLowerCase()}
                          onClick={() => setAnchorDay(day)}>{day}</Button>
                      ))}
                    </ButtonGroup>
                  </Form.Group>

                  <Form.Group
                    controlId='modulo7'
                  >
                    <Form.Label>Calculate Day of Week</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>Use the doomsday number to calculate the day of the week for <span className='text-secondary'>
                      {month}&nbsp;{date.getDate()}&nbsp;{date.getFullYear()}
                    </span>{' '}</Form.Text>
                    <br />
                    <ButtonGroup className="mt-1 mb-2 text-white" aria-label="First group"
                      ref={refs.dayOfWeek}>
                      {['Sunday', 'Monday', 'Tuesday', 'Wednesday'].map((day, index) => (
                        <Button
                          key={index}
                          variant={dayOfWeek.toLowerCase() === dayOfWeekAnswer.toLowerCase() && dayOfWeek.toLowerCase() === day.toLowerCase()
                            ? 'primary'
                            : 'outline-primary'}
                          disabled={dayOfWeek.toLowerCase() === dayOfWeekAnswer.toLowerCase()}
                          onClick={() => setDayOfWeek(day)}>{day}</Button>
                      ))}
                    </ButtonGroup>
                    <ButtonGroup className="mt-1 mb-2 text-white" aria-label="First group">
                      {['Thursday', 'Friday', 'Saturday'].map((day, index) => (
                        <Button
                          key={index}
                          variant={dayOfWeek.toLowerCase() === dayOfWeekAnswer.toLowerCase() && dayOfWeek.toLowerCase() === day.toLowerCase()
                            ? 'primary'
                            : 'outline-primary'}
                          disabled={dayOfWeek.toLowerCase() === dayOfWeekAnswer.toLowerCase()}
                          onClick={() => setDayOfWeek(day)}>{day}</Button>
                      ))}
                    </ButtonGroup>
                  </Form.Group>
                  {dayOfWeek.toLowerCase() === dayOfWeekAnswer.toLowerCase() && (<>
                    <h2 className='my-2'>Nicely done! ????????</h2>
                    <h4>{((completedTimestamp - startedTimestamp) / 1000).toFixed(2)} seconds</h4>
                  </>)}
                  <Button variant='outline-primary' size='lg' onClick={() => reset()}>
  New Date
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            <Card className='text-center mt-4 pb-2' bg='dark' text='white'>
              <Card.Body>
                <Card.Title>
                  <h2 className='text-primary'>Notes</h2>
                  <Notes/>
                </Card.Title>

              </Card.Body>
            </Card>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Trainer

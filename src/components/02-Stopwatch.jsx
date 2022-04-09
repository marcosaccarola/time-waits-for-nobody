import { useState } from "react"
import { Button, ButtonGroup, Container, Row } from "react-bootstrap"

const Stopwatch=()=>{
    const[seconds,setSeconds]=useState(0)
    const[minutes,setMinutes]=useState(0)
    const[hours,setHours]=useState(0)
    const[intervalId,setIntervalId]=useState(0)
    

    const timeEngine=()=>{
        if(intervalId!==0){
            clearInterval(intervalId)
            setIntervalId(0)
            return
        }

        const newIntervalId=
            setInterval(()=>{
                setSeconds(prevSeconds=>prevSeconds+1)
            },1000)
            setInterval(()=>{
                setMinutes(prevMinutes=>prevMinutes+1)
                setSeconds(0)
            },60000)
            setInterval(()=>{
                setHours(prevHours=>prevHours+1)
                setMinutes(0)
            },3600000)
        setIntervalId(newIntervalId)
    }

    const timeCleaner=()=>{
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setIntervalId(0)
    }

    
    const time=`${hours}:${minutes}:${seconds}`

    return(
        <Container className='Stopwatch'>
            <Row>{time}</Row>
            <ButtonGroup size="lg" className="mb-2">
                <Button onClick={()=>timeEngine()}>Start and Stop</Button>
                <Button onClick={()=>timeCleaner()}>Clear</Button>
            </ButtonGroup>
        </Container>
    )
}

export default Stopwatch
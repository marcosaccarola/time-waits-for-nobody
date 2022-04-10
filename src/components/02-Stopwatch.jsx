import { useState } from "react"
import { Button, ButtonGroup, Container, Row } from "react-bootstrap"

const Stopwatch=()=>{
    const[seconds,setSeconds]=useState(0)
    const[intervalId,setIntervalId]=useState(0)
    
    // in JS I can't run multiple intervals of the same function, all starting at the exact same time, 
    // because JS is single threaded.
    
    // logic handlers

    const timeStartAndPause=()=>{
        if(intervalId!==0){
            clearInterval(intervalId)
            setIntervalId(0)
            return
        }
        const newIntervalId=
            setInterval(()=>{
                setSeconds(prevSeconds=>prevSeconds+1) 
            },1000)
        setIntervalId(newIntervalId)
    }

    const timeReset=async()=>{
        setSeconds(0)
        setIntervalId(0)
    }

    // time viewer

    const viewedSeconds=
        (seconds%60)<10
        ?'0'+seconds%60
        :seconds%60

    const viewedMinutes=
        seconds<600
        ?'0'+parseInt(seconds/60)
        :parseInt(seconds/60)

    const viewedHours=
        seconds<36000
        ?'0'+parseInt(seconds/3600)
        :parseInt(seconds/3600)

    const time=`${viewedHours}:${viewedMinutes}:${viewedSeconds}`

    return(
        <Container className='Stopwatch'>
            <Row style={{minHeight:100}}>
                <h1>{time}</h1>
            </Row>
            <ButtonGroup size="lg" className="mb-2">
                <Button onClick={()=>timeStartAndPause()}>Start and Pause</Button>
        {intervalId===0 && seconds!==0 &&
                <Button onClick={()=>timeReset()}>Reset</Button>
        }
        
            </ButtonGroup>
        </Container>
    )
}

export default Stopwatch
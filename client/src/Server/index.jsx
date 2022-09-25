import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './index.css'
import '../App.css'

export const Server = () => {
    const [records, setRecords] = useState(null)
    const ref = useRef(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/api/records')
            setRecords(res.data)
        }
        fetchData()
    }, [])

    const onSubmit = async () => {
        const recordName = ref.current.value
        try {
            await axios.post('/api/create', { recordName })
            setRecords((prev) => [...prev, { name: recordName }])
            ref.current.value = ''
        } catch (error) {
            console.log('Error', error)
        }
    }

    return (
        <div className="division">
            <div className="aligned-content">
                <label>
                    Create a record: <br />
                    <input ref={ref} type="text" name="name" />
                </label>
                <button className="submit-button" onClick={onSubmit}>
                    Create
                </button>
                <hr />
                <h3>Records in the database:</h3>
                {records?.map(({ name }, index) => (
                    <h5 key={index}>{name}</h5>
                ))}
            </div>
            <div className="aligned-content">
                <button
                    style={{ backgroundColor: '#ddc223' }}
                    className="submit-button"
                >
                    Make it break
                </button>
            </div>
        </div>
    )
}

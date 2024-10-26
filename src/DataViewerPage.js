import React, { useState, useEffect } from 'react';
function DataViewerPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/api/data')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
    return (
        <center>
        <div className='content'>
            <h2>Data Viewer</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sensor Data</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.sensorData}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </center>
    );
}
export default DataViewerPage;
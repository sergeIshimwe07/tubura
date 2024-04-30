import React, { useEffect, useState } from 'react'
import { Button, Table, Modal, Card } from "flowbite-react";

function AdminPanel() {
  const endPoint = process.env.REACT_APP_API_URL;
  const [userData, setUserData] = useState([])
  const [datePicker, setDatePicker] = useState("")

  const token = localStorage.getItem('token')
  const callCreateAttandance = (e) => {
    e.preventDefault();
    fetch(endPoint + '/createAttendance', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      let status = res.status
      res.json()
      alert("Yoherejwe");
    }).then(
      // data => alert(data)
    ).catch(erro => console.error(erro))
  }
  useEffect(() => {
    fetch(endPoint + "/getAttendance", {
      method: "get"
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data, "GET DATA IS HHERE MY FRIEND")
        setUserData(data)
      })
      .catch(error => console.log(error))
  }, []);

  const handleExport = (e) => {
    e.preventDefault();
    console.log(datePicker, "DATEPCIKER");
    fetch(endPoint + '/getAttendance/1', {
      method: "POST",
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch(error => console.error(error))
  }
  return (
    <>
      <section className='m-auto'>
        <section className='flex justify-center pt-4'>
          <Card href="#" className="max-w-lg">
            <div></div>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-12'>
              {/* Form */}
              <div className="col-span-12 sm:col-span-6">
                <form className='' onSubmit={handleExport}>
                  <div className='grid grid-cols-1 sm:grid-cols-12 gap-2'>
                    <div className='col-span-9'>
                      <input type="date"
                        className='border-gray-200 border-2 rounded-lg'
                        onChange={(e) => setDatePicker(e.target.value)}
                      />
                    </div>
                    <div className='col-span-3'>
                      <Button color="success" type='submit'>Export</Button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Additional Button */}
              <div className='col-span-3'>
                <Button onClick={callCreateAttandance} color="success">New</Button>
              </div>
            </div>
          </Card>
        </section>
        <section className='pt-4'>
          <Card>
            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>District</Table.HeadCell>
                  <Table.HeadCell>SFID</Table.HeadCell>
                  <Table.HeadCell>Zone</Table.HeadCell>
                  <Table.HeadCell>Date</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {userData.length > 0 ? (
                    userData.map((value, index) => (
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {value.names}
                        </Table.Cell>
                        <Table.Cell>{value.district}</Table.Cell>
                        <Table.Cell>{value.sfid}</Table.Cell>
                        <Table.Cell>{value.sector}</Table.Cell>
                        <Table.Cell>{value.event_date}</Table.Cell>
                      </Table.Row>
                    ))
                  ) : (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      </Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </div>
          </Card>
        </section>
      </section>
    </>
  )
}

export default AdminPanel

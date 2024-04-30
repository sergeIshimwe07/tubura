import React, { useEffect, useState } from 'react'
import { Button, Table, Modal, Card } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function AdminPanel() {
  const endPoint = process.env.REACT_APP_API_URL;
  const [userData, setUserData] = useState([])
  const [datePicker, setDatePicker] = useState("")
  const [openModal, setOpenModal] = useState(false);
  const [openModalSend, setOpenModalSent] = useState(false);

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
      res.json()
      setOpenModal(!openModal)
      setOpenModalSent(!openModalSend)
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
      {/* Confirm Sent Mails Modal */}
      <Modal show={openModalSend} size="md" onClose={() => setOpenModalSent(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-green-900 dark:text-gray-400">
              Yoherejwe!
            </h3>
          </div>
        </Modal.Body>
      </Modal>
      {/* Confirm Send Mails Modal */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Urashaka kohereza Lisitiri?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="success"
                onClick={callCreateAttandance}
              >
                {"Emeza"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Hoya
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
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
                <Button
                  onClick={() => setOpenModal(true)}
                  color="success">New</Button>
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

import React from 'react'
import { Card } from "flowbite-react";
import { Datepicker, Button, Table } from "flowbite-react";

function AdminPanel() {
  return (
    <>
      <section className='m-auto'>
        <section className='flex justify-center pt-4'>
          <Card href="#" className="max-w-sm">
            <div></div>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-2'>
              <div className='col-span-6'> <Datepicker /></div>
              <div className='col-span-3'> <Button color="success">Export</Button></div>
              <div className='col-span-3'><Button color="success">New</Button></div>
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
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {'Apple MacBook Pro 17"'}
                    </Table.Cell>
                    <Table.Cell>Tubura</Table.Cell>
                    <Table.Cell>Gasabo</Table.Cell>
                    <Table.Cell>Nyrufunzo</Table.Cell>
                    <Table.Cell>Today</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Microsoft Surface Pro
                    </Table.Cell>
                    <Table.Cell>White</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                    <Table.Cell>$1999</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                    <Table.Cell>Black</Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                    <Table.Cell>$99</Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
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

import React from 'react'
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
function UserPage() {
  return (

    <section className=' flex bg-acre-yellow-bg justify-center w-screen h-auto min-h-screen'>
      <div className='relative h-full w-full'>
        {/* <div className='justify-center'>
          <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-20 h-20 object-cover top-0' />
        </div> */}
        <div className='flex flex-col justify-center h-full items-center pr-10 pb-10 pt-6'>
          <h2 className='rounded-lg mb-4 bg-transparent border-2 text-white px-4 py-2 border-white'>UBWITABIRE BWA FO</h2>
          <form className="flex max-w-md flex-col gap-4 w-full">
            <div className='bg-white p-14'>
              <div>
                <div className="mb-2">
                  <Label htmlFor="amazina" value="Amazina" />
                </div>
                <TextInput id="amazina" type="text" placeholder="amazina yawe hano..." required />
              </div>
              <div>
                <div className="mb-2">
                  <Label htmlFor="sfid" value="SFID" />
                </div>
                <TextInput id="sfid" type="text" placeholder="nimero uhemberwaho..." required />
              </div>
              <div>
                <div className="mb-2">
                  <Label htmlFor="district" value="Akarere" />
                </div>
                <TextInput id="district" type="text" placeholder="shyiramo Akarere..." required />
              </div>
              <div>
                <div className="mb-2">
                  <Label htmlFor="zone" value="SITE cg Zone" />
                </div>
                <TextInput id="zone" type="text" placeholder="zone yawe..." required />
              </div>
            </div>
            <Button className='rounded-lg' type="submit">Emeza</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserPage

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
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
  const endPoint = process.env.REACT_APP_API_URL;
  const { attendanceId, district1 } = useParams()
  const [name, setName] = useState("");
  const [sfid, setSfid] = useState("");
  const [district, setDistrict] = useState("");
  const [zone, setZone] = useState("");
  const token = localStorage.getItem('token')
  console.log(token, "TOKEN fgee HERE")
  const attendanceId2 = 1;
  const districtss = 2;
  console.log(attendanceId, "ATTENDANCEID");
  console.log(district1, "DISTRIST");

  //=== fx ===

  const onSubmiDatat = (e) => {
    e.preventDefault();
    const payLoad = {
      attendance_id: 2,
      names: name,
      sfid,
      sector: zone,
      district: 1
    };
    fetch(endPoint + "/saveAttendance", {
      method: 'POST',
      body: JSON.stringify(payLoad)
    })
      .then(res => res.json())
      .then((data) => {
        if (data.message === "Attendate is succefully created") {
          alert("Byoherejwe, Murakoze!")
        }
      })
      .catch(err => console.error(err))
  }
  return (
    <>
      <section className=' flex bg-acre-yellow-bg justify-center w-full h-auto min-h-screen'>
        <div className='relative h-full w-full'>
          <div className='flex justify-center items-center mt-6 mb-2'>
            <img src="https://pbs.twimg.com/ext_tw_video_thumb/1215174872126644230/pu/img/_cBhmb1qFH9jo8a3.jpg" alt="" className='w-[200px] h-auto items-center justify-center' />
          </div>
          <div className='flex flex-col justify-center h-full items-center pr-10 pb-10 pt-6'>

            <form className="flex max-w-md flex-col gap-4 w-full" onSubmit={onSubmiDatat}>
              <div className='bg-white p-14'>
                <h2 className='mb-4 bg-transparent px-4 py-2 items-center justify-center text-center font-extrabold'>UBWITABIRE BWA FO</h2>
                <div>
                  <div className="mb-2">
                    <Label htmlFor="amazina" value="Amazina" />
                  </div>
                  <TextInput
                    id="amazina" type="text"
                    placeholder="amazina yawe hano..."
                    onChange={(e) => setName(e.target.value)}
                    required />
                </div>
                <div>
                  <div className="mb-2">
                    <Label htmlFor="sfid" value="SFID" />
                  </div>
                  <TextInput
                    id="sfid"
                    type="text"
                    placeholder="nimero uhemberwaho..."
                    onChange={(e) => setSfid(e.target.value)}
                    required />
                </div>
                <div>
                  <div className="mb-2">
                    <Label htmlFor="district" value="Akarere" />
                  </div>
                  <TextInput
                    id="district"
                    type="text"
                    placeholder="shyiramo Akarere..."
                    onChange={(e) => setDistrict(e.target.value)}
                    required />
                </div>
                <div>
                  <div className="mb-2">
                    <Label htmlFor="zone" value="SITE cg Zone" />
                  </div>
                  <TextInput
                    id="zone"
                    type="text"
                    placeholder="zone yawe..."
                    onChange={(e) => setZone(e.target.value)}
                    required />
                </div>
              </div>
              <Button className='rounded-lg' type="submit">Emeza</Button>
            </form>
          </div>
        </div>
      </section >
    </>
  )
}

export default UserPage

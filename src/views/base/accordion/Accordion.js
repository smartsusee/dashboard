import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Post_data } from './url'
import './student_details.css'
import numberToWords from 'number-to-words'
const Accordion = () => {
  const [data, setdata] = useState([])
  const [incre, setincre] = useState(1)
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [FatherName, setFatherName] = useState('')
  const [MotherName, setMotherName] = useState('')
  const [Email, setEmail] = useState('')
  const [Address, setAddress] = useState('')
  const [DateofBirth, setDateofBirth] = useState('')
  const [Contact, setContact] = useState('')
  const [FatherNumber, setFatherNumber] = useState('')
  const [MaritalStatus, setMaritalStatus] = useState('')
  const [ref, setref] = useState(true)

  const [Gender, setGender] = useState()
  const [Qualification, setQualification] = useState('')
  const [CGPAPercentage, setCGPAPercentage] = useState('')
  const [PassedOutYear, setPassedOutYear] = useState('')
  const [TotalAmount, setTotalAmount] = useState(30000)
  const [PaidAmount, setPaidAmount] = useState('')
  const [RemainingAmount, setRemainingAmount] = useState('')
  let cilck_btn = async () => {
    await axios
      .post(Post_data, {
        FirstName,
        LastName,
        FatherName,
        MotherName,
        Email,
        Address,
        DateofBirth,
        Contact,
        FatherNumber,
        MaritalStatus,
        Gender,
        Qualification,
        CGPAPercentage,
        PassedOutYear,
        TotalAmount,
        PaidAmount,
        RemainingAmount,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    // useNavigate('/base/bredcrumbs')
    setFirstName('')
    setLastName('')
    setFatherName('')
    setMotherName('')
    setEmail('')
    setAddress('')
    setDateofBirth('')
    setContact('')
    setFatherName('')
    setMaritalStatus('')
    setGender('')
    setQualification('')
    setCGPAPercentage('')
    setPassedOutYear('')
    setTotalAmount('')
    setPaidAmount('')
    setRemainingAmount('')
  }

  // const [postperpage, setpostperpage] = useState(2)

  return (
    <>
      <div id="student-details">
        <table id="details">
          <tr>
            <th>
              <span>FirstName:</span>
            </th>
            <td>
              <input type="text" onChange={(e) => setFirstName(e.target.value)} value={FirstName} />
            </td>
          </tr>
          <tr>
            <th>
              <span>LastName:</span>
            </th>
            <td>
              <input type="text" onChange={(e) => setLastName(e.target.value)} value={LastName} />
            </td>
          </tr>
          <tr>
            <th>
              <span>FatherName:</span>
            </th>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setFatherName(e.target.value)
                }}
                value={FatherName}
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>MotherName:</span>
            </th>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setMotherName(e.target.value)
                }}
                value={MotherName}
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>Email:</span>
            </th>
            <td>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={Email}
              />
            </td>
          </tr>

          <tr>
            <th>
              <span>Address:</span>
            </th>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                value={Address}
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>DateofBirth:</span>
            </th>
            <td>
              <input
                type="date"
                onChange={(e) => {
                  setDateofBirth(e.target.value)
                }}
                value={DateofBirth}
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>Contact:</span>
            </th>
            <td>
              <input
                type="number"
                onChange={(e) => {
                  setContact(e.target.value)
                }}
                value={Contact}
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>FatherNumber:</span>
            </th>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setFatherNumber(e.target.value)
                }}
                value={FatherNumber}
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>MaritalStatus:</span>
            </th>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setMaritalStatus(e.target.value)
                }}
                value={MaritalStatus}
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>Gender:</span>
            </th>
            <td>
              <span>male</span>
              <input
                type="radio"
                onChange={(e) => {
                  setGender(e.target.value)
                  console.log(Gender)
                }}
                value="male"
                name="gender"
              />
              <span style={{ marginLeft: '20px' }}>female</span>
              <input
                type="radio"
                onChange={(e) => {
                  setGender(e.target.value)
                  console.log(Gender)
                }}
                value="female"
                name="gender"
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>Qualification:</span>
            </th>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setQualification(e.target.value)
                }}
                value={Qualification}
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>CGPAPercentage:</span>
            </th>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setCGPAPercentage(e.target.value)
                }}
                value={CGPAPercentage}
              />
            </td>
          </tr>

          <tr>
            <th>
              <span>PassedOutYear:</span>
            </th>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setPassedOutYear(e.target.value)
                }}
                value={PassedOutYear}
              />
            </td>
          </tr>

          <tr>
            <th>
              <span>TotalAmount:</span>
            </th>
            <td>
              <input type="text" value={TotalAmount} />
            </td>
          </tr>
          <tr>
            <th>
              <span>PaidAmount:</span>
            </th>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  let Remaining = TotalAmount - e.target.value
                  setPaidAmount(e.target.value)
                  setRemainingAmount(Remaining)
                }}
                value={PaidAmount}
              />
            </td>
          </tr>
          <tr>
            <th>
              <span>RemainingAmount:</span>
            </th>
            <td>
              <input type="text" value={RemainingAmount} />
            </td>
          </tr>
          <tr key="">
            <td>
              <button onClick={cilck_btn}>Submit</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Accordion

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { get_data } from './url'
import './student.css'
const Breadcrumbs = () => {
  const [data, setdata] = useState([])
  const [incre, setincre] = useState(1)
  const [Address, setAddress] = useState('')
  const [CGPAPercentage, setCGPAPercentage] = useState('')
  const [Contact, setContact] = useState('')
  const [DateofBirth, setDateofBirth] = useState('')
  const [Email, setEmail] = useState('')
  const [FatherName, setFatherName] = useState('')
  const [FatherNumber, setFatherNumber] = useState('')
  const [FirstName, setFirstName] = useState('')
  const [Gender, setGender] = useState('')
  const [LastName, setLastName] = useState('')
  const [MaritalStatus, setMaritalStatus] = useState('')
  const [MotherName, setMotherName] = useState('')
  const [PaidAmount, setPaidAmount] = useState('')
  const [PassedOutYear, setPassedOutYear] = useState('')
  const [Qualification, setQualification] = useState('')
  const [RemainingAmount, setRemainingAmount] = useState('')
  const [TotalAmount, setTotalAmount] = useState('')
  useEffect(() => {
    axios.get(get_data).then((res) => {
      setdata(res.data)
      console.log(res.data)
    })
  }, [])
  const [currentPage, setCurrentPage] = useState(1)
  // const [postperpage, setpostperpage] = useState(2)

  const recordsPerPage = 1
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage

  const records = data.slice(firstIndex, lastIndex)
  const npage = Math.ceil(data.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)
  console.log(numbers)
  // currentPage = 1
  // postperPage = 8
  // const lastPostIndex = currentPage * postperpage
  // const firstPostIndex = lastPostIndex - postperpage
  // const currentPosts = data.slice(firstPostIndex, lastPostIndex)
  // const totalPosts = data.length
  // console.log(currentPosts)
  // let page = []

  // for (let i = 1; i <= Math.ceil(totalPosts / postperpage); i++) {
  //   page.push(i)
  // }
  function prepage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextpage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage + 1)
    }
  }

  function edit_data(v) {
    console.log(v)
  }
  return (
    <>
      {/* {page.map((v, i) => (
        <button
          key={i}
          onClick={() => {
            setCurrentPage(v)
            console.log(currentPage)
            console.log('pagenation')
          }}
          className={page == currentPage ? 'active' : ''}
        >
          {v}
        </button>
      ))} */}
      <div id="container_1">
        <table className="table table-bordered text-center ">
          <thead>
            <tr>
              <th>No</th>

              <th>Address</th>
              <th>CGPAPercentage</th>
              <th>Contact</th>
              <th>DateofBirth</th>
              <th>Email</th>
              <th>FatherName</th>
              <th>FatherNumber</th>
              <th>FirstName</th>
              <th>Gender</th>
              <th>LastName</th>
              <th>MaritalStatus</th>
              <th>MotherName</th>
              <th>PaidAmount</th>
              <th>PassedOutYear</th>
              <th>Qualification</th>
              <th>RemainingAmount</th>
              <th>TotalAmount</th>
              <th>Edit_Action</th>
              <th>del_Action</th>
            </tr>
          </thead>
          <tbody>
            {records &&
              records.map((v, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{v.Address}</td>
                  <td>{v.CGPAPercentage}</td>
                  <td>{v.Contact}</td>
                  <td>{v.DateofBirth}</td>
                  <td>{v.Email}</td>
                  <td>{v.FatherName}</td>
                  <td>{v.FatherNumber}</td>
                  <td>{v.FirstName}</td>
                  <td>{v.Gender}</td>
                  <td>{v.LastName}</td>
                  <td>{v.MaritalStatus}</td>
                  <td>{v.MotherName}</td>
                  <td>{v.PaidAmount}</td>
                  <td>{v.PassedOutYear}</td>
                  <td>{v.Qualification}</td>
                  <td>{v.RemainingAmount}</td>
                  <td>{v.TotalAmount}</td>
                  <td>
                    <button
                      onClick={() => {
                        edit_data(v)
                      }}
                    >
                      edit
                    </button>
                  </td>

                  <td>
                    <button style={{ width: '20px' }}>del</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagenation">
            <li className="page-item">
              <span href="#" className="page-link" onClick={prepage}>
                prev
              </span>
            </li>
            {numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <span onClick={() => changeCPage(n)}>{n}</span>
              </li>
            ))}
            <li className="page-item">
              <span className="page-link" onClick={nextpage}>
                next
              </span>
            </li>
          </ul>
        </nav>
      </div>
      {/* <Paginations /> */}
    </>
  )
}

export default Breadcrumbs

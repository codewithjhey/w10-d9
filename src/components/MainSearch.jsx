import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Spinner } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import Job from "./Job"
import { getJobsAction } from "../redux/actions"

const MainSearch = () => {
  const [query, setQuery] = useState("")
  const jobTray = useSelector((state) => state.jobs.jobTray)

  const dispatch = useDispatch()

  useEffect(() => {
    getJobsAction()
  }, [])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(getJobsAction(query))
  }

  const areJobsLoading = useSelector((state) => state.jobs.isLoading)

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="text-center">Remote Jobs Search</h1>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {areJobsLoading && (
          <Col>
            <Spinner animation="border" variant="danger" className="ml-5" />
          </Col>
        )}

        <Col xs={10} className="mx-auto mb-5">
          {jobTray.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
